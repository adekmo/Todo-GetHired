import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AlertActivity from './AlertActivity';
import ModalDelete from './ModalDelete';

const ActivityCard = ({ act, getActivity }) => {

    const [modalDelete, setModalDelete] = useState(false);
    const [alert, setAlert] = useState(false);

    const handleCloseDelete = () => {
        setModalDelete(false);
    }

    const handleAlert = () => {

            setAlert(true);

    }


    

    return (
        <div>
            <ModalDelete detail={act} show={modalDelete} onClose={handleCloseDelete} getActivity={getActivity} alert={alert} handleAlert={handleAlert} />
            <AlertActivity alert={alert} />
            <div data-cy="activity-item-0" className='w-[235px] h-[234px] rounded-[12px] shadow-card bg-white flex flex-col justify-between'>
                <Link to={`/activity-groups/${act?.id}`}>
                    <h3 data-cy="activity-item-title" className='w-[182px] h-[54px] font-poppins font-bold text-[18px] leading-[27px] text-[#111111] mx-auto pt-[22px]'>{act.title}</h3>
                </Link>
                <div className='flex justify-around pb-[25px]'>
                    <p data-cy="activity-item-date" className='w-[103px] h-[21px] font-poppins font-medium text-[14px] leading-[21px] text-[#888888] '>{act.created_at}</p>

                    <svg onClick={() => setModalDelete(true)} data-cy="activity-item-delete-button" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash cursor-pointer" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="#888888" fill="none" strokeLinecap="round" strokeLinejoin="round">
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
    )
}

export default ActivityCard