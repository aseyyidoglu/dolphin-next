import { ThemeProvider } from '@/context/theme.js'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return (
    <ThemeProvider>
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  )
}

// @Ali: Need to change the way ThemeProvider asyncronously updates the app page
// currently this is causing HTML - React hydration error, 2023-04-02 02:33AM
// Remove font settings from App and keep them in global style