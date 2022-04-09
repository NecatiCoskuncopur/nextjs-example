import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <header className='header'>
        <nav>
          <ul>
            <li>
              <Link href='/'>
              <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href='/about'>
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href='/blog'>
              <a>Blog</a>
              </Link>
            </li>
            <li>
              <Link href='/blog/post'>
              <a>Post</a>
              </Link>
            </li>
          </ul>
        </nav>

    </header>
  )
}

export default Header