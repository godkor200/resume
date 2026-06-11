import { portfolio } from '@/data/resume'
import { asset } from '@/lib/asset'
import SectionHeader from './SectionHeader'

type GalleryItem = { src: string; label: string; description?: string }

const projectsWithGallery = portfolio.filter(
  (p) =>
    Array.isArray((p as { gallery?: GalleryItem[] }).gallery) &&
    (p as { gallery?: GalleryItem[] }).gallery!.length > 0
)

export default function Gallery() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeader label="갤러리" />
        <div className="mt-10 space-y-20">
          {projectsWithGallery.map((project) => {
            const gallery = (project as { gallery: GalleryItem[] }).gallery
            return (
              <div key={project.id} id={`gallery-${project.id}`} className="scroll-mt-20">
                <h3 className="text-2xl font-black text-gray-900 mb-1">{project.name}</h3>
                <p className="text-sm text-gray-500 mb-8">{project.company}</p>
                <div className="space-y-12">
                  {gallery.map((item) => (
                    <figure key={item.src}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={asset(item.src)}
                        alt={item.label}
                        className="w-full h-auto rounded-xl border border-gray-100 shadow-sm"
                      />
                      <figcaption className="mt-4">
                        <p className="text-base font-semibold text-gray-800">{item.label}</p>
                        {item.description && (
                          <p className="text-sm text-gray-500 leading-relaxed mt-1.5 whitespace-pre-line">
                            {item.description}
                          </p>
                        )}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
