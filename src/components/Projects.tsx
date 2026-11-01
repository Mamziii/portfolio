import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

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