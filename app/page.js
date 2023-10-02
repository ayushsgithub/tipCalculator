import Link from 'next/link'
import PanelLayout from './components/PanelLayout'
import TipForm from './components/TipForm'

export default function Home() {
  return (
<main className="flex min-h-screen flex-col items-center justify-center p-7 lg:p-14">
      <h1 className="my-3 text-center text-3xl font-bold uppercase tracking-widest text-cyan-800">
        Tip Splitter
      </h1>
      <PanelLayout>
        <TipForm />
      </PanelLayout>
      <footer className="bg-gradient-to-br from-cyan-500 to-blue-700 text-white mt-7 p-2 shadow-xl rounded-md">
        <Link href="https://github.com/ayushsgithub/tipCalculator" target='_blank'>Support 💖</Link>
      </footer>
    </main>
  )
}
