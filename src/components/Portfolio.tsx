'use client'

import { useState } from 'react'
import { portfolio } from '@/data/resume'
import { SectionHeader } from './About'

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader label="포트폴리오" />
        <div className="mt-10 space-y-6">
          {portfolio.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: (typeof portfolio)[number] }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden hover:border-blue-200 transition-colors">
      <div className="p-6 md:p-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
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
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <p className="text-sm text-gray-500">{project.company} · {project.period}</p>
              {project.cofounder && (
                <span className="px-2 py-0.5 bg-amber-50 text-amber-700 border border-amber-200 rounded text-xs font-bold tracking-wide">
                  Co-founder
                </span>
              )}
            </div>
          </div>
          <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold whitespace-nowrap self-start">
            {project.badge}
          </span>
        </div>

        <p className="text-gray-600 text-sm mb-5">{project.description}</p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.techStack.map((tech) => (
            <span key={tech} className="px-2.5 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium">
              {tech}
            </span>
          ))}
        </div>

        {/* Achievements */}
        <ul className="space-y-1.5 mb-5">
          {project.achievements.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
              <span className="text-green-500 mt-1 shrink-0">✓</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>

        {/* Expand toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
        >
          {open ? '접기' : '기술적 배경 보기'}
          <svg
            className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Expanded detail */}
      {open && (
        <div className="border-t border-gray-100 bg-gray-50 px-6 md:px-8 py-6 space-y-4">
          <div>
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">문제</h4>
            <p className="text-sm text-gray-600 leading-7">{project.problem}</p>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">해결</h4>
            <p className="text-sm text-gray-600 leading-7">{project.solution}</p>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">아키텍처</h4>
            <p className="text-sm text-gray-500 leading-7">{project.techDetail}</p>
          </div>
          {project.notion && (
            <div className="pt-2 border-t border-gray-200">
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
            </div>
          )}
        </div>
      )}
    </div>
  )
}
