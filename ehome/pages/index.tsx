import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'

const Home: NextPage = () => {
  return (
    <div className='lg:max-w-6xl mx-auto'>
      <Head children={undefined}>
        <title>Twitter 1.0</title>
      </Head>

      <main className='grid grid-cols-9'>

        <Sidebar />

        {/* Feed */}
        <Feed />
      </main>
    </div>
  )
}

