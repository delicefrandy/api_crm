import React from 'react'

const SendForm = ({children}) => {
  return (
    <div className='bg-green-500 p-4 mt-7 rounded-md uppercase text-center text-xl text-white font-bold'>
        <p>{children}</p>
    </div>
  )
}

export default SendForm