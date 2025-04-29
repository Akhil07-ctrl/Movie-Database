import { useState, useEffect } from 'react'
import './index.css'

const Pagination = ({ apiCallback, totalPages }) => {
  const [pageNo, setPageNo] = useState(1)

  useEffect(() => {
    apiCallback(pageNo)
  }, [pageNo, apiCallback])

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
