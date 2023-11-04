import React, {  useContext } from 'react'
import { AppContext } from '../context/AppContext'

export const Pagination = () => {
  const {page,handlePageChanger,totalPages} = useContext(AppContext);
  return (

    <div className='border-2 w-full fixed bottom-0 bg-white py-1'>
        <div className='flex justify-evenly items-center'>
          <div>
          { page > 1 &&  (
              <button className='rounded-md  py-1 px-3 mr-2 border-2 border-black' onClick={() => {handlePageChanger(page-1)}}>Previous</button>
            )
          }
          { page <totalPages && (
              <button className='rounded-md border-2 py-1 px-3  border-black ' onClick={() => {handlePageChanger(page+1)}}>Next</button>
            )
          }
          </div>
          <p className=''>Page {page} of {totalPages}</p>
        </div>
    </div>
  )
}
