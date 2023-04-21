import Layout from '@/components/layout'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

    <Layout>
      <h1>INdex</h1>
    </Layout>
  )
}

{/* <main className="flex min-h-screen flex-col items-center justify-between p-24">   
<h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
 Templates{' '}
 <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
   -&gt;
 </span>
</h2>
<p
 className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
>
 Discover and deploy boilerplate example Next.js&nbsp;projects.
</p>
</main> */}

