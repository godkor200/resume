import { careers, portfolio, patents } from '@/data/resume'
import SectionHeader from './SectionHeader'

const devCareers = careers.filter((c) => c.contribution)

export default function CareerDescription() {
  return (
    <section id="career-description" className="bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader label="경력기술서" />
        <div className="mt-10 space-y-16">
          {devCareers.map((job) => {
            const proj = portfolio.find((p) => p.company === job.company)
            return (
              <div key={job.company} className="border-l-2 border-blue-200 pl-8">
                {/* Company header */}
                <div className="mb-6">
                  <p className="text-xs text-gray-400 mb-1">{job.period}</p>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-xl font-black text-gray-900">{job.company}</h3>
                    {job.cofounder && (
                      <span className="px-2 py-0.5 bg-amber-50 text-amber-700 border border-amber-200 rounded text-xs font-bold tracking-wide">
                        Co-founder
                      </span>
                    )}
                    <span className="text-gray-400">·</span>
                    <span className="text-gray-600 text-sm font-medium">{job.role}</span>
                    <span className="px-2.5 py-0.5 bg-blue-50 text-blue-600 rounded text-xs font-semibold">
                      {job.contribution}
                    </span>
                    {job.leaveReason && (
                      <span className="px-2.5 py-0.5 bg-gray-100 text-gray-500 rounded text-xs">
                        퇴사 사유: {job.leaveReason}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500">{job.summary}</p>
                </div>

                {/* Tech stack */}
                {proj && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {proj.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Key achievements */}
                <ul className="space-y-2">
                  {job.achievements.map((item) => (
                    <li
                      key={item.slice(0, 40)}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <span className="text-blue-400 mt-1.5 shrink-0">•</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Patents — 두디스 한정 */}
                {job.company === '두디스 프로젝트' && (
                  <div className="mt-6">
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                      특허
                    </h4>
                    <ul className="space-y-3">
                      {patents.map((patent) => (
                        <li key={patent.name} className="flex items-start gap-2">
                          <span className="mt-1 shrink-0 w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">
                            P
                          </span>
                          <div>
                            <p className="text-sm font-semibold text-gray-800 leading-relaxed">{patent.name}</p>
                            <p className="text-xs text-gray-500 leading-relaxed mt-0.5">{patent.description}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
