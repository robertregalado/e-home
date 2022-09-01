import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
//import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Feed from '../components/Feed'
import RightSideBar from '../components/RightSideBar'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>eHome 1.0</title>

      </Head>

      <main className='grid grid-cols-9'>
        {/** Left Side Bar */}

        <Sidebar />


        {/* Feed */}
        <Feed />

        {/* Right Side Bar */}

        <RightSideBar />



      </main>

    </div>
  )
}

export default Home
