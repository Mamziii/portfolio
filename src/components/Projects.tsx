import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    id: 1,
    title: 'پروژه اول',
    description:
      'توضیح کوتاه درباره این پروژه. اینجا بنویس چه کاری انجام دادی و از چه تکنولوژی‌هایی استفاده کردی.',
    techs: ['React', 'TypeScript', 'Tailwind'],
    github: 'https://github.com/Mamziii',
    demo: '#',
  },
  {
    id: 2,
    title: 'پروژه دوم',
    description:
      'توضیح کوتاه درباره پروژه دوم. می‌تونی در مورد ویژگی‌های مهم و چالش‌هایی که حل کردی بنویسی.',
    techs: ['React', 'React Query', 'Axios'],
    github: 'https://github.com/Mamziii',
    demo: '#',
  },
  {
    id: 3,
    title: 'پروژه سوم',
    description:
      'توضیح کوتاه درباره پروژه سوم. این بخش رو بعداً با پروژه‌های واقعی‌ات جایگزین کن.',
    techs: ['TypeScript', 'React Hook Form', 'Tailwind'],
    github: 'https://github.com/Mamziii',
    demo: '#',
  },
]

export default function Projects() {
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group bg-background border border-border rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-300 hover:shadow-lg"
            >
              {/* Image Placeholder */}
              <div className="aspect-video bg-card border-b border-border flex items-center justify-center">
                <span className="text-muted text-sm">تصویر پروژه</span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted text-sm leading-relaxed mb-5 line-clamp-3">
                  {project.description}
                </p>

                {/* Techs */}
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

                {/* Links */}
                <div className="flex items-center gap-5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
                  >
                    <FaGithub className="text-base" />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}