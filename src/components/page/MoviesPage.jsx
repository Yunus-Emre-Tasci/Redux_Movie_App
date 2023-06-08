import { useSelector } from "react-redux"

const MoviesPage = () => {
const { movies } = useSelector;((state)=>state.movies)

  return (
    <div>MoviesPage</div>
  )
}

export default MoviesPage