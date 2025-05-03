import { useState, useEffect, useRef } from 'react'
import './index.css'

const Pagination = ({ apiCallback, totalPages }) => {
  const [pageNo, setPageNo] = useState(1)
  const isInitialMount = useRef(true)

  // Only call the API when the page number changes, not on initial render
  useEffect(() => {
    // Skip the initial render to prevent duplicate API calls
    if (isInitialMount.current) {
      isInitialMount.current = false
      return
    }
    
    apiCallback(pageNo)
  }, [pageNo, apiCallback]) // Include apiCallback to satisfy ESLint

  const onNextPage = () => {
    if (pageNo < totalPages) {
      setPageNo(prevPageNo => prevPageNo + 1)
    }
  }

  const onPrevPage = () => {
    if (pageNo > 1) {
      setPageNo(prevPageNo => prevPageNo - 1)
    }
  }

  return (
    <div className="pagination-container">
      <button 
        type="button" 
        className="control-btn" 
        onClick={onPrevPage}
        disabled={pageNo <= 1}
      >
        Prev
      </button>
      <p className="page-no">{pageNo}</p>
      <button 
        type="button" 
        className="control-btn" 
        onClick={onNextPage}
        disabled={pageNo >= totalPages}
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
