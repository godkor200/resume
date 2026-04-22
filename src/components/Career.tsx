import { careers } from '@/data/resume'
import { SectionHeader } from './About'

export default function Career() {
  return (
    <section id="career" className="bg-gray-50 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader label="경력" />

        <div className="mt-10 space-y-0">
          {careers.map((job, i) => (
            <div key={i} className="flex gap-6 group">
              {/* Timeline */}
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-blue-600 mt-1.5 shrink-0 group-first:ring-4 group-first:ring-blue-100" />
                {i < careers.length - 1 && <div className="w-px flex-1 bg-gray-200 mt-2" />}
              </div>

              {/* Content */}
              <div className="pb-12">
                <p className="text-xs text-gray-400 mb-1">{job.period}</p>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="text-lg font-bold text-gray-900">{job.company}</h3>
                  {job.cofounder && (
                    <span className="px-2 py-0.5 bg-amber-50 text-amber-700 border border-amber-200 rounded text-xs font-bold tracking-wide">
                      Co-founder
                    </span>
                  )}
                  <span className="text-gray-400">·</span>
                  <span className="text-gray-600 text-sm">{job.role}</span>
                  {job.contribution && (
                    <span className="px-2 py-0.5 bg-blue-50 text-blue-600 rounded text-xs font-medium">
                      {job.contribution}
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-500 mb-4">{job.summary}</p>
                <ul className="space-y-1.5">
                  {job.achievements.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-blue-400 mt-1.5 shrink-0">•</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
