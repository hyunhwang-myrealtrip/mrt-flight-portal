// Vercel Edge Function — 브라우저에서 마이리얼트립 MCP 서버를 직접 부르면 CORS로 막히기
// 때문에, 이 함수가 대신 호출하고 CORS 헤더를 붙여 돌려준다. flightsFareCalendar(날짜별
// 캘린더 추정가)와 searchInternationalFlights(실시간 검색가)를 둘 다 이 엔드포인트로 받는다.
// 파트너 API 키가 필요 없다 — MCP 엔드포인트는 별도 인증이 없다.
export const config = { runtime: "edge" };

const MCP_ENDPOINT = "https://mcp-servers.myrealtrip.com/mcp";

const CORS_HEADERS: Record<string, string> = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
  });
}

async function callMcpTool(name: string, args: Record<string, unknown>) {
  const res = await fetch(MCP_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json, text/event-stream" },
    body: JSON.stringify({ jsonrpc: "2.0", id: 1, method: "tools/call", params: { name, arguments: args } }),
  });
  if (!res.ok) throw new Error(String(res.status));
  const data = await res.json();
  const text = data?.result?.content?.[0]?.text;
  const parsed = text ? JSON.parse(text) : data?.result?.structuredContent;
  if (!parsed) throw new Error("cannot-parse");
  return parsed;
}

export default async function handler(request: Request): Promise<Response> {
  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: CORS_HEADERS });
  }
  if (request.method !== "GET") {
    return json({ error: "GET만 지원합니다" }, 405);
  }

  const url = new URL(request.url);
  const mode = url.searchParams.get("mode") ?? "calendar";
  const from = url.searchParams.get("from");
  const to = url.searchParams.get("to");

  if (!from || !to) {
    return json({ error: "from, to 파라미터가 필요합니다" }, 400);
  }

  try {
    if (mode === "search") {
      const departDate = url.searchParams.get("departDate");
      const returnDate = url.searchParams.get("returnDate");
      if (!departDate) return json({ error: "departDate 파라미터가 필요합니다" }, 400);
      const parsed = await callMcpTool("searchInternationalFlights", {
        tripType: returnDate ? "ROUND_TRIP" : "ONE_WAY",
        origin: from,
        destination: to,
        departDate,
        returnDate: returnDate || undefined,
        maxResults: 5,
      });
      return json(parsed);
    }

    const departureDate = url.searchParams.get("departureDate");
    const period = Number(url.searchParams.get("period") ?? "4");
    if (!departureDate) return json({ error: "departureDate 파라미터가 필요합니다" }, 400);
    const parsed = await callMcpTool("flightsFareCalendar", {
      from,
      to,
      departureDate,
      period,
      airlines: ["*"],
      international: true,
      maxResults: 60,
    });
    return json(parsed);
  } catch (e) {
    if (e instanceof Error && /^\d+$/.test(e.message)) {
      return json({ error: "MCP 요청 실패: " + e.message }, 502);
    }
    return json({ error: "MCP 서버에 연결하지 못했습니다" }, 502);
  }
}
