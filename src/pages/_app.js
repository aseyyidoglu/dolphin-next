import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { ThemeProvider } from '../context/theme.js'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <div className={inter.className}>
      <ThemeProvider>
        <Component {...pageProps}/>
      </ThemeProvider>
    </div>
  )
}