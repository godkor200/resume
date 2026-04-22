import { sideProjects } from '@/data/resume'
import { SectionHeader } from './About'

export default function SideProject() {
  return (
    <section id="sideproject" className="bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader label="사이드 프로젝트" />

        <div className="mt-10 space-y-6">
          {sideProjects.map((project, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-2xl p-6 md:p-8 hover:border-blue-200 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                <div>
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h3 className="text-lg font-bold text-gray-900">{project.name}</h3>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs text-gray-400 hover:text-gray-700 transition-colors border border-gray-200 rounded px-2 py-0.5"
                    >
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                      </svg>
                      GitHub
                    </a>
                  </div>
                  <p className="text-sm text-gray-400">{project.period}</p>
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-5 leading-6">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="space-y-1.5">
                {project.achievements.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-blue-400 mt-1 shrink-0">•</span>
                    <span className="leading-relaxed font-mono text-xs bg-gray-50 rounded px-1 py-0.5 w-full">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
