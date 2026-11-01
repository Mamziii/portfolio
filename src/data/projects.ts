export type ProjectImage = {
  src: string;
  title: string;
};

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
  coverImage?: string;
  images?: ProjectImage[]; // ← تغییر کرد
};

export const projects: Project[] = [
  // ========== پروژه‌های حرفه‌ای ==========
  {
    id: 1,
    title: "فروشگاه پوشاک مردانه (MenShop)",
    description:
      "یک فروشگاه آنلاین کامل پوشاک مردانه با صفحات اصلی، جزئیات محصول، سبد خرید، ورود و ثبت‌نام.",
    longDescription:
      "این پروژه یک فروشگاه اینترنتی کامل برای پوشاک مردانه است که شامل صفحه اصلی، جزئیات محصول، سبد خرید، صفحه سفارش، ورود و ثبت‌نام، جستجو و سایدبار موبایل می‌شود. رابط کاربری کاملاً ریسپانسیو طراحی شده و تجربه کاربری در دسکتاپ و موبایل در نظر گرفته شده است.",
    techs: ["React", "TypeScript", "Tailwind", "React Router"],
    github: "https://github.com/Mamziii",
    demo: "https://mens-shop-zeta.vercel.app/",
    type: "professional",
    features: [
      "صفحه اصلی با نمایش محصولات",
      "صفحه جزئیات محصول",
      "سبد خرید و صفحه سفارش",
      "ورود و ثبت‌نام کاربر",
      "جستجوی محصول",
      "طراحی ریسپانسیو (موبایل و دسکتاپ)",
    ],
    coverImage: "/menshop/homepage.jpeg",
    images: [
      { src: "/menshop/homepage.jpeg", title: "صفحه اصلی (دسکتاپ)" },
      { src: "/menshop/productdetaispage.jpeg", title: "صفحه جزئیات محصول" },
      { src: "/menshop/cartpage.jpeg", title: "سبد خرید (دسکتاپ)" },
      { src: "/menshop/orderpage.jpeg", title: "صفحه سفارش" },
      { src: "/menshop/loginpage.jpeg", title: "صفحه ورود" },
      { src: "/menshop/registerpage.jpeg", title: "صفحه ثبت‌نام" },
      { src: "/menshop/infopage.jpeg", title: "صفحه اطلاعات" },
      { src: "/menshop/searchbox.jpeg", title: "جعبه جستجو" },
      { src: "/menshop/cartpagemobile.jpeg", title: "سبد خرید (موبایل)" },
      { src: "/menshop/homepagemobile.jpeg", title: "صفحه اصلی (موبایل)" },
      { src: "/menshop/sidebarmobile.jpeg", title: "سایدبار موبایل" },
    ],
  },
  {
    id: 2,
    title: "پنل مدیریت فروشگاه (Admin Panel)",
    description:
      "پنل مدیریت کامل فروشگاه با مدیریت محصولات، سفارش‌ها، کاربران و گزارش فروش.",
    longDescription:
      "این پروژه یک داشبورد مدیریتی کامل برای فروشگاه اینترنتی است. شامل مدیریت محصولات، جزئیات سفارش، لیست کاربران، آمار فروش و طراحی کاملاً ریسپانسیو برای موبایل و دسکتاپ می‌شود.",
    techs: ["React", "TypeScript", "Tailwind", "React Router", "Chart"],
    github: "https://github.com/Mamziii",
    demo: "#",
    type: "professional",
    features: [
      "داشبورد و آمار فروش",
      "مدیریت محصولات (افزودن و ویرایش)",
      "لیست و جزئیات سفارش‌ها",
      "مدیریت کاربران",
      "صفحه ورود ادمین",
      "طراحی ریسپانسیو (موبایل و دسکتاپ)",
    ],
    coverImage: "/admin/userslist.jpeg",
    images: [
      { src: "/admin/loginpage.jpeg", title: "صفحه ورود" },
      { src: "/admin/sales.jpeg", title: "داشبورد فروش (دسکتاپ)" },
      { src: "/admin/productslist.jpeg", title: "لیست محصولات" },
      { src: "/admin/productdetails.jpeg", title: "جزئیات محصول" },
      { src: "/admin/addnew.jpeg", title: "افزودن محصول جدید" },
      { src: "/admin/orders.jpeg", title: "لیست سفارش‌ها" },
      { src: "/admin/orderdetails.jpeg", title: "جزئیات سفارش" },
      { src: "/admin/userslist.jpeg", title: "لیست کاربران" },
      { src: "/admin/salesmobile.jpeg", title: "داشبورد فروش (موبایل)" },
      { src: "/admin/productsmobile.jpeg", title: "لیست محصولات (موبایل)" },
      {
        src: "/admin/productdetailsmobile.jpeg",
        title: "جزئیات محصول (موبایل)",
      },
      { src: "/admin/userslistmobile.jpeg", title: "لیست کاربران (موبایل)" },
      { src: "/admin/userdetailsmobile.jpeg", title: "جزئیات کاربر (موبایل)" },
      { src: "/admin/sidebarmobile.jpeg", title: "سایدبار موبایل" },
      { src: "/admin/addnewmobile.jpeg", title: "افزودن محصول (موبایل)" },
    ],
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
  },
];

export function getProjectById(id: number): Project | undefined {
  return projects.find((p) => p.id === id);
}
