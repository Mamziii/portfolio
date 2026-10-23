const skills = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    category: 'Styling',
    items: ['Tailwind CSS', 'Responsive Design', 'CSS Modules'],
  },
  {
    category: 'Tools & Libraries',
    items: ['React Query', 'React Hook Form', 'Axios', 'Vite'],
  },
  {
    category: 'Other',
    items: ['Git', 'REST API', 'Framer Motion'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            مهارت‌ها
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-base md:text-lg">
            تکنولوژی‌هایی که باهاشون کار می‌کنم
          </p>
          <div className="mt-5 w-16 h-1 bg-accent mx-auto rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((group) => (
            <div
              key={group.category}
              className="bg-card border border-border rounded-2xl p-6 hover:border-accent/50 transition-colors duration-300"
            >
              <h3 className="text-accent font-semibold mb-5 text-lg">
                {group.category}
              </h3>

              <ul className="space-y-3">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="text-muted flex items-center gap-2.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}