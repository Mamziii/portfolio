import { useState, FormEvent } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // فعلاً فقط لاگ می‌کنیم. بعداً می‌تونیم به ایمیل یا سرویس متصل کنیم
    console.log('Form submitted:', formData)
    alert('پیام شما با موفقیت ارسال شد!')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            تماس با من
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-base md:text-lg">
            اگر پروژه‌ای داری یا می‌خوای همکاری کنیم، بهم پیام بده
          </p>
          <div className="mt-5 w-16 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                اطلاعات تماس
              </h3>
              <p className="text-muted leading-relaxed">
                خوشحال می‌شم در مورد فرصت‌های شغلی یا پروژه‌های جدید با هم صحبت کنیم.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:your.email@example.com"
                className="flex items-center gap-4 text-muted hover:text-accent transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center">
                  <FaEnvelope className="text-accent text-lg" />
                </div>
                <div>
                  <p className="text-sm text-muted">ایمیل</p>
                  <p className="text-foreground">your.email@example.com</p>
                </div>
              </a>

              <a
                href="https://github.com/Mamziii"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-muted hover:text-accent transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center">
                  <FaGithub className="text-accent text-lg" />
                </div>
                <div>
                  <p className="text-sm text-muted">گیت‌هاب</p>
                  <p className="text-foreground">github.com/Mamziii</p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-muted hover:text-accent transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center">
                  <FaLinkedin className="text-accent text-lg" />
                </div>
                <div>
                  <p className="text-sm text-muted">لینکدین</p>
                  <p className="text-foreground">linkedin.com/in/yourusername</p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm text-muted mb-1.5">
                نام
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted/60 focus:outline-none focus:border-accent transition-colors"
                placeholder="نام شما"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-muted mb-1.5">
                ایمیل
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted/60 focus:outline-none focus:border-accent transition-colors"
                placeholder="email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-muted mb-1.5">
                پیام
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted/60 focus:outline-none focus:border-accent transition-colors resize-none"
                placeholder="پیامت رو بنویس..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-accent hover:bg-accent-light text-white font-medium transition-colors shadow-lg shadow-accent/20"
            >
              ارسال پیام
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}