import React from 'react'
import { Description } from '../basicscommon/Description'
import ReactStars from 'react-rating-stars-component'

export const Testimony = ({name}) => {
  return (
    <div>
        <div>
            <div className='text-black p-5 sm:p-10 lg:p-20 h-fit w-[330px] sm:w-[95%] lg:w-[800px]  rounded-3xl bg-gray-50 shadow-md border-2 border-gray-50 group
                    hover:border-violet-700 hover:shadow-lg transition ease-in-out duration-500'
            >
                
                <div className='flex justify-between'>
                    <div className='flex gap-x-4 border-b pb-4 group-hover:border-violet-600 transition ease-in-out duration-500'>
                        <div className='border p-2 w-24 h-24 rounded-full'>
                            <img className='h-20 w-20  rounded-full'
                                 src='https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg'
                            />
                        </div>
                        <div className='self-center flex flex-col gap-y-2'>
                            <p className='font-extrabold sm:text-xl'>
                                {name}
                            </p>
                            <p className='text-gray-500'>
                                Digital Marketer
                            </p>
                        </div>
                    </div>
                    <div className='mt-3 sm:px-2 bg-white shadow-md h-fit w-fit border-none'>
                        <ReactStars
                        classNames='flex gap-x-1'
                            count={5}
                            size={20}
                            value={4}
                            activeColor="#ffd700"
                        />
                    </div>
                </div>

                <div className='mt-5'>
                    <Description>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint totam possimus, hic officia odio quasi, dolores sit rerum accusamus obcaecati corrupti expedita ea fugiat culpa! Ipsum accusamus qui minus autem!
                    </Description>
                </div>

            </div>

            <div>
                {/* Images absolute */}
            </div>

        </div>
    </div>
  )
}
