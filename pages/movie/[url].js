import Head from 'next/head'


export default function MovieDetails({ movie }) {
  return (
    <div className='movie'>
      <Head>
        <title> {movie.title}</title>
      </Head>
      <div className="cover"
			     style={{backgroundImage: `url(https://www.themoviedb.org/t/p/original${movie.backdrop_path})`}}></div>
      <h3>{movie.title}</h3>
      <div className="summary">
        {movie.overview}
      </div>
    </div>
  )
}

export async function getServerSideProps({ params }) {
  const request = await fetch(`https://api.themoviedb.org/3/movie/${params.url}?api_key=574c6a9ee4958a2487c858757fe06489&language=en-US`)
  const movie = await request.json()
  return {
    props: {
      movie
    }
  }
}