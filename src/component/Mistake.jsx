import React from 'react'


const Mistake = ({children}) => {
  return (
    <div className='bg-red-500 uppercase text-xl text-center text-white p-3 mt-4 rounded-md' >
       <p>{children}</p>
    </div>
  )
}

export default Mistake