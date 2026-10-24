import { Link } from 'react-router-dom'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

type Project = {
  id: number
  title: string
  description: string
  techs: string[]
  github: string
  demo: string
  type: 'professional' | 'simple'
}

const projects: Project[] = [
  // ========== پروژه‌های حرفه‌ای (اول) ==========
  {
    id: 1,
    title: 'پروژه حرفه‌ای ۱',
    description:
      'توضیح کامل‌تر درباره این پروژه حرفه‌ای. اینجا بنویس چه مشکلی حل کردی، معماری چطور بود و از چه تکنولوژی‌هایی استفاده کردی.',
    techs: ['React', 'TypeScript', 'Tailwind', 'React Query'],
    github: 'https://github.com/Mamziii',
    demo: '#',
    type: 'professional',
  },
  {
    id: 2,
    title: 'پروژه حرفه‌ای ۲',
    description:
      'توضیح کامل‌تر درباره پروژه حرفه‌ای دوم. می‌تونی در مورد چالش‌ها، مقیاس‌پذیری و ویژگی‌های مهم بنویسی.',
    techs: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    github: 'https://github.com/Mamziii',
    demo: '#',
    type: 'professional',
  },

  // ========== پروژه‌های ساده‌تر (بعد) ==========
  {
    id: 3,
    title: 'پروژه ساده ۱',
    description: 'توضیح کوتاه درباره این پروژه ساده.',
    techs: ['React', 'Tailwind'],
    github: 'https://github.com/Mamziii',
    demo: '#',
    type: 'simple',
  },
  {
    id: 4,
    title: 'پروژه ساده ۲',
    description: 'توضیح کوتاه درباره پروژه ساده دوم.',
    techs: ['React', 'TypeScript'],
    github: 'https://github.com/Mamziii',
    demo: '#',
    type: 'simple',
  },
  {
    id: 5,
    title: 'پروژه ساده ۳',
    description: 'توضیح کوتاه درباره پروژه ساده سوم.',
    techs: ['React', 'React Hook Form'],
    github: 'https://github.com/Mamziii',
    demo: '#',
    type: 'simple',
  },
  {
    id: 6,
    title: 'پروژه ساده ۴',
    description: 'توضیح کوتاه درباره پروژه ساده چهارم.',
    techs: ['TypeScript', 'Tailwind'],
    github: 'https://github.com/Mamziii',
    demo: '#',
    type: 'simple',
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
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="group bg-background border border-border rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-300 hover:shadow-lg block"
            >
              {/* Image Placeholder */}
              <div className="aspect-video bg-card border-b border-border flex items-center justify-center relative">
                <span className="text-muted text-sm">تصویر پروژه</span>

                {/* Badge نوع پروژه */}
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
                      if (project.demo !== '#') {
                        window.open(project.demo, '_blank')
                      }
                    }}
                    className="flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors cursor-pointer"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    Live Demo
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}