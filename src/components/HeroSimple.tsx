import { info } from '@/data/resume'

export default function HeroSimple() {
  return (
    <section className="bg-white pt-14 border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight mb-1">{info.name}</h1>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-base text-blue-600 font-medium">{info.title}</span>
            <span className="px-2.5 py-0.5 bg-blue-600 text-white text-xs font-bold rounded-full">
              총 개발경력 {info.years}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm">
          <a
            href={`mailto:${info.contact.email}`}
            className="text-gray-500 hover:text-blue-600 transition-colors"
          >
            {info.contact.email}
          </a>
          {info.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-700 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
