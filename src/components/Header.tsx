import { useState, useEffect } from "react";
import { HiMenu, HiX, HiSun, HiMoon } from "react-icons/hi";
import { useTheme } from "../context/ThemeContext";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "خانه", to: "/#home" },
  { name: "درباره من", to: "/#about" },
  { name: "مهارت‌ها", to: "/#skills" },
  { name: "پروژه‌ها", to: "/#projects" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname, location.hash]);

  const isActive = (to: string) => {
    if (to === "/#home") {
      return (
        location.hash === "" ||
        location.hash === "#home" ||
        location.pathname === "/"
      );
    }
    return location.hash === to.replace("/", "");
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-border/60 shadow-[0_4px_30px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.25)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-[72px]">
          {/* Logo */}
          <Link
            to="/"
            className="group relative text-xl md:text-2xl font-bold tracking-tight"
          >
            <span className="text-accent">محمدرضا</span>
            <span className="text-foreground">کاویانی</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive(link.to)
                    ? "text-accent"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 right-4 left-4 h-[2px] rounded-full bg-accent transition-all duration-300 ${
                    isActive(link.to)
                      ? "opacity-100 scale-x-100"
                      : "opacity-0 scale-x-0"
                  }`}
                />
              </Link>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="ms-2 p-2.5 rounded-full border border-border/70 bg-card/50 hover:bg-card hover:border-border transition-all duration-300 hover:scale-105 active:scale-95"
              aria-label="تغییر تم"
            >
              {theme === "light" ? (
                <HiMoon className="text-lg text-muted" />
              ) : (
                <HiSun className="text-lg text-accent" />
              )}
            </button>

            {/* CTA */}
            <Link
              to="/#contact"
              className="ms-3 px-5 py-2.5 rounded-full bg-accent hover:bg-accent-light text-white text-sm font-medium shadow-md shadow-accent/20 hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              تماس با من
            </Link>
          </nav>

          {/* Mobile Buttons */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full border border-border/70 bg-card/40 hover:bg-card transition-all duration-300"
              aria-label="تغییر تم"
            >
              {theme === "light" ? (
                <HiMoon className="text-lg text-muted" />
              ) : (
                <HiSun className="text-lg text-accent" />
              )}
            </button>

            <button
              className="p-2 rounded-lg text-foreground hover:bg-card/60 transition-colors"
              onClick={() => setIsOpen(true)}
              aria-label="باز کردن منو"
            >
              <HiMenu className="text-2xl" />
            </button>
          </div>
        </div>
      </header>

      {/* ========== Mobile Sidebar ========== */}
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm transition-all duration-300 md:hidden ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 z-[70] h-full w-80 max-w-[85vw] bg-background/95 backdrop-blur-xl border-l border-border shadow-2xl transition-transform duration-400 ease-[cubic-bezier(0.32,0.72,0,1)] md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between h-16 px-5 border-b border-border/60">
          <span className="text-lg font-bold tracking-tight">
            <span className="text-accent">محمدرضا</span>
            <span className="text-foreground">کاویانی</span>
          </span>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-full hover:bg-card transition-colors"
            aria-label="بستن منو"
          >
            <HiX className="text-xl text-foreground" />
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col p-4 gap-1.5 mt-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className={`py-3.5 px-4 text-base rounded-xl transition-all duration-200 ${
                isActive(link.to)
                  ? "bg-accent/10 text-accent font-medium"
                  : "text-muted hover:text-foreground hover:bg-card"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <div className="my-4 border-t border-border/60" />

          <Link
            to="/#contact"
            onClick={() => setIsOpen(false)}
            className="py-3.5 px-4 text-center rounded-full bg-accent hover:bg-accent-light text-white font-medium shadow-md shadow-accent/25 transition-all duration-300 active:scale-[0.98]"
          >
            تماس با من
          </Link>
        </nav>
      </aside>
    </>
  );
}
