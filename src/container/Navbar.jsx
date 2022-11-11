import React from 'react'

const Navbar = () => {
    return (
        <div data-cy="header-background" className='w-[1440px] h-[105px] bg-[#16ABF8] box-shadow '>
            <p data-cy="header-title" className='w-[229px] h-[36px] font-poppins font-bold text-[24px] leading-[36px] uppercase text-[#FFFFFF] ml-[220px] pt-[38px] pb-[31px]'>To do List App</p>
        </div>
    )
}

export default Navbar