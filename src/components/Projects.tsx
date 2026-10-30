import { Link } from 'react-router-dom'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { projects } from '../data/projects'

export default function Projects() {
  const professionalProjects = projects.filter((p) => p.type === 'professional')
  const simpleProjects = projects.filter((p) => p.type === 'simple')

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            پروژه‌ها
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-base md:text-lg">
            چند نمونه از کارهایی که انجام دادم
          </p>
          <div className="mt-5 w-16 h-1 bg-accent mx-auto rounded-full" />
        </div>

        {/* Professional Projects */}
        <div className="mb-16">
          <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent" />
            پروژه‌های حرفه‌ای
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {professionalProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* Simple Projects */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-muted" />
            پروژه‌های دیگر
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {simpleProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="group bg-background border border-border rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-300 hover:shadow-lg block"
    >
      {/* ========== این قسمت عکس ========== */}
      <div className="aspect-video bg-card border-b border-border overflow-hidden relative">
        {project.coverImage ? (
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-muted text-sm">تصویر پروژه</span>
          </div>
        )}

        {/* Badge */}
        <span
          className={`absolute top-3 right-3 px-2.5 py-1 text-xs rounded-full font-medium ${
            project.type === 'professional'
              ? 'bg-accent/15 text-accent border border-accent/30'
              : 'bg-muted/20 text-muted border border-border'
          }`}
        >
          {project.type === 'professional' ? 'حرفه‌ای' : 'ساده'}
        </span>
      </div>
      {/* ========== پایان قسمت عکس ========== */}

      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
          {project.title}
        </h3>

        <p className="text-muted text-sm leading-relaxed mb-5 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.techs.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs rounded-full bg-card border border-border text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-5">
          <span
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              window.open(project.github, '_blank')
            }}
            className="flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors cursor-pointer"
          >
            <FaGithub className="text-base" />
            GitHub
          </span>

          <span
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              if (project.demo !== '#') window.open(project.demo, '_blank')
            }}
            className="flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors cursor-pointer"
          >
            <FaExternalLinkAlt className="text-sm" />
            Live Demo
          </span>
        </div>
      </div>
    </Link>
  )
}