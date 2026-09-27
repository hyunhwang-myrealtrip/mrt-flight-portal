// Vercel Edge Function — 팀 내부에서 쓰던 항공 최저가 스크레이핑 서버(myrealflight.duckdns.org)를
// 대신 호출하는 프록시. http라서 브라우저(https 페이지)에서 직접 부르면 mixed-content로 막히고,
// CORS 헤더도 없어서 이 함수가 대신 호출해 돌려준다. MCP와 달리 레이트리밋이 없고, 노선당 한 번
// 요청으로 기간 내 전 날짜 x 전 항공사 가격을 한꺼번에 받아온다(비동기 task, 폴링으로 결과 수신).
export const config = { runtime: "edge" };

const SEARCH_API = "http://myrealflight.duckdns.org/api/search";
const RESULT_API = "http://myrealflight.duckdns.org/api/result";

const CORS_HEADERS: Record<string, string> = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
  });
}

export default async function handler(request: Request): Promise<Response> {
  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: CORS_HEADERS });
  }

  try {
    if (request.method === "POST") {
      const body = await request.text();
      const res = await fetch(SEARCH_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
      });
      if (!res.ok) return json({ error: "검색 요청 실패: " + res.status }, 502);
      const data = await res.json();
      return json(data);
    }

    if (request.method === "GET") {
      const url = new URL(request.url);
      const taskId = url.searchParams.get("taskId");
      if (!taskId) return json({ error: "taskId 파라미터가 필요합니다" }, 400);
      const res = await fetch(RESULT_API + "/" + encodeURIComponent(taskId));
      if (!res.ok) return json({ error: "결과 조회 실패: " + res.status }, 502);
      const data = await res.json();
      return json(data);
    }

    return json({ error: "GET/POST만 지원합니다" }, 405);
  } catch {
    return json({ error: "항공 검색 서버에 연결하지 못했습니다" }, 502);
  }
}
