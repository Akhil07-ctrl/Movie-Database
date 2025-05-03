import { Link } from 'react-router-dom'
import { useIsMobile, useIsTablet } from '../../hooks/useMediaQuery'
import './index.css'

const MovieCard = props => {
  const { movieDetails } = props
  const { id, title, posterPath, voteAverage } = movieDetails
  
  const isMobile = useIsMobile()
  const isTablet = useIsTablet()
  
  // Determine column classes based on screen size
  const getColumnClass = () => {
    if (isMobile) return "col-12"
    if (isTablet) return "col-sm-6 col-md-4"
    return "col-sm-6 col-md-4 col-lg-3 col-xl-2"
  }

  return (
    <li className={`movie-card-container ${getColumnClass()} mb-3 d-flex flex-column`}>
      <div className="card-inner d-flex flex-column h-100">
        <img className="movie-card-image" alt={title} src={posterPath} />
        <div className="d-flex flex-column align-items-center mt-2">
          <h1 className="movie-title">{title}</h1>
          <p className="movie-rating">Rating: {voteAverage}</p>
        </div>
        <div className="d-flex justify-content-center mt-auto">
          <Link to={`/movie/${id}`}>
            <button className="btn btn-outline-success btn-sm mt-2" type="button">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </li>
  )
}

export default MovieCard
