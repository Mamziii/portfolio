import { useState, useEffect } from 'react'
import { HiMenu, HiX, HiSun, HiMoon } from 'react-icons/hi'
import { useTheme } from '../context/ThemeContext'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { name: 'خانه', to: '/#home', id: 'home' },
  { name: 'درباره من', to: '/#about', id: 'about' },
  { name: 'مهارت‌ها', to: '/#skills', id: 'skills' },
  { name: 'پروژه‌ها', to: '/#projects', id: 'projects' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()

  // اسکرول و تشخیص سکشن فعال
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)

      // فقط در صفحه اصلی سکشن‌ها رو چک کن
      if (location.pathname !== '/') return

      const sections = navLinks.map((link) => link.id)
      const scrollPosition = window.scrollY + 120 // فاصله از هدر

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          return
        }
      }

      setActiveSection('home')
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // اول بار هم چک کن

    return () => window.removeEventListener('scroll', handleScroll)
  }, [location.pathname])

  // اسکرول به سکشن وقتی hash داریم
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      setActiveSection(id)
      setTimeout(() => {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }, [location])

  // قفل اسکرول وقتی سایدبار بازه
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // با تغییر مسیر، منو رو ببند
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname, location.hash])

  const linkClass = (id: string) =>
    `text-sm font-medium transition-colors ${
      activeSection === id && location.pathname === '/'
        ? 'text-accent'
        : 'text-muted hover:text-accent'
    }`

  const mobileLinkClass = (id: string) =>
    `py-3.5 px-4 text-base rounded-xl transition-colors ${
      activeSection === id && location.pathname === '/'
        ? 'text-accent bg-card'
        : 'text-muted hover:text-accent hover:bg-card'
    }`

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-background/90 backdrop-blur-md  border-border shadow-sm'
            : 'bg-transparent shadow-sm'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold tracking-tight">
            <span className="text-accent">محمدرضا</span>
            <span className="text-foreground">کاویانی</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.to} className={linkClass(link.id)}>
                {link.name}
              </Link>
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

            <Link
              to="/#contact"
              className="px-5 py-2.5 rounded-full bg-accent hover:bg-accent-light text-white text-sm font-medium transition-colors"
            >
              تماس با من
            </Link>
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
              className="text-2xl text-foreground p-1"
              onClick={() => setIsOpen(true)}
              aria-label="باز کردن منو"
            >
              <HiMenu />
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 z-[70] h-full w-72 max-w-[85vw] bg-background border-l border-border shadow-2xl transition-transform duration-300 ease-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between h-16 px-5 border-b border-border">
          <span className="text-lg font-bold">
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

        <nav className="flex flex-col p-4 gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className={mobileLinkClass(link.id)}
            >
              {link.name}
            </Link>
          ))}

          <div className="my-3 border-t border-border" />

          <Link
            to="/#contact"
            onClick={() => setIsOpen(false)}
            className="py-3.5 px-4 text-center rounded-full bg-accent hover:bg-accent-light text-white font-medium transition-colors"
          >
            تماس با من
          </Link>
        </nav>
      </aside>
    </>
  )
}