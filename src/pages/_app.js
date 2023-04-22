import { ThemeProvider } from '../context/theme.js'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return (
    <ThemeProvider>
      <div className={inter.className}>
        {getLayout(<Component {...pageProps} />)}
      </div>
    </ThemeProvider>
  )
}

// @Ali: Need to change the way ThemeProvider asyncronously updates the app page
// currently this is causing HTML - React hydration error, 2023-04-02 02:33AM