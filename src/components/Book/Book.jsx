import React from 'react'

function Book({id, title, author, status, image}) {
  return (
      <div class="bg-gray-100 m-2 w-2/6 justify-center p-2" id={id}>
          <p class="font-normal text-gray-700 align-middle text-center hover:text-gray-500 hover:cursor-pointer">{title} <span className='float-right'><b>↓</b></span></p>
    
          {/* <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{author}</p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{status}</p> */}
      </div>
  )
}

export default Book