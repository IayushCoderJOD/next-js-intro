import Link from 'next/link'

export default function Home() {
  return (
    <main className='flex justify-between'>
      <h1 className='' >Hello world</h1>
      <Link href="/users">USERPAGE</Link>
      <Link href="/users">chuPAGE</Link>
      <Link href="/users">woPAGE</Link>
      <Link href="/users">tuPAGE</Link>
    </main>
  )
}
