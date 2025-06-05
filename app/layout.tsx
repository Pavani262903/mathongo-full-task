import '../styles/globals.css'
import { ThemeProvider } from '../components/theme-provider'
import { AppProvider } from '../components/AppProvider'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider defaultTheme="system" enableSystem>
          <AppProvider>
            {children}
          </AppProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}