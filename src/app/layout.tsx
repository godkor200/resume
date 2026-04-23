import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '유병국 | 5년차 Backend Developer',
  description: '5년차 백엔드 개발자 유병국의 포트폴리오 — 데이터 흐름과 조회 패턴을 기준으로 확장 가능한 구조를 설계합니다.',
  openGraph: {
    title: '유병국 | 5년차 Backend Developer',
    description: '데이터 흐름과 조회 패턴을 기준으로 확장 가능한 구조를 설계하는 5년차 백엔드 개발자',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
