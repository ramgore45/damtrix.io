import React from 'react'

export const AnimationImages = () => {
  return (
    <div>
        <div className='relative'>
            {/* first section 2 img */}
            <div className='flex justify-between '>
                <div className='border-green-400  border rounded-full p-2 sm:p-3 animation1'>
                    <img className='h-24 w-24 sm:h-28 sm:w-28 md:h-44 md:w-44 rounded-full'
                        src='https://www.isixsigma.com/wp-content/uploads/2018/11/shutterstock_1687550977-scaled.jpg'
                    />
                </div>
                <div className='border-green-400 w-fit h-fit border rounded-full p-1 sm:p-2 mr-5 animate-spin'>
                    <img className='h-14 w-14 sm:h-16 sm:w-16 md:h-24 md:w-24 rounded-full '
                        src='https://img.freepik.com/free-vector/circle-arrows-round-rotating-circular-recycle-abstract-low-poly-wireframe-mesh-design-from-connecting-dot-line-vector-illustration-blue-background_587448-497.jpg'
                    />
                </div>
            </div>

            {/* second secction Large img */}
            <div className='flex justify-end '>
                <div className=' relative lg:bottom-20 md:bottom-24 bottom-12 lg:right-8 border border-green-400 rounded-full p-2 sm:p-5 animation1'>
                    <img className='h-[150px] w-[150px] sm:h-[250px] sm:w-[250px] md:h-[300px] md:w-[300px] rounded-full'
                        src='https://t3.ftcdn.net/jpg/03/89/71/46/360_F_389714673_2h7cQh8hPJgcZIZ1u2LSlld8TcfwpPNi.jpg'
                    />
                </div>
            </div>
           
            {/* Third section medium img */}
            <div className='flex'>
                <div className='border-green-400  border rounded-full p-1 sm:p-3 absolute lg:bottom-20 md:bottom-40 sm:bottom-28 bottom-20 animation1'>
                    <img className='h-24 w-24 md:h-48 md:w-48 sm:h-40 sm:w-40 rounded-full'
                        src='https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg'
                    />
                </div>
            </div>

            {/* fourth section end Img */}
            <div className='flex justify-end'>
                <div className='border-green-400 border rounded-full p-1 sm:p-2 relative md:bottom-16 bottom-8 right-8 animation1'>
                    <img className='h-24 w-24 md:h-36 md:w-36 sm:h-32 sm:w-32 rounded-full'
                        src='https://www.isixsigma.com/wp-content/uploads/2018/11/shutterstock_1687550977-scaled.jpg'
                    />
                </div>
            </div>
        </div>
    </div>
  )
}
