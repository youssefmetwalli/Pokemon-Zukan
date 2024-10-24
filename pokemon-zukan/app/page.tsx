"use client"
import Head from 'next/head';
import Header from '../components/Header';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pokemon Zukan</title>
      </Head>
      <Header />

      <main className='bg-gray-100 min-h-screen relative'>
        <img
          src='https://zukan.pokemon.co.jp/img/ttl_pickup.svg'
          alt='pickup'
          className='absolute left-0 ml-20 mt-0 z-30'
          style={{ top: '-30px', width: '180px', height: '180px' }}
        />

        <div className='absolute left-4 top-12 transform w-12 h-22 bg-white rounded-md shadow-lg flex items-center justify-center z-20'>
          <button
            className='shadow-md flex items-center justify-center border border-gray-400'
            style={{
              width: 'calc((100vw / 750) * 40)',
              height: 'calc((100vw / 750) * 140)',
            }}
          >
            <BiLeftArrow size={30} color='red'/>
          </button>
        </div>


        <div className='absolute mt-2 ml-36 bg-gray-200 w-[90%] h-[40%] transform -rotate-3 shadow-lg z-20 rounded-md' />

        <div className='absolute mt-4 ml-40 bg-gray-400 w-[90%] h-[40%] transform -rotate-3 shadow-lg z-10 rounded-md' />

        <div className='bg-white w-full h-[60vh] shadow-md absolute bottom-0 z-0 '>

        </div>
      </main>
    </div>
  );
}
