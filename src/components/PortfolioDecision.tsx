import { portfolio } from '@/data/resume'
import SectionHeader from './SectionHeader'

export default function PortfolioDecision() {
  return (
    <section id="portfolio-decision" className="bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader label="프로젝트" />
        <div className="mt-10 space-y-10">
          {portfolio.map((project) => (
            <div key={project.id} className="border border-gray-200 rounded-2xl overflow-hidden">
              {/* Header */}
              <div className="p-6 md:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h3 className="text-lg font-bold text-gray-900">{project.name}</h3>
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

              {/* Decision detail — always visible */}
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
