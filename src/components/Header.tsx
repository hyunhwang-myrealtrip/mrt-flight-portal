import accountIcon from "../assets/icons/account_circle.svg";

interface HeaderProps {
  query: string;
  onQueryChange: (value: string) => void;
}

export function Header({ query, onQueryChange }: HeaderProps) {
  return (
    <header className="portal-header">
      <div>
        <div className="portal-eyebrow">MARKETING OPS</div>
        <h1 className="portal-title">라이브 · 기획전 운영 도구</h1>
        <p className="portal-description">
          흩어진 도구를 한곳에서 열고, 준비 단계를 체크리스트로 따라가세요.
        </p>
      </div>
      <div className="portal-header-actions">
        <input
          className="portal-search"
          placeholder="도구 이름으로 검색"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
        />
        <img src={accountIcon} alt="" className="portal-account-icon" />
      </div>
    </header>
  );
}
