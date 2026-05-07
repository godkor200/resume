'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const sectionItemsByPage: Record<string, { label: string; href: string }[]> = {
  '/': [
    { label: '자기소개', href: '#about' },
    { label: '기술 스택', href: '#skills' },
    { label: '경력', href: '#career' },
    { label: '포트폴리오', href: '#portfolio' },
    { label: '사이드 프로젝트', href: '#sideproject' },
    { label: '기여 방식', href: '#contribution' },
    { label: '학력', href: '#education' },
  ],
  '/career': [
    { label: '자기소개', href: '#about' },
    { label: '기술 스택', href: '#skills' },
    { label: '경력', href: '#career' },
    { label: '학력', href: '#education' },
  ],
  '/portfolio': [
    { label: '포트폴리오', href: '#portfolio' },
    { label: '사이드 프로젝트', href: '#sideproject' },
    { label: '기여 방식', href: '#contribution' },
  ],
}

const pageTabs = [
  { label: '전체', href: '/' },
  { label: '이력서', href: '/career' },
  { label: '포트폴리오', href: '/portfolio' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  const sectionItems = sectionItemsByPage[pathname] ?? sectionItemsByPage['/']

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 print:hidden ${
        scrolled ? 'bg-white/95 backdrop-blur shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo + page tabs */}
        <div className="flex items-center gap-4">
          <span className="font-bold text-gray-900 text-sm tracking-tight">유병국</span>
          <div className="hidden sm:flex items-center gap-1">
            {pageTabs.map((tab) => (
              <Link
                key={tab.href}
                href={tab.href}
                className={`text-xs px-2.5 py-1 rounded-full transition-colors ${
                  pathname === tab.href
                    ? 'bg-blue-600 text-white font-semibold'
                    : 'text-gray-400 hover:text-gray-700'
                }`}
              >
                {tab.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Desktop section anchors */}
        <ul className="hidden md:flex items-center gap-5">
          {sectionItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-gray-500 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-600"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="메뉴"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-4">
          <div className="flex gap-2">
            {pageTabs.map((tab) => (
              <Link
                key={tab.href}
                href={tab.href}
                onClick={() => setMenuOpen(false)}
                className={`text-xs px-2.5 py-1 rounded-full transition-colors ${
                  pathname === tab.href
                    ? 'bg-blue-600 text-white font-semibold'
                    : 'bg-gray-100 text-gray-500'
                }`}
              >
                {tab.label}
              </Link>
            ))}
          </div>
          <ul className="flex flex-col gap-3">
            {sectionItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-gray-600 hover:text-blue-600"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
