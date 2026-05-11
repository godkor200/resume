import { patents } from '@/data/resume'
import SectionHeader from './SectionHeader'

export default function Patents() {
  return (
    <section id="patents" className="bg-gray-50 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader label="특허" />
        <div className="mt-10 space-y-4">
          {patents.map((patent) => (
            <div key={patent.name} className="border border-gray-200 bg-white rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <span className="mt-1 shrink-0 w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">
                  P
                </span>
                <div>
                  <p className="text-sm font-semibold text-gray-900 leading-relaxed mb-1">
                    {patent.name}
                  </p>
                  <p className="text-xs text-gray-500 leading-relaxed">{patent.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
