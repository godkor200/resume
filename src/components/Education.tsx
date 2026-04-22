import { education, training, certifications, patents } from '@/data/resume'
import { SectionHeader } from './About'

export default function Education() {
  return (
    <section id="education" className="bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* 자격증 & 특허 */}
        <div>
          <SectionHeader label="자격증 · 특허" />
          <div className="mt-8 space-y-6">
            <div>
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">자격증</h3>
              {certifications.map((cert) => (
                <div key={cert.name} className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-800 font-medium">{cert.name}</span>
                  <span className="text-sm text-gray-400">{cert.date}</span>
                </div>
              ))}
            </div>
            <div>
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">특허</h3>
              <div className="space-y-4">
                {patents.map((patent, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-4">
                    <p className="text-sm font-semibold text-gray-800 mb-1">{patent.name}</p>
                    <p className="text-xs text-gray-500 leading-5">{patent.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 학력 */}
        <div>
          <SectionHeader label="학력" />
          <div className="mt-8 space-y-6">
            {education.map((edu, i) => (
              <div key={i} className="border-l-2 border-blue-100 pl-5 py-1">
                <h3 className="font-bold text-gray-900 text-sm mb-0.5">{edu.school}</h3>
                <p className="text-sm text-gray-600 mb-0.5">{edu.major}</p>
                <p className="text-xs text-gray-400 mb-2">{edu.period} · 학점 {edu.gpa}</p>
                <p className="text-xs text-gray-500 leading-5">{edu.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 교육 수료 */}
        <div>
          <SectionHeader label="교육 수료" />
          <div className="mt-8 space-y-4">
            {training.map((t, i) => (
              <div key={i} className="border-l-2 border-blue-100 pl-5 py-1">
                <h3 className="font-bold text-gray-900 text-sm mb-0.5">{t.institution}</h3>
                <p className="text-sm text-gray-600 mb-0.5">{t.course}</p>
                <p className="text-xs text-gray-400 mb-2">{t.period}</p>
                <p className="text-xs text-gray-500 leading-5">{t.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
