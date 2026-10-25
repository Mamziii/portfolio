export type Project = {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  techs: string[];
  github: string;
  demo: string;
  type: "professional" | "simple";
  features?: string[];
};

export const projects: Project[] = [
  // ========== پروژه‌های حرفه‌ای ==========
  {
    id: 1,
    title: "پروژه حرفه‌ای ۱",
    description: "توضیح کوتاه درباره این پروژه حرفه‌ای.",
    longDescription:
      "اینجا توضیح کامل‌تری درباره پروژه بنویس. مثلاً چه مشکلی حل کردی، معماری چطور بود، چه چالش‌هایی داشتی و چطور حلشون کردی. می‌تونی چند پاراگراف بنویسی.",
    techs: ["React", "TypeScript", "Tailwind", "React Query"],
    github: "https://github.com/Mamziii/mens_shop",
    demo: "https://mens-shop-zeta.vercel.app/",
    type: "professional",
    features: ["ویژگی اول پروژه", "ویژگی دوم پروژه", "ویژگی سوم پروژه"],
  },
  {
    id: 2,
    title: "پروژه حرفه‌ای ۲",
    description: "توضیح کوتاه درباره پروژه حرفه‌ای دوم.",
    longDescription: "توضیح کامل پروژه حرفه‌ای دوم. اینجا جزئیات بیشتری بنویس.",
    techs: ["React", "TypeScript", "Node.js", "MongoDB"],
    github: "https://github.com/Mamziii/admin-pannel",
    demo: "https://admin-pannel-rose.vercel.app/",
    type: "professional",
    features: ["ویژگی اول", "ویژگی دوم", "ویژگی سوم"],
  },

  // ========== پروژه‌های ساده‌تر ==========
  {
    id: 3,
    title: "پروژه ساده ۱",
    description: "توضیح کوتاه درباره این پروژه ساده.",
    longDescription: "توضیح کامل‌تر پروژه ساده ۱.",
    techs: ["React", "Tailwind"],
    github: "https://github.com/Mamziii/menu",
    demo: "https://menu-nine-swart.vercel.app/",
    type: "simple",
  },
  {
    id: 4,
    title: "پروژه ساده ۲",
    description: "توضیح کوتاه درباره پروژه ساده دوم.",
    longDescription: "توضیح کامل‌تر پروژه ساده ۲.",
    techs: ["React", "TypeScript"],
    github: "https://github.com/Mamziii/Taskly",
    demo: "https://taskly-nu-two.vercel.app/",
    type: "simple",
  }
];

export function getProjectById(id: number): Project | undefined {
  return projects.find((p) => p.id === id);
}
