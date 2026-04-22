import { info } from '@/data/resume'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-white font-bold text-sm">{info.name}</p>
          <p className="text-xs mt-0.5">{info.title}</p>
        </div>
        <div className="flex gap-4">
          {info.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`mailto:${info.contact.email}`}
            className="text-sm hover:text-white transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
