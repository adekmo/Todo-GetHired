import React from 'react'

const AlertActivity = ({alert}) => {

    if(!alert) return null;
    return (
        <div data-cy="modal-information" className='absolute top-[390px] left-[490px] w-[490px] h-[58px] flex bg-[#FFFFFF] box-shadow rounded-[12px] items-center gap-2 sort-animation'>
            <div data-cy="modal-information-icon" className='ml-[24px]'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#00A790" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 8V12" stroke="#00A790" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 16H12.01" stroke="#00A790" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <div data-cy="modal-information-title">
                <p className='w-[175px] h-[21px] font-poppins font-medium text-[14px] leading-[21px] text[#111111] text-center '>Activity berhasil dihapus</p>
            </div>

        </div>
    )
}

export default AlertActivity