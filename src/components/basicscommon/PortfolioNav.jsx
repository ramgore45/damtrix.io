import React from 'react'

export const PortfolioNav = ({text}) => {
  return (
        <button className='focus:text-green-600 hover:text-green-600 cursor-pointer w-fit h-fit'>
                {text}
        </button>
  )
}
