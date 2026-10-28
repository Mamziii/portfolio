import { FaGithub, FaLinkedin, FaTelegram, FaInstagram } from 'react-icons/fa'
import { HiArrowDown } from 'react-icons/hi'

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24 pb-16 px-4 sm:px-6 relative"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="max-w-3xl">
          {/* Greeting */}
          <p className="text-accent font-medium mb-4 tracking-wide">
            سلام، من
          </p>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight mb-4">
            محمدرضا کاویانی
          </h1>

          {/* Job Title */}
          <h2 className="text-2xl sm:text-3xl text-muted font-medium mb-6">
            Frontend Developer
          </h2>

          {/* Description */}
          <p className="text-muted text-lg leading-relaxed mb-8 max-w-2xl">
            توسعه‌دهنده فرانت‌اند با تمرکز روی ساخت رابط‌های کاربری مدرن،
            سریع و کاربرپسند با React و TypeScript.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-accent hover:bg-accent-light text-white font-medium transition-colors shadow-lg shadow-accent/25"
            >
              مشاهده پروژه‌ها
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full border-2 border-accent text-accent hover:bg-accent hover:text-white font-medium transition-colors"
            >
              دانلود رزومه
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/Mamziii"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors text-2xl"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors text-2xl"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://t.me/mhmmdrezakaviyani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors text-2xl"
              aria-label="Telegram"
            >
              <FaTelegram />
            </a>

            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors text-2xl"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted">
          <span className="text-sm">اسکرول کنید</span>
          <HiArrowDown className="animate-bounce text-xl" />
        </div>
      </div>
    </section>
  )
}