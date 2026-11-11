import { Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import type { Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="group bg-background border border-border rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-300 hover:shadow-lg block"
    >
      {/* Image */}
      <div className="aspect-video bg-card border-b border-border overflow-hidden relative">
        {project.coverImage ? (
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover object-top"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-muted text-sm">تصویر پروژه</span>
          </div>
        )}

        {/* Badge */}
        <span
          className={`absolute top-3 right-3 px-2.5 py-1 text-xs rounded-full font-medium ${
            project.type === "professional"
              ? "bg-accent/15 text-accent border border-accent/30"
              : "bg-muted/20 text-muted border border-border"
          }`}
        >
          {project.type === "professional" ? "حرفه‌ای" : "ساده"}
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

        {/* لینک‌ها */}
        <div className="flex items-center gap-5">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
          >
            <FaGithub className="text-base" />
            GitHub
          </a>

          {project.demo && project.demo !== "#" && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
            >
              <FaExternalLinkAlt className="text-sm" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </Link>
  );
}