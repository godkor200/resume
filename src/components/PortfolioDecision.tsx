'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { portfolio } from '@/data/resume'
import { asset } from '@/lib/asset'
import SectionHeader from './SectionHeader'

type GalleryItem = { src: string; label: string; description?: string }

// 갤러리는 화면에서 토글로 펼쳐 보지만, 정적 PDF에는 담기지 않는다.
// PDF(인쇄)에서는 라이브 사이트의 포트폴리오 페이지로 가는 링크로 대체한다.
const LIVE_PORTFOLIO_URL = 'https://godkor200.github.io/resume/portfolio/'

function Lightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  images: GalleryItem[]
  index: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose, onPrev, onNext])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
        aria-label="닫기"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); onPrev() }}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
        aria-label="이전"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <div
        className="flex items-center gap-6 max-w-6xl max-h-full w-full px-12"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={asset(images[index].src)}
          alt={images[index].label}
          width={1200}
          height={800}
          className="max-h-[85vh] max-w-[70%] object-contain rounded-lg shrink-0"
          unoptimized
        />
        <div className="flex flex-col gap-3 flex-1 max-w-[360px]">
          <p className="text-white/40 text-xs">{index + 1} / {images.length}</p>
          <p className="text-white font-semibold text-sm">{images[index].label}</p>
          {images[index].description && (
            <p className="text-white/60 text-xs leading-5 whitespace-pre-line">{images[index].description}</p>
          )}
        </div>
      </div>

      <button
        onClick={(e) => { e.stopPropagation(); onNext() }}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
        aria-label="다음"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  )
}

function ProjectCard({ project }: { project: (typeof portfolio)[number] }) {
  const [galleryOpen, setGalleryOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const gallery = (project as { gallery?: GalleryItem[] }).gallery

  const closeLightbox = useCallback(() => setLightboxIndex(null), [])
  const prevImage = useCallback(() => {
    if (lightboxIndex === null || !gallery) return
    setLightboxIndex((lightboxIndex - 1 + gallery.length) % gallery.length)
  }, [lightboxIndex, gallery])
  const nextImage = useCallback(() => {
    if (lightboxIndex === null || !gallery) return
    setLightboxIndex((lightboxIndex + 1) % gallery.length)
  }, [lightboxIndex, gallery])

  return (
    <>
      {lightboxIndex !== null && gallery && (
        <Lightbox
          images={gallery}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}

      <div className="border border-gray-200 rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="p-6 md:p-8">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
            <div>
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <h3 className="text-lg font-bold text-gray-900">{project.name}</h3>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-600 transition-colors"
                  aria-label="외부 링크"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                {project.cofounder && (
                  <span className="px-2 py-0.5 bg-amber-50 text-amber-700 border border-amber-200 rounded text-xs font-bold tracking-wide">
                    Co-founder
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-500">{project.company} · {project.period}</p>
            </div>
            <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold whitespace-nowrap self-start">
              {project.badge}
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span key={tech} className="px-2.5 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Decision detail */}
        <div className="border-t border-gray-100 bg-gray-50 px-6 md:px-8 py-6 space-y-5">
          <div>
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">마주한 문제</h4>
            <p className="text-sm text-gray-600 leading-7">{project.problem}</p>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">판단과 해결</h4>
            <p className="text-sm text-gray-600 leading-7">{project.solution}</p>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">아키텍처</h4>
            <p className="text-sm text-gray-500 leading-7">{project.techDetail}</p>
          </div>

          {/* Footer links */}
          <div className="pt-2 border-t border-gray-200 flex flex-wrap items-center gap-4">
            {project.notion && (
              <a
                href={project.notion}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors group"
              >
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"/>
                </svg>
                <span>더 자세한 내용 보기</span>
                <span className="text-gray-300 group-hover:text-gray-500 transition-colors">→</span>
              </a>
            )}

            {gallery && gallery.length > 0 && (
              <>
                {/* 화면: 인라인 토글 */}
                <button
                  onClick={() => setGalleryOpen(!galleryOpen)}
                  className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 font-medium transition-colors print:hidden"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {galleryOpen ? '갤러리 닫기' : `갤러리 (${gallery.length})`}
                </button>
                {/* PDF(인쇄): 라이브 갤러리 링크로 리다이렉션 */}
                <a
                  href={LIVE_PORTFOLIO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden print:inline-flex items-center gap-1.5 text-sm text-blue-600 font-medium"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  갤러리 보기 ({gallery.length}) ↗
                </a>
              </>
            )}
          </div>
        </div>

        {/* Gallery grid */}
        {gallery && galleryOpen && (
          <div className="border-t border-gray-100 bg-gray-50 px-6 md:px-8 py-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {gallery.map((item, i) => (
                <button
                  key={item.src}
                  onClick={() => setLightboxIndex(i)}
                  className="group relative aspect-video rounded-lg overflow-hidden bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <Image
                    src={asset(item.src)}
                    alt={item.label}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-end">
                    <span className="w-full px-2 py-1 text-xs text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-black/60 to-transparent">
                      {item.label}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default function PortfolioDecision() {
  return (
    <section id="portfolio-decision" className="bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader label="프로젝트" />
        <div className="mt-10 space-y-10">
          {portfolio.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
