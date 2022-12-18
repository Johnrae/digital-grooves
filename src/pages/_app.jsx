import { useEffect, useRef } from 'react'

import { Montserrat } from '@next/font/google'
const montserrat = Montserrat({
  weights: [400],
  subsets: ['latin'],
  variable: '--font-montserrat',
})

import localFont from '@next/font/local'
const highTide = localFont({
  src: '../../fonts/hightide.woff2',
  variable: '--font-hightide',
})

import '@/styles/tailwind.css'
import 'focus-visible'

function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

export default function App({ Component, pageProps, router }) {
  let previousPathname = usePrevious(router.pathname)

  return (
    <>
      <div className="relative">
        <main
          className={`${highTide.variable} font-display ${montserrat.variable} font-sans`}
        >
          <Component previousPathname={previousPathname} {...pageProps} />
        </main>
      </div>
    </>
  )
}
