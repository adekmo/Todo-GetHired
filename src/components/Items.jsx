import React, { useState } from 'react'
import ModalDeleteItems from './ModalDeleteItems'

const Items = ({ todo }) => {
    const [modalDelete, setModalDelete] = useState(false);

    const handleCloseDelete = () => {
        setModalDelete(false);
    }
    return (
        <div>
            <ModalDeleteItems detail={todo} show={modalDelete} onClose={handleCloseDelete} />

            <div data-cy="todo-item-0" className='w-[1000px] h-[80px] flex flex-row justify-between items-center bg-white shadow-card rounded-[12px] mb-5'>
                <div className='flex flex-row items-center ml-10'>
                    <input type="checkbox" className='w-[20px] h-[20px] mr-3' data-cy="todo-item-checkbox" />
                    {/* priority kuning = FFCE31 , hijau = 00A790, biru = 43C4E3, ungu = B01AFF */}
                    <div className={`w-[9px] h-[9px] rounded-full mr-3 ${todo.priority === 'very-high' ? 'bg-[#ED4C5C]' : todo.priority === 'high' ? 'bg-[#F8A541]' : todo.priority === 'medium' ? 'bg-[#00A790]' : todo.priority === 'low' ? 'bg-[#428BC1]' : 'bg-[#8942C1]'}`} data-cy="todo-item-priority-indicator" />
                    <p data-cy="todo-item-title" className='font-poppins font-medium text-[18px] leading-[27px] text-[#111111] mr-3'>{todo.title}</p>
                    <div data-cy="todo-item-edit-button" className='cursor-pointer '>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pencil" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="#A4A4A4" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
                            <line x1="13.5" y1="6.5" x2="17.5" y2="10.5"></line>
                        </svg>
                    </div>
                </div>
                <div data-cy="todo-item-delete-button" className='cursor-pointer mr-10' onClick={() => setModalDelete(true)}>
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

    )
}

export default Items