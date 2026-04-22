import { about } from '@/data/resume'

export default function About() {
  return (
    <section id="about" className="bg-gray-50 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader label="자기소개" />

        <div className="mt-10 max-w-3xl space-y-5">
          {about.map((para, i) => (
            <p key={i} className="text-gray-600 leading-8 text-base">
              {para}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}

export function SectionHeader({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4">
      <h2 className="text-2xl font-bold text-gray-900 tracking-tight">{label}</h2>
      <div className="flex-1 h-px bg-gray-200" />
    </div>
  )
}
