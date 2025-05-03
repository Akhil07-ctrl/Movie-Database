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
      <p>Do not get worried, Try to search again.</p>
    </div>
  )

  const renderMoviesList = () => {
    const { results } = searchResponse

    if (!results || !results.length) {
      return renderEmptyView()
    }
    return (
      <div className="container-fluid p-0">
        <h2 className="section-title mb-4">Search Results</h2>
        <ul className="row g-3 p-0 movie-grid">
          {results.map(movie => (
            <MovieCard key={movie.id} movieDetails={movie} />
          ))}
        </ul>
      </div>
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
      {/* Only render Pagination when we have search results and totalPages exists */}
      {apiStatus === 'SUCCESS' && searchResponse.totalPages > 0 && (
        <Pagination
          totalPages={searchResponse.totalPages}
          apiCallback={onTriggerSearchingQuery}
        />
      )}
    </>
  )
}

export default SearchQuery
