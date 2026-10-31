import { FaGithub, FaLinkedin, FaTelegram, FaInstagram } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24 pb-16 px-4 sm:px-6 relative"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          {/* متن */}
          <div className="flex-1 text-center lg:text-right">
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
            <p className="text-muted text-lg leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0 lg:mr-0">
              توسعه‌دهنده فرانت‌اند با تمرکز روی ساخت رابط‌های کاربری مدرن، سریع
              و کاربرپسند با React و TypeScript.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-10 justify-center lg:justify-start">
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
            <div className="flex items-center gap-5 justify-center lg:justify-start">
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
                href="https://t.me/yourusername"
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

          {/* عکس */}
          <div className="flex-shrink-0">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <img
                src="/me/hero.jpg"
                alt="محمدرضا کاویانی"
                className="w-full h-full object-cover rounded-full border-4 border-accent/20 shadow-xl"
                onError={(e) => {
                  console.log("عکس لود نشد:", e.currentTarget.src);
                  e.currentTarget.src = "https://via.placeholder.com/400";
                }}
              />
              {/* حلقه تزئینی */}
              <div className="absolute inset-0 rounded-full border-2 border-accent/30 scale-105 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted">
          <span className="text-sm">اسکرول کنید</span>
          <HiArrowDown className="animate-bounce text-xl" />
        </div>
      </div>
    </section>
  );
}
