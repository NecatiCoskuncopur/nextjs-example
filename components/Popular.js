import React from 'react'
import Link from 'next/link'

function Popular({ movies }) {
  return (
    <div className='popular'>
      <h2>Popular Movies</h2>
      <div className="popular-inner">
        {
          movies.results.map((movie) => (
            <Link href={`/movie/${movie.id}`} key={movie.id}>
              <a>
                <h3>{movie.title}</h3>
                <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`} alt="" />
              </a>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default Popular