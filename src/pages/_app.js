import { Inter } from 'next/font/google'
import { ThemeProvider } from '../context/theme.js'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <div className={inter.className}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  )
}

// @Ali: [TODO] change the way ThemeProvider asyncronously updates the app page
// currently this is causing HTML - React hydration error
// 2023-04-02 02:33AM