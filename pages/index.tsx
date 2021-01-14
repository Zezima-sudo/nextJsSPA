import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Date from '../components/date'
import Link from 'next/link'  
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'



// var json = require('json')

export async function getStaticProps () {
  // const allData = await import('../lib/posts')
  const allPostsData = getSortedPostsData()
  // const value = JSON.parse(JSON.stringify(allData));
   
    return {
      props: {
        allPostsData
      }
    }
  
  }


export default function Home({ allPostsData }) {
  
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}></section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog<span style={{fontSize: '1.4rem'}}> (I built this with next.js 😎 <a href="https://github.com/zezimaSudo/nextJsSPA">source code</a>)</span></h2>
        
        <ul className={utilStyles.list}>

          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date}/>
              </small>
           
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
  
}

