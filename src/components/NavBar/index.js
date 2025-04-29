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
    <nav className="navbar-container d-flex align-items-center p-3">
      <div className="logo-container">
        <h1 className="page-logo">movieDB</h1>
      </div>
      <div className="ms-auto d-flex align-items-center">
        <ul className="order-1 d-flex align-items-center p-0 mb-0 ms-3 nav-items-list">
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
        <div className="d-flex align-items-center">
          <input
            type="text"
            className="me-2 search-input"
            onChange={onChangeHandler}
            value={searchInput}
            placeholder="Search"
          />
          <button
            className="btn btn-outline-info"
            type="button"
            onClick={onSearchHandler}
          >
            Search
          </button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
