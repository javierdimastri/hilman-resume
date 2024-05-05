import '../styles/globals.css'
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: { Component: any, pageProps: any }) {
  return (
     <ThemeProvider enableSystem={true} attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
