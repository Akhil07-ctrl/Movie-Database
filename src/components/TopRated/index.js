import { useState, useEffect, useCallback } from 'react'
// import Loader from 'react-loader-spinner'

import MovieCard from '../MovieCard'
import NavBar from '../NavBar'
import Pagination from '../Pagination'

import './index.css'

const TopRated = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [topRatedMovieResponse, setTopRatedMovieResponse] = useState({})

  const getUpdatedData = responseData => ({
    totalPages: responseData.total_pages,
    totalResults: responseData.total_results,
    results: responseData.results.map(eachMovie => ({
      id: eachMovie.id,
      posterPath: `https://image.tmdb.org/t/p/w500${eachMovie.poster_path}`,
      voteAverage: eachMovie.vote_average,
      title: eachMovie.title,
    })),
  })

  const getTopRatedMoviesResponse = useCallback(async (page = 1) => {
    setIsLoading(true)
    const API_KEY = 'f32b79895b21468afbdd6d5342cbf3da'
    const apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`
    const response = await fetch(apiUrl)
    const data = await response.json()
    const newData = getUpdatedData(data)
    setTopRatedMovieResponse(newData)
    setIsLoading(false)
  }, [])

  useEffect(() => {
    getTopRatedMoviesResponse()
  }, [getTopRatedMoviesResponse])

  const renderLoadingView = () => (
    <div className="loader-container">
      <div>Loading...</div>
    </div>
  )

  const renderTopRatedMoviesList = () => {
    const { results } = topRatedMovieResponse

    return (
      <div className="container-fluid p-0">
        <h2 className="section-title mb-4">Top Rated Movies</h2>
        <ul className="row g-3 p-0 movie-grid">
          {results && results.map(movie => (
            <MovieCard key={movie.id} movieDetails={movie} />
          ))}
        </ul>
      </div>
    )
  }

  return (
    <>
      <NavBar />
      <div className="route-page-body">
        {isLoading
          ? renderLoadingView()
          : renderTopRatedMoviesList()}
      </div>
      <Pagination
        totalPages={topRatedMovieResponse.totalPages}
        apiCallback={getTopRatedMoviesResponse}
      />
    </>
  )
}

export default TopRated
