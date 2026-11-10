import { FaGithub, FaLinkedin, FaTelegram, FaInstagram } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24 pb-16 px-4 sm:px-6 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          {/* متن */}
          <div className="flex-1 text-center lg:text-right">
            <p className="text-accent font-medium mb-4 tracking-wide">
              سلام، من
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight mb-4">
              محمدرضا کاویانی
            </h1>

            <h2 className="text-2xl sm:text-3xl text-muted font-medium mb-6">
              Frontend Developer
            </h2>

            <p className="text-muted text-lg leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              توسعه‌دهنده فرانت‌اند با تمرکز روی ساخت رابط‌های کاربری مدرن، سریع
              و کاربرپسند با React و TypeScript.
            </p>

            <div className="flex flex-wrap gap-4 mb-10 justify-center lg:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-accent hover:bg-accent-light text-white font-medium transition-colors shadow-lg shadow-accent/25"
              >
                مشاهده پروژه‌ها
              </a>

              
            </div>

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
                href="https://www.linkedin.com/in/mohammadreza-kaviyani-43274b447"
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
               href="https://instagram.com/mhmmreza.kaviyani"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors text-2xl"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* عکس پروفایل */}
          <div className="flex-shrink-0">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <img
                src="/me/me.JPG"
                alt="محمدرضا کاویانی"
                className="w-full h-full object-cover rounded-full border-3 border-accent shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
