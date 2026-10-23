export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            درباره من
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-base md:text-lg">
            کمی بیشتر درباره مسیر و علاقه‌ام به توسعه فرانت‌اند
          </p>
          <div className="mt-5 w-16 h-1 bg-accent mx-auto rounded-full" />
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-muted text-lg leading-relaxed mb-6">
            من <span className="text-foreground font-medium">محمدرضا کاویانی</span> هستم،
            یک Frontend Developer علاقه‌مند به ساخت رابط‌های کاربری مدرن، تمیز و کاربرپسند.
          </p>

          <p className="text-muted text-lg leading-relaxed mb-6">
            با React، TypeScript و Tailwind CSS کار می‌کنم و همیشه سعی می‌کنم کدهایی بنویسم که
            هم خوانا و مقیاس‌پذیر باشن و هم تجربه خوبی برای کاربر نهایی ایجاد کنن.
          </p>

          <p className="text-muted text-lg leading-relaxed">
            عاشق یادگیری تکنولوژی‌های جدید هستم و از تبدیل ایده‌ها به محصول واقعی لذت می‌برم.
          </p>
        </div>
      </div>
    </section>
  )
}