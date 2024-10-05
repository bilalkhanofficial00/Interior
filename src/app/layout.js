import './globals.css'
import { Navbar } from './Navbar/page'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body>
        <Navbar /> 
        {children}
      </body>
    </html>
  )
}
