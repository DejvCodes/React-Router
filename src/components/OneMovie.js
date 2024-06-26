import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import movies from "../data"
import "./OneMovie.css"

const OneMovie = () => {
  const {movieId} = useParams()

  const oneSpecificMovie = movies.find((oneMovie) => {
    return oneMovie.id === parseInt(movieId)
  })
  const {image, title, tags, description} = oneSpecificMovie

  return <section>
    <h2>{title}</h2>
    <img src={image} alt="obrazke" />
    <p>{description}</p>
    <p>{tags}</p>
    <Link to="/movies">Zpět na všechny filmy</Link>
  </section>
}

export default OneMovie