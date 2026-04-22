import { contributions } from '@/data/resume'
import { SectionHeader } from './About'

export default function Contribution() {
  return (
    <section id="contribution" className="bg-gray-50 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader label="제가 기여할 수 있는 방식" />

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {contributions.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-xl p-6 hover:border-blue-200 hover:shadow-sm transition-all"
            >
              <div className="flex items-start gap-3">
                <span className="text-blue-600 font-bold text-lg mt-0.5 shrink-0">→</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-6">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
