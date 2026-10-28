// components/ScrollToTop.tsx
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    // فقط وقتی hash نداریم (مثل صفحه جزئیات پروژه) به بالا اسکرول کن
    // وقتی hash داریم (مثل /#projects) بذار Header خودش هندل کنه
    if (!hash) {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return null
}