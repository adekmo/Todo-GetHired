import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ModalDelete from './ModalDelete';

const ActivityCard = ({ prjct }) => {

    const [modalDelete, setModalDelete] = useState(false);

    const handleCloseDelete = () => {
        setModalDelete(false);
    }

    return (
        <div>
            <ModalDelete detail={prjct} show={modalDelete} onClose={handleCloseDelete} />
            <div data-cy="activity-item-0" className='w-[235px] h-[234px] bg-white shadow-card rounded-[12px] mr-5 mt-5 '>
                <div className='flex flex-col'>
                    <Link to={`/activity-groups/${prjct?.id}`}>
                        <div className='w-[182px] h-[54px] mt-5 mx-auto'>
                            <p className='font-poppins font-bold text-[18px] leading-[27px] text-[#111111] '>{prjct.title}</p>
                        </div>
                    </Link>
                    <div className='flex items-center justify-around mt-28 '>
                        <p className='font-poppins font-medium text-[14px] leading-[21px] text-[#888888] '>
                            {prjct.created_at}
                        </p>

                        <div className='cursor-pointer' onClick={() => setModalDelete(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="#888888" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <line x1="4" y1="7" x2="20" y2="7"></line>
                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                <line x1="14" y1="11" x2="14" y2="17"></line>
                                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default ActivityCard