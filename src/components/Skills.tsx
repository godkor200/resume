import { skills } from '@/data/resume'
import { SectionHeader } from './About'

export default function Skills() {
  return (
    <section id="skills" className="bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader label="기술 스택" />

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-md text-sm font-medium hover:bg-blue-50 hover:text-blue-700 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
