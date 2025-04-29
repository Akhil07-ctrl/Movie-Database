import {createContext} from 'react'

const SearchMoviesContext = createContext({
  searchResponse: {},
  apiStatus: 'INITIAL',
  searchInput: '',
  onTriggerSearchingQuery: () => {},
  onChangeSearchInput: () => {},
})

export default SearchMoviesContext
