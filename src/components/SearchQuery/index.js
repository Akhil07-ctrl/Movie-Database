// import Loader from 'react-loader-spinner'
import { useContext } from 'react'

import MovieCard from '../MovieCard'
import NavBar from '../NavBar'
import Pagination from '../Pagination'

import SearchMoviesContext from '../../context/SearchMoviesContext'

import './index.css'

const SearchQuery = () => {
  const { searchResponse, apiStatus, onTriggerSearchingQuery } = useContext(SearchMoviesContext)

  const renderEmptyView = () => (
    <div className="empty-view-container">
      <h1>No results found.</h1>
      <p>Don not get worried, Try to search again.</p>
    </div>
  )

  const renderMoviesList = () => {
    const { results } = searchResponse

    if (!results || !results.length) {
      return renderEmptyView()
    }
    return (
      <ul className="row p-0 ms-0 me-0 mt-3">
        {results.map(movie => (
          <MovieCard key={movie.id} movieDetails={movie} />
        ))}
      </ul>
    )
  }

  const renderLoadingView = () => (
    <div className="loader-container">
      <div>Loading...</div>
    </div>
  )

  const renderSearchResultViews = () => {
    switch (apiStatus) {
      case 'IN_PROGRESS':
        return renderLoadingView()
      case 'SUCCESS':
        return renderMoviesList()
      default:
        return renderEmptyView()
    }
  }

  return (
    <>
      <NavBar />
      <div className="route-page-body">
        {renderSearchResultViews()}
      </div>
      <Pagination
        totalPages={searchResponse.totalPages}
        apiCallback={onTriggerSearchingQuery}
      />
    </>
  )
}

export default SearchQuery
