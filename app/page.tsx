import { Inter } from '@next/font/google'
import Header from '../components/Header'

const inter = Inter({ subsets: ['latin'] })

let arrayNav:Array<string> = ["", "home", "profile", "insert"]

export default function Home() {
  return (
    <main>
        <Header items={arrayNav}/>
        <a href="/profile">Profile</a>
      <h1>Luca Palmi</h1>
    </main>
  )
}
