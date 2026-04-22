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
            <p className="text-sm text-gray-500">{project.company} · {project.period}</p>
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
        </div>
      )}
    </div>
  )
}
