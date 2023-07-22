import { useEffect, useState } from "react"
import { MovieService } from "../../api/MovieService"
import MovieCard from '../../components/MovieCard/MovieCard'

const Home = () => {

  const [movies, setMovies] = useState([])

  async function getMovies() {
    const {data: {results}} = await MovieService.getMovies();
    setMovies(results)
  }

  useEffect(() => {
    getMovies();
  },[])
// ,[] === para ser executado apenas uma vez 

useEffect(() => {
  console.log(movies);
})


  return (
    <section className="Home">
      {movies.map((movie) => ( 
      <div key={movie.id}>
        <MovieCard movieProp={movie}/>
        
      </div>))}
    </section>
  )
}

export default Home