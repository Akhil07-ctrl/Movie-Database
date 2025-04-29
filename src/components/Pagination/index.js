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
    <div className="mb-3 d-flex justify-content-center align-items-center">
      <button type="button" className="control-btn" onClick={onPrevPage}>
        Prev
      </button>
      <p className="page-no">{pageNo}</p>
      <button type="button" className="control-btn" onClick={onNextPage}>
        Next
      </button>
    </div>
  )
}

export default Pagination
