import {useState, useCallback} from 'react'
import {Route, Routes} from 'react-router-dom'

import Popular from './components/Popular'
import TopRated from './components/TopRated'
import Upcoming from './components/Upcoming'
import SearchQuery from './components/SearchQuery'
import MovieDetails from './components/MovieDetails'

import SearchMoviesContext from './context/SearchMoviesContext'

import './App.css'

const API_KEY = 'f32b79895b21468afbdd6d5342cbf3da'

// write your code here
const App = () => {
  const [searchResponse, setSearchResponse] = useState({})
  const [apiStatus, setApiStatus] = useState('INITIAL')
  const [searchInput, setSearchInput] = useState('')

  const onChangeSearchInput = useCallback(text => setSearchInput(text), [])

  const getUpdatedData = useCallback(responseData => ({
    totalPages: responseData.total_pages,
    totalResults: responseData.total_results,
    results: responseData.results.map(eachMovie => ({
      id: eachMovie.id,
      posterPath: `https://image.tmdb.org/t/p/w500${eachMovie.poster_path}`,
      voteAverage: eachMovie.vote_average,
      title: eachMovie.title,
    })),
  }), [])

  const onTriggerSearchingQuery = useCallback(async (page = 1) => {
    setApiStatus('IN_PROGRESS')
    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchInput}&page=${page}`

    const response = await fetch(apiUrl)
    const data = await response.json()
    setSearchResponse(getUpdatedData(data))
    setApiStatus('SUCCESS')
  }, [searchInput, getUpdatedData])

  return (
    <SearchMoviesContext.Provider
      value={{
        searchResponse,
        apiStatus,
        onTriggerSearchingQuery,
        searchInput,
        onChangeSearchInput,
      }}
    >
      <div className="App d-flex flex-column">
        
        <Routes>
          <Route path="/" element={<Popular />} />
          <Route path="/top-rated" element={<TopRated />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/search" element={<SearchQuery />} />
          {/* Route for movie details */}
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
        
      </div>
    </SearchMoviesContext.Provider>
  )
}

export default App
