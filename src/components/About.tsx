import { about } from '@/data/resume'
import SectionHeader from './SectionHeader'

export default function About() {
  return (
    <section id="about" className="bg-gray-50 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader label="자기소개" />

        <div className="mt-10 max-w-3xl space-y-5">
          {about.map((para, i) => (
            <p key={para.slice(0, 20)} className="text-gray-600 leading-8 text-base">
              {para}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
