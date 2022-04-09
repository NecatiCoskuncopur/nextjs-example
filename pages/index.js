import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/layout'
import Popular from '../components/Popular'

export default function Home({movies}) {
  console.log(movies.results);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        
       <Popular movies={movies}/>
    </div>
  )
}

export async function getServerSideProps() {
  const request = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=574c6a9ee4958a2487c858757fe06489&language=en-US&page=1')
  const movies = await request.json()
  return{
    props:{
      movies
    }
  }
}
