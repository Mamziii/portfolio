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
  images?: ProjectImage[]; 
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
    techs: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "React Router",
      "TanStack Query",
      "Axios",
      "React Hook Form",
      "React Hot Toast",
      "SweetAlert",
      "Lucide React",
      "Jalali Moment",
    ],
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
    techs: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "React Router",
      "TanStack Query",
      "Axios",
      "React Hook Form",
      "Recharts",
      "React Hot Toast",
      "Lucide React",
    ],
    github: "https://github.com/Mamziii",
    demo: "https://admin-pannel-rose.vercel.app/",
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
    title: "منوی کافه‌شاپ و فست‌فود",
    description:
      "طراحی منوی دیجیتال برای کافه‌شاپ و فست‌فود با نسخه دسکتاپ و موبایل.",
    longDescription:
      "این پروژه شامل طراحی دو منوی دیجیتال است: یکی برای کافه‌شاپ و دیگری برای فست‌فود. هر دو نسخه دسکتاپ و موبایل دارند و با تمرکز روی خوانایی و ظاهر جذاب طراحی شده‌اند.",
    techs: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "React Router",
      "Lucide React",
      "React Icons",
    ],
    github: "https://github.com/Mamziii/menu",
    demo: "https://menu-nine-swart.vercel.app/",
    type: "simple",
    features: [
      "منوی کافه‌شاپ",
      "منوی فست‌فود",
      "نسخه دسکتاپ و موبایل",
      "طراحی ریسپانسیو",
    ],
    coverImage: "/menu/coffemenu.jpeg",
    images: [
      { src: "/menu/coffemenu.jpeg", title: "منوی کافه‌شاپ (دسکتاپ)" },
      { src: "/menu/fastfoodmenu.jpeg", title: "منوی فست‌فود (دسکتاپ)" },
      { src: "/menu/coffemobile.jpeg", title: "منوی کافه‌شاپ (موبایل)" },
      { src: "/menu/fastfoodmobile.jpeg", title: "منوی فست‌فود (موبایل)" },
    ],
  },
  {
    id: 4,
    title: "فروشگاه ساده (Mini Shop)",
    description:
      "یک فروشگاه ساده با قابلیت افزودن محصول به سبد خرید، کاملاً ریسپانسیو برای موبایل و دسکتاپ.",
    longDescription:
      "این پروژه یک فروشگاه اینترنتی ساده است که امکان مشاهده محصولات، افزودن به سبد خرید و مدیریت سبد را فراهم می‌کند. رابط کاربری برای هر دو نسخه دسکتاپ و موبایل طراحی شده است.",
    techs: [
      "React",
      "TypeScript",
      "Vite",
      "React Router",
      "TanStack Query",
      "Axios",
      "React Hot Toast",
      "SweetAlert",
      "React Icons",
    ],
    github: "https://github.com/Mamziii/mini_shop",
    demo: "https://mini-shop-kohl.vercel.app/",
    type: "simple",
    features: [
      "نمایش لیست محصولات",
      "افزودن محصول به سبد خرید",
      "مدیریت سبد خرید",
      "طراحی ریسپانسیو (موبایل و دسکتاپ)",
    ],
    coverImage: "/mini-shop/home.jpeg",
    images: [
      { src: "/mini-shop/home.jpeg", title: "صفحه اصلی (دسکتاپ)" },
      { src: "/mini-shop/cart.jpeg", title: "سبد خرید (دسکتاپ)" },
      { src: "/mini-shop/homemobile.jpeg", title: "صفحه اصلی (موبایل)" },
      { src: "/mini-shop/cartmobile.jpeg", title: "سبد خرید (موبایل)" },
    ],
  },
  {
  id: 5,
  title: 'مدیریت کارها (Taskly)',
  description:
    'یک اپلیکیشن لیست کارها با امکان افزودن تسک و علامت‌زدن کارهای انجام‌شده، کاملاً ریسپانسیو.',
  longDescription:
    'Taskly یک اپلیکیشن ساده برای مدیریت کارهای روزمره است. کاربر می‌تواند تسک جدید اضافه کند و بعد از انجام، با دکمه Done آن را علامت بزند. رابط کاربری برای دسکتاپ و موبایل بهینه شده است.',
  techs: [
    'React',
    'TypeScript',
    'Vite',
    'React Icons',
    'SweetAlert',
  ],
  github: 'https://github.com/Mamziii/Taskly',
  demo: 'https://taskly-nu-two.vercel.app/',
  type: 'simple',
  features: [
    'افزودن تسک جدید',
    'حذف تسک',
    'اضافه نشدن تسک تکراری',
    'علامت‌زدن کارهای انجام‌شده (Done)',
    'رابط کاربری ساده و تمیز',
    'طراحی ریسپانسیو (موبایل و دسکتاپ)',
  ],
  coverImage: '/taskly/cover.jpeg',
  images: [
    { src: '/taskly/cover.jpeg', title: 'صفحه اصلی (زوم شده)' },
    { src: '/taskly/home.jpeg', title: 'صفحه اصلی (دسکتاپ)' },
    { src: '/taskly/sametask.jpeg', title: 'اضافه نشدن تسک تکراری' },
    { src: '/taskly/deletetask.jpeg', title: 'پاک کردن تسک' },
    { src: '/taskly/homemobile.jpeg', title: 'صفحه اصلی (موبایل)' },
  ],
},
];

export function getProjectById(id: number): Project | undefined {
  return projects.find((p) => p.id === id);
}
