import React, { useState } from 'react'

const ModalAddList = ({visible, onClose}) => {

    const [title, setTitle] = useState('');
    const [priority, setPriority] = useState('');
    const [is_active, setIs_active] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const item = { title, priority, is_active };

        fetch('https://todo.api.devcode.gethired.id/todo-items', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json", "Accept": "application/json",
            },
            body: JSON.stringify(item)
        }).then(() => {
            console.log('new projects added');
        })
    }

    if(!visible) return null;


    return (
        <div className='bg-white/10 bg-opacity-10 backdrop-blur-sm w-[1440px] h-[1024px] flex justify-center items-center'>
            <div data-cy="modal-add" className='w-[830px] h-[403px] absolute bg-white box-shadow rounded-[12px] sort-animation'>
                <div className='flex justify-between items-center px-[30px] py-[24px]'>
                    <h2 data-cy="modal-add-title" className='w-[159px] h-[27px] font-poppins font-semibold text-[18px] leading-[27px] text-[#111111]'>Tambah List Item</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" data-cy="modal-add-close-button" className="icon icon-tabler icon-tabler-x cursor-pointer" onClick={onClose} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="#A4A4A4" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </div>

                <div className='px-[30px] py-[32px] border-sort mb-3'>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="" data-cy="modal-add-name-title" className='w-[94px] h-[18px] font-poppins font-semibold text-[12px] leading-[18px] text-[#111111] uppercase'>Nama List Item</label>
                            <input
                                data-cy="modal-add-name-input"
                                type="text"
                                required
                                className='w-[759px] h-[52px] font-poppins font-normal text-[16px] leading-[24px] text-[#111111] bg-white border-sort rounded-[6px] px-[18px] py-[14px] mt-[9px] mb-[26px] focus:outline-none focus:ring focus:ring-[#16ABF8]'
                                placeholder='Tambahkan nama list item'
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>

                        <div>
                            <label data-cy="modal-add-priority-title" className='w-[54px] h-[18px] font-poppins font-semibold text-[12px] leading-[18px] text-[#111111] uppercase '>
                                priority
                            </label>
                            <div data-cy="modal-add-priority-dropdown">
                                <select data-cy="modal-add-priority-item" value={priority}
                                    onChange={(e) => setPriority(e.target.value)} required className='w-[205px] h-[52px] bg-white border-sort rounded-6px px-[17px] py-[14px] '>
                                    <option value="Very High">
                                        Very High
                                    </option>
                                    <option value="High">
                                        High
                                    </option>
                                    <option value="Medium">
                                        Medium
                                    </option>
                                    <option value="Low">
                                        Low
                                    </option>
                                    <option value="Very Low">
                                        Very Low
                                    </option>
                                </select>
                            </div>
                        </div>
                        <button data-cy="modal-add-save-button" className='w-[150px] h-[54px] px-[13px] py-[14px] flex justify-center items-center bg-[#16ABF8] opacity-[0.2] rounded-[45px] gap-[6px] ml-[640px]' >
                    <p className='w-[72px] h-[27px] text-white font-poppins font-semibold text-[18px] leading-[27px]'>Simpan</p>
                </button>
                    </form>
                </div>


                
            </div>
        </div>
    )
}

export default ModalAddList