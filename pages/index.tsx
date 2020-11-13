import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { useRouter } from 'next/router'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  const router = useRouter()
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hey, I'm Eric. I'm a full stack web dev and musician. I believe the answers to the toughest problems are found in creative thinking with little fear of failure.</p>
        <p>
          I built this website using Next.js and TypeScript. 
         
          <div>
          {router.pathname == '/' ? <Link href='posts/first-post'><a> Here's what else I've made recently.</a></Link> : 'error'}
          </div>
         
        </p>
      </section>
    </Layout>
  )
}
