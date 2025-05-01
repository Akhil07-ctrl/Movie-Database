import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import NavBar from '../NavBar'

import './index.css'

const MovieDetails = () => {
  const { id } = useParams()
  const [movieDetails, setMovieDetails] = useState(null)
  const [castData, setCastData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setIsLoading(true)
      try {
        const API_KEY = 'f32b79895b21468afbdd6d5342cbf3da'
        const apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
        const response = await fetch(apiUrl)
        const data = await response.json()
        
        setMovieDetails({
          id: data.id,
          title: data.title,
          overview: data.overview,
          posterPath: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
          voteAverage: data.vote_average,
          releaseDate: data.release_date,
          runtime: data.runtime,
          genres: data.genres,
        })
        
        // Fetch cast data
        const castUrl = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
        const castResponse = await fetch(castUrl)
        const castData = await castResponse.json()
        
        // Get the top cast members (limit to 10)
        const topCast = castData.cast.slice(0, 10).map(actor => ({
          id: actor.id,
          name: actor.name,
          character: actor.character,
          profilePath: actor.profile_path 
            ? `https://image.tmdb.org/t/p/w185${actor.profile_path}`
            : 'https://via.placeholder.com/185x278?text=No+Image',
        }))
        
        setCastData(topCast)
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching movie details:', error)
        setIsLoading(false)
      }
    }

    fetchMovieDetails()
  }, [id])

  const renderLoadingView = () => (
    <div className="loader-container">
      <div>Loading...</div>
    </div>
  )

  const renderMovieDetails = () => {
    if (!movieDetails) {
      return <div>No movie details found</div>
    }

    const { title, overview, posterPath, voteAverage, releaseDate, runtime, genres } = movieDetails

    return (
      <div className="movie-details-container">
        <div className="movie-details-content">
          <div className="movie-poster-container">
            <img src={posterPath} alt={title} className="movie-poster" />
          </div>
          <div className="movie-info">
            <h1 className="movie-title">{title}</h1>
            <p className="movie-rating">Rating: {voteAverage}</p>
            <p className="movie-release-date">Release Date: {releaseDate}</p>
            {runtime && <p className="movie-runtime">Runtime: {runtime} minutes</p>}
            {genres && genres.length > 0 && (
              <div className="movie-genres">
                <p>Genres:</p>
                <ul>
                  {genres.map(genre => (
                    <li key={genre.id}>{genre.name}</li>
                  ))}
                </ul>
              </div>
            )}
            <div className="movie-overview">
              <h3>Overview</h3>
              <p>{overview}</p>
            </div>
            
            {/* Cast Section */}
            {castData && castData.length > 0 && (
              <div className="movie-cast">
                <h3>Cast</h3>
                <div className="cast-list">
                  {castData.map(actor => (
                    <div key={actor.id} className="cast-item">
                      <img 
                        src={actor.profilePath} 
                        alt={actor.name}
                        className="cast-profile-img" 
                      />
                      <div className="cast-info">
                        <p className="cast-name">{actor.name}</p>
                        <p className="cast-character">{actor.character}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            <Link to="/" className="back-button">
              <button className="btn btn-primary">Back to Home</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <NavBar />
      <div className="route-page-body">
        {isLoading ? renderLoadingView() : renderMovieDetails()}
      </div>
    </>
  )
}

export default MovieDetails