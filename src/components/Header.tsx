import { useState, useEffect } from 'react'
import { HiMenu, HiX, HiSun, HiMoon } from 'react-icons/hi'
import { useTheme } from '../context/ThemeContext'

const navLinks = [
  { name: 'خانه', href: '#home' },
  { name: 'درباره من', href: '#about' },
  { name: 'مهارت‌ها', href: '#skills' },
  { name: 'پروژه‌ها', href: '#projects' },
  { name: 'تماس', href: '#contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/90 backdrop-blur-md border-b border-border shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-20">
        
        {/* Logo - در RTL سمت راست قرار می‌گیره */}
        <a href="#home" className="text-2xl font-bold tracking-tight">
          <span className="text-accent">محمدرضا</span>
          <span className="text-foreground">کاویانی</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full hover:bg-card border border-border transition-colors"
            aria-label="تغییر تم"
          >
            {theme === 'light' ? (
              <HiMoon className="text-lg text-muted" />
            ) : (
              <HiSun className="text-lg text-accent" />
            )}
          </button>

          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full bg-accent hover:bg-accent-light text-white text-sm font-medium transition-colors"
          >
            تماس با من
          </a>
        </nav>

        {/* Mobile Buttons */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-card border border-border transition-colors"
            aria-label="تغییر تم"
          >
            {theme === 'light' ? (
              <HiMoon className="text-lg text-muted" />
            ) : (
              <HiSun className="text-lg text-accent" />
            )}
          </button>

          <button
            className="text-2xl text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="منو"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <nav className="flex flex-col p-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="py-3 px-2 text-muted hover:text-accent transition-colors rounded-lg"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}