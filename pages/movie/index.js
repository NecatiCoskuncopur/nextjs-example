import { useRouter } from 'next/router'
function Movie() {
  const router = useRouter();
  const { url } = router.query

  return (
    <p>Movie: {url}</p>
  )
}

export default Movie