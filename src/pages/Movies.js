import "./Movies.css"
import movies from "../data"
import { Link } from "react-router-dom"

function Movies() {
  return <section>
    <div className="all-movies">
      {movies.map((oneMovie) => {
        const {id, image, title} = oneMovie

        return <article key={id} className="one-movie">
          <h2>{title}</h2>
          <img src={image} alt="obrazek" />  <br />
          <Link to={`/all-movies/${id}`}>Více informací</Link>
        </article>
      })}
    </div>
  </section>
}

export default Movies