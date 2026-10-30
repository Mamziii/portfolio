import {
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-muted text-sm order-2 md:order-1">
            © {new Date().getFullYear()} محمدرضا کاویانی. تمامی حقوق محفوظ است.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-5 order-1 md:order-2">
            <a
              href="https://github.com/Mamziii"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors text-xl"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors text-xl"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors text-xl"
              aria-label="LinkedIn"
            >
              <FaInstagram />
            </a>
            <a
              href="https://t.me/mhmmdrezakaviyani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors text-xl"
              aria-label="Telegram"
            >
              <FaTelegram />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-muted hover:text-accent transition-colors text-xl"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
