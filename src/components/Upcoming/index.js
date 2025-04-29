import { useState, useEffect, useCallback } from 'react'
// import Loader from 'react-loader-spinner'

import MovieCard from '../MovieCard'
import NavBar from '../NavBar'
import Pagination from '../Pagination'

import './index.css'

const Upcoming = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [upcomingMovieResponse, setUpcomingMovieResponse] = useState({})

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

  const getUpcomingMoviesResponse = useCallback(async (page = 1) => {
    setIsLoading(true)
    const API_KEY = 'f32b79895b21468afbdd6d5342cbf3da'
    const apiUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`
    const response = await fetch(apiUrl)
    const data = await response.json()
    const newData = getUpdatedData(data)
    setUpcomingMovieResponse(newData)
    setIsLoading(false)
  }, [])

  useEffect(() => {
    getUpcomingMoviesResponse()
  }, [getUpcomingMoviesResponse])

  const renderLoadingView = () => (
    <div className="loader-container">
      <div>Loading...</div>
    </div>
  )

  const renderUpcomingMoviesList = () => {
    const { results } = upcomingMovieResponse

    return (
      <ul className="row p-0 ms-0 me-0 mt-3">
        {results && results.map(movie => (
          <MovieCard key={movie.id} movieDetails={movie} />
        ))}
      </ul>
    )
  }

  return (
    <>
      <NavBar />
      <div className="route-page-body">
        {isLoading
          ? renderLoadingView()
          : renderUpcomingMoviesList()}
      </div>
      <Pagination
        totalPages={upcomingMovieResponse.totalPages}
        apiCallback={getUpcomingMoviesResponse}
      />
    </>
  )
}

export default Upcoming
