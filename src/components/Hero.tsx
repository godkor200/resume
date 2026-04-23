import { info } from '@/data/resume'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-white pt-14">
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
            </div>
          </div>

          {/* Right: Profile photo */}
          <div className="flex justify-center md:justify-end shrink-0">
            <div className="w-52 h-52 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-lg ring-4 ring-gray-100">
              <img
                src="/resume/profile.jpeg"
                alt="유병국 프로필 사진"
                className="w-full h-full object-cover object-top"
              />
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
