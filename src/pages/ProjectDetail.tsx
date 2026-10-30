import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaGithub, FaExternalLinkAlt, FaArrowRight, FaTimes } from 'react-icons/fa'
import { getProjectById } from '../data/projects'

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>()
  const project = getProjectById(Number(id))
  const [lightboxImage, setLightboxImage] = useState<{ src: string; title: string } | null>(null)

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 px-4">
        <h1 className="text-2xl font-bold text-foreground">پروژه پیدا نشد</h1>
        <Link
          to="/#projects"
          className="flex items-center gap-2 text-accent hover:underline"
        >
          <FaArrowRight className="rotate-180" />
          بازگشت به پروژه‌ها
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card pt-24 pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors mb-6"
          >
            <FaArrowRight className="rotate-180 text-xs" />
            بازگشت به پروژه‌ها
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span
              className={`px-3 py-1 text-xs rounded-full font-medium ${
                project.type === 'professional'
                  ? 'bg-accent/15 text-accent border border-accent/30'
                  : 'bg-muted/20 text-muted border border-border'
              }`}
            >
              {project.type === 'professional' ? 'پروژه حرفه‌ای' : 'پروژه ساده'}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {project.title}
          </h1>

          <p className="text-muted text-lg leading-relaxed max-w-2xl mb-6">
            {project.description}
          </p>

          {/* دکمه‌ها */}
          <div className="flex flex-wrap gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-card border border-border text-foreground hover:border-accent hover:text-accent transition-colors"
            >
              <FaGithub />
              مشاهده کد
            </a>

            {project.demo !== '#' && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-white hover:bg-accent-light transition-colors"
              >
                <FaExternalLinkAlt className="text-sm" />
                مشاهده دمو
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* درباره پروژه */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            درباره پروژه
          </h2>
          <p className="text-muted leading-relaxed whitespace-pre-line">
            {project.longDescription}
          </p>
        </div>

        {/* ویژگی‌ها */}
        {project.features && project.features.length > 0 && (
          <div className="mb-10">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              ویژگی‌ها
            </h2>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-muted">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* تکنولوژی‌ها */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            تکنولوژی‌ها
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.techs.map((tech) => (
              <span
                key={tech}
                className="px-4 py-1.5 text-sm rounded-full bg-card border border-border text-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* ========== گالری عکس‌ها (آخر از همه) ========== */}
        {project.images && project.images.length > 0 ? (
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-6">
              تصاویر پروژه
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {project.images.map((img, index) => (
                <div key={index} className="group">
                  <div
                    className="rounded-xl overflow-hidden border border-border bg-card cursor-pointer"
                    onClick={() => setLightboxImage(img)}
                  >
                    <img
                      src={img.src}
                      alt={img.title}
                      className="w-full h-auto object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                    />
                  </div>
                  <p className="mt-2.5 text-sm text-muted text-center">
                    {img.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="aspect-video rounded-2xl bg-card border border-border flex items-center justify-center">
            <span className="text-muted">تصویر یا اسکرین‌شات پروژه</span>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-5 left-5 text-white/80 hover:text-white text-2xl p-2"
            onClick={() => setLightboxImage(null)}
            aria-label="بستن"
          >
            <FaTimes />
          </button>

          <p className="absolute top-5 right-5 left-16 text-white text-sm md:text-base text-center truncate">
            {lightboxImage.title}
          </p>

          <img
            src={lightboxImage.src}
            alt={lightboxImage.title}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}