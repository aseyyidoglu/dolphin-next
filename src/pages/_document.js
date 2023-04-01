import { Html, Head, Main, NextScript } from 'next/document'
import { useTheme } from '../context/theme.js'

export default function Document() {
  const { theme } = useTheme()
  return (
    <Html lang="en" class={theme}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
