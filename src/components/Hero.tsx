import { FaGithub, FaLinkedin, FaTelegram, FaInstagram } from 'react-icons/fa'
import { HiArrowDown } from 'react-icons/hi'

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24 pb-16 px-4 sm:px-6 relative overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto w-full">
        <div className="max-w-3xl">
          {/* Greeting */}
          <p className="text-accent font-medium mb-4 tracking-wide animate-fade-in">
            سلام، من
          </p>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-4 animate-fade-in-up">
            محمدرضا کاویانی
          </h1>

          {/* Job Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-muted font-medium mb-6 animate-fade-in-up animation-delay-100">
            Frontend Developer
          </h2>

          {/* Description */}
          <p className="text-muted text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl animate-fade-in-up animation-delay-200">
            توسعه‌دهنده فرانت‌اند با تمرکز روی ساخت رابط‌های کاربری مدرن،
            سریع و کاربرپسند با React و TypeScript.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-12 animate-fade-in-up animation-delay-300">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-accent hover:bg-accent-light text-white font-medium transition-all duration-300 shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:-translate-y-0.5"
            >
              مشاهده پروژه‌ها
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border-2 border-accent text-accent hover:bg-accent hover:text-white font-medium transition-all duration-300 hover:-translate-y-0.5"
            >
              دانلود رزومه
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 animate-fade-in-up animation-delay-400">
            <a
              href="https://github.com/Mamziii"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-all duration-300 text-2xl hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-all duration-300 text-2xl hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://t.me/mhmmdrezakaviyani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-all duration-300 text-2xl hover:scale-110"
              aria-label="Telegram"
            >
              <FaTelegram />
            </a>
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-all duration-300 text-2xl hover:scale-110"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted animate-fade-in">
          <span className="text-sm tracking-wide">اسکرول کنید</span>
          <HiArrowDown className="animate-bounce text-xl" />
        </div>
      </div>
    </section>
  )
}