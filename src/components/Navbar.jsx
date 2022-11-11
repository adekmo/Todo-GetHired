import React from 'react';


const Navbar = () => {

  return (
    <nav data-cy="header-background" className='w-[1440px] h-[105px] bg-[#16ABF8] box-shadow absolute top-0 left-0'>
      {/* <img src={logo} alt="myslice" className='w-[124px] h-[32px]' /> */}
      <div className='absolute w-[229px] h-[36px] left-[220px] top-[38px]'>
        <p data-cy="header-title" className='font-poppins w-[700px] text-[24px] text-[#FFFFFF] uppercase leading-[36px]'>to do list</p>
      </div>
    </nav>
  )
}

export default Navbar