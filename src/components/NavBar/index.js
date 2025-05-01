import {Link, useNavigate} from 'react-router-dom'
import {useContext} from 'react'

import SearchMoviesContext from '../../context/SearchMoviesContext'

import './index.css'

const NavBar = () => {
  const navigate = useNavigate()
  const {onTriggerSearchingQuery, onChangeSearchInput, searchInput} = useContext(SearchMoviesContext)

  const onChangeHandler = event => onChangeSearchInput(event.target.value)

  const onSearchHandler = event => {
    event.preventDefault()
    onTriggerSearchingQuery()
    navigate('/search')
  }

  return (
    <nav className="navbar-container d-flex flex-column flex-md-row align-items-center">
      <div className="logo-container">
        <h1 className="page-logo">movieDB</h1>
      </div>
      <div className="ms-md-auto d-flex flex-column flex-md-row align-items-center justify-content-between w-100 w-md-auto">
        <ul className="nav-items-list">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Popular
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/top-rated">
              Top Rated
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/upcoming">
              Upcoming
            </Link>
          </li>
        </ul>
        <form className="search-container" onSubmit={(e) => {
          e.preventDefault();
          onSearchHandler(e);
        }}>
          <input
            type="text"
            className="search-input"
            onChange={onChangeHandler}
            value={searchInput}
            placeholder="Search"
          />
          <button
            className="btn btn-outline-info"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  )
}

export default NavBar
