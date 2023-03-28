import { Inter } from 'next/font/google'
import App from '@/app/App'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div>
    <App />
   </div>
  )
}
