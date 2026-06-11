import { info, careers } from '@/data/resume'
import { SITE_URL } from '@/lib/asset'

const devCareer = careers.filter((c) =>
  ['스페이스오디티', '두디스 프로젝트', '메가프레스'].includes(c.company)
)

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-white pt-14 print:pt-0 print:min-h-0">
      <div className="max-w-5xl mx-auto px-6 py-20 w-full">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">

          {/* Left: Text */}
          <div className="flex-1">
            <div className="flex flex-wrap gap-2 mb-6">
              {info.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-3 tracking-tight">
              {info.name}
            </h1>
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <span className="text-xl md:text-2xl text-blue-600 font-medium">
                {info.title}
              </span>
              <span className="px-3 py-1 bg-blue-600 text-white text-sm font-bold rounded-full">
                총 개발경력 {info.years}
              </span>
            </div>

            <ul className="space-y-2 mb-10">
              {info.taglines.map((line, i) => (
                <li key={i} className="text-gray-600 text-base leading-relaxed">
                  {line.prefix}
                  <strong className="text-gray-900 font-semibold">{line.bold}</strong>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 mb-8">
              <a
                href={`tel:${info.contact.phone}`}
                className="flex items-center gap-2 text-gray-500 hover:text-gray-800 transition-colors text-sm"
              >
                <span>📞</span>
                <span>{info.contact.phone}</span>
              </a>
              <a
                href={`mailto:${info.contact.email}`}
                className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors text-sm"
              >
                <span>✉️</span>
                <span>{info.contact.email}</span>
              </a>
            </div>

            <div className="flex flex-wrap gap-3">
              {info.links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    link.label === 'Portfolio'
                      ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm hover:shadow'
                      : 'border border-gray-200 text-gray-700 hover:border-gray-400 hover:text-gray-900'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              {/* PDF 전용: 웹 이력서 URL */}
              <a
                href={SITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden print:inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-medium border border-blue-200 text-blue-700"
              >
                웹 이력서 ↗
              </a>
            </div>
          </div>

          {/* Right: Mini Timeline */}
          <div className="hidden md:flex flex-col gap-0 shrink-0 w-56">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Career</p>
            <div className="relative">
              <div className="absolute left-[5px] top-2 bottom-2 w-px bg-gray-200" />
              <div className="space-y-6">
                {devCareer.map((c, i) => (
                  <div key={c.company} className="flex items-start gap-3">
                    <div className={`mt-1.5 w-2.5 h-2.5 rounded-full shrink-0 z-10 ${i === 0 ? 'bg-blue-500' : 'bg-gray-300'}`} />
                    <div>
                      <p className={`text-sm font-semibold leading-snug ${i === 0 ? 'text-gray-900' : 'text-gray-600'}`}>
                        {c.company}
                      </p>
                      <p className="text-xs text-gray-400">{c.role}</p>
                      <p className="text-xs text-gray-300 mt-0.5">{c.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        <div className="mt-16 text-gray-300 text-sm animate-bounce">
          <a href="#about">↓</a>
        </div>
      </div>
    </section>
  )
}
