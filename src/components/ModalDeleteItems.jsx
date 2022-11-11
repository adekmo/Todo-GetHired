import React from 'react'
import { useNavigate } from 'react-router-dom'

const ModalDeleteItems = ({show, onClose, detail}) => {

    const navigate = useNavigate();

    const handleDelete = async () => {
        fetch('https://todo.api.devcode.gethired.id/todo-items/' + detail.id, {
            method: 'DELETE',
        }).then(() => {
            onClose();
            navigate('/');
        })
    }

    if(!show) return null;
    return (
        <div className='bg-white/10 bg-opacity-10 backdrop-blur-sm w-full h-full self-start flex justify-center absolute left-0'>
            <div data-cy="modal-delete" className='w-[490px] h-[355px] bg-white flex flex-col justify-around items-center sort-animation'>
                <div data-cy="modal-delete-icon" className='w-[84px] h-[84px] '>
                    <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M42 52.5V52.535M42 31.5V38.5V31.5Z" stroke="#ED4C5C" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17.5002 66.5012H66.5002C67.6423 66.4932 68.765 66.2059 69.7705 65.6643C70.7761 65.1227 71.6338 64.3433 72.2689 63.3941C72.904 62.4449 73.2972 61.3546 73.4142 60.2186C73.5312 59.0825 73.3685 57.935 72.9402 56.8762L48.0902 14.0012C47.4848 12.9071 46.5975 11.9952 45.5203 11.3601C44.4432 10.725 43.2156 10.3901 41.9652 10.3901C40.7148 10.3901 39.4872 10.725 38.41 11.3601C37.3329 11.9952 36.4455 12.9071 35.8402 14.0012L10.9902 56.8762C10.57 57.9108 10.4033 59.0308 10.5042 60.1428C10.6051 61.2549 10.9705 62.3266 11.57 63.2687C12.1694 64.2107 12.9856 64.9956 13.9502 65.558C14.9149 66.1203 16.0001 66.4438 17.1152 66.5012" stroke="#ED4C5C" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <div data-cy="modal-delete-title" className='w-[365px] h-[54px]'>
                    <p className='font-poppins font-medium text-[18px] leading-[27px] text-[#111111]'>Apakah anda yakin menghapus item <span className='font-poppins font-bold text-[18px] leading[27px] '>{detail.title}</span></p>
                </div>

                <div className='flex justify-center gap-[6px]'>
                    <button data-cy="modal-delete-cancel-button" className='w-[150px] h-[54px] px-[14px] py-[13px] bg-[#F4F4F4] rounded-[45px] font-poppins font-medium' onClick={onClose}>Batal</button>
                    <button data-cy="modal-delete-confirm-button" className='w-[150px] h-[54px] px-[14px] py-[13px] bg-[#ED4C5C] rounded-[45px] font-poppins font-medium text-white' onClick={handleDelete}>Hapus</button>
                </div>
            </div>
        </div>
    )
}

export default ModalDeleteItems