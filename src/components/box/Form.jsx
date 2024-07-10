import React from 'react'

export const Form = () => {
  return (
    <div className='flex flex-col gap-y-5 font-semibold'>
            <div className='flex flex-col gap-y-2'>
                <label>Your Name</label>
                <input type='text' 
                    className='p-4 outline-none rounded-lg border text-sm'
                />
            </div>
            <div className='flex flex-col gap-y-2 '>
                <label>Email Address</label>
                <input type='email' 
                    className='p-4 outline-none rounded-lg border text-sm'
                />
            </div>
            <div className='flex flex-col gap-y-2 '>
                <label>How can help you?</label>
                <textarea type='text' 
                    className='p-4 outline-none rounded-lg border h-52 text-sm'
                />
            </div>
            <button className=' p-3 px-8 text-white rounded-lg text-center font-bold bg-gradient-to-r from-violet-500 to-green-400
                            transition-all ease-out duration-500
                            hover:bg-gradient-to-l hover:transition-all
            '>
                Submit Now
            </button>
    </div>
  )
}
