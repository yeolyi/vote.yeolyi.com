import { siGithub, type SimpleIcon } from "simple-icons/icons";

// 카카오 로그인 가이드의 말풍선 심볼 단독. (카카오톡 앱 아이콘이 아닌
// 채팅 말풍선 모양만.) 노란 원형 컨테이너 위에 검은색으로 얹는 구성을
// 가정하여 currentColor 사용.
function KakaoBubble({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 18"
      className={className}
      fill="currentColor"
      aria-label="KakaoTalk"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 1.5C4.30558 1.5 0.5 4.43906 0.5 8.06425C0.5 10.4156 2.10254 12.4759 4.50902 13.6428C4.32256 14.331 3.83477 16.1407 3.74097 16.527C3.62408 17.0066 3.92122 17.0001 4.11595 16.8689C4.26954 16.7654 6.54011 15.2326 7.51928 14.5708C8.0017 14.6402 8.49633 14.6786 9 14.6786C13.6944 14.6786 17.5 11.7395 17.5 8.06425C17.5 4.43906 13.6944 1.5 9 1.5Z"
      />
    </svg>
  );
}

// Google "G"는 브랜딩 가이드상 멀티컬러 필수 (단색화 금지) — 인라인 SVG.
// https://developers.google.com/identity/branding-guidelines
function GoogleG({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      className={className}
      aria-label="Google"
    >
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
      />
      <path
        fill="#FBBC05"
        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
      />
    </svg>
  );
}

const ICONS: Record<string, SimpleIcon> = {
  github: siGithub,
};

export default function BrandIcon({
  brand,
  className,
}: {
  brand: "kakao" | "google" | "github";
  className?: string;
}) {
  if (brand === "google") return <GoogleG className={className} />;
  if (brand === "kakao") return <KakaoBubble className={className} />;

  const icon = ICONS[brand];
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="currentColor"
      aria-label={icon.title}
    >
      <path d={icon.path} />
    </svg>
  );
}
