import { info, careers, skills, certifications, patents, training, sideProjects } from '@/data/resume'
import SectionHeader from './SectionHeader'

const rememberCareers = careers.filter((c) =>
  ['스페이스오디티', '두디스 프로젝트', '프린트시티', '체인랩스'].includes(c.company)
)

const rememberAbout = `5년차 백엔드 개발자입니다. NestJS · TypeORM · PostgreSQL 기반으로 데이터 수집·가공·집계 파이프라인을 설계해왔습니다. K-POP 분석 서비스, 유튜브 콘텐츠 분석 플랫폼, 인쇄물 커머스 자동화 시스템 등 데이터 규모와 조회 패턴이 까다로운 도메인을 주로 다뤘습니다. 조회 패턴과 맞지 않는 데이터 모델에서 비롯되는 병목 문제를 구조적으로 개선하는 데 강점이 있으며, 두디스에서 핵심 집계 API 응답 시간을 40초 → 3초로 단축하고, 프린트시티에서 Optimistic Locking으로 재고 동시성 문제를 해결한 경험이 있습니다.`

export default function RememberProfile() {
  return (
    <div className="bg-white px-6 py-12">
      <div className="max-w-3xl mx-auto space-y-12">

        {/* Header */}
        <div className="border-b border-gray-200 pb-8">
          <h1 className="text-3xl font-black text-gray-900 mb-1">{info.name}</h1>
          <p className="text-blue-600 font-medium mb-4">{info.title} · {info.years}</p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>{info.contact.phone}</span>
            <span>{info.contact.email}</span>
            {info.links.map((l) => (
              <a key={l.label} href={l.url} className="text-blue-500">{l.label}: {l.url}</a>
            ))}
          </div>
        </div>

        {/* 소개 */}
        <div>
          <SectionHeader label="소개" />
          <p className="mt-4 text-sm text-gray-700 leading-7">{rememberAbout}</p>
        </div>

        {/* 경력 */}
        <div>
          <SectionHeader label="경력" />
          <div className="mt-6 space-y-8">
            {rememberCareers.map((job) => (
              <div key={job.company}>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="text-base font-bold text-gray-900">{job.company}</h3>
                  {job.cofounder && (
                    <span className="px-2 py-0.5 bg-amber-50 text-amber-700 border border-amber-200 rounded text-xs font-bold">
                      Co-founder
                    </span>
                  )}
                  <span className="text-gray-400 text-sm">· {job.role}</span>
                </div>
                <p className="text-xs text-gray-400 mb-2">{job.period}</p>
                <ul className="space-y-1.5">
                  {job.achievements.map((item) => (
                    <li key={item.slice(0, 40)} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-blue-400 mt-1.5 shrink-0">•</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 전문 분야·스킬 */}
        <div>
          <SectionHeader label="전문 분야·스킬" />
          <div className="mt-4 space-y-2">
            {skills.map((s) => (
              <div key={s.category} className="flex gap-3 text-sm">
                <span className="text-gray-400 w-36 shrink-0">{s.category}</span>
                <span className="text-gray-700">{s.items.join(', ')}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 자격증 */}
        <div>
          <SectionHeader label="자격증" />
          <div className="mt-4 space-y-1">
            {certifications.map((c) => (
              <p key={c.name} className="text-sm text-gray-700">{c.name} · {c.date}</p>
            ))}
          </div>
        </div>

        {/* 수상 및 기타이력 */}
        <div>
          <SectionHeader label="수상 및 기타이력" />
          <div className="mt-4 space-y-4">
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">특허</p>
              {patents.map((p) => (
                <p key={p.name} className="text-sm text-gray-700 mb-1">{p.name}</p>
              ))}
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">교육</p>
              {training.map((t) => (
                <p key={t.institution} className="text-sm text-gray-700">{t.institution} · {t.course} · {t.period}</p>
              ))}
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">사이드 프로젝트</p>
              {sideProjects.map((p) => (
                <p key={p.name} className="text-sm text-gray-700 mb-1">
                  {p.name} · {p.period}
                  {'github' in p && p.github && <span className="text-gray-400"> · {p.github as string}</span>}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* 웹사이트·블로그 */}
        <div>
          <SectionHeader label="웹사이트·블로그" />
          <div className="mt-4 space-y-1">
            {info.links.map((l) => (
              <p key={l.label} className="text-sm text-blue-600">{l.label}: {l.url}</p>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
