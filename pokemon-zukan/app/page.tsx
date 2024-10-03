"use client"
import Head from 'next/head';
import Header from '../components/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pokemon Zukan</title>
      </Head>
      <Header />
    </div>
  );
}
