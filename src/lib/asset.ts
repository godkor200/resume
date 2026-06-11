// public/ 자산은 GitHub Pages에서 basePath(/resume) 하위에 배포된다.
// next/image(unoptimized)는 src에 basePath를 자동으로 붙이지 않으므로,
// 절대경로 자산에 한해 프로덕션에서 직접 prefix를 붙인다.
// (basePath 값은 next.config.js의 basePath와 일치해야 함)
const BASE_PATH = process.env.NODE_ENV === 'production' ? '/resume' : ''

export function asset(path: string): string {
  return path.startsWith('/') ? `${BASE_PATH}${path}` : path
}

// 배포된 웹 이력서 URL. PDF에는 인터랙티브 요소(갤러리 등)가 빠지므로,
// 인쇄 전용 링크로 이 URL을 노출해 웹 버전으로 유도한다.
export const SITE_URL = 'https://godkor200.github.io/resume/'
