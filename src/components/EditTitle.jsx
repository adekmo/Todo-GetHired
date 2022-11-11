import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';

const EditTitle = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const url = 'https://todo.api.devcode.gethired.id/activity-groups/';

    const [title, setTitle] = useState('');

    const getTitle = async () => {

        try {
            const response = await axios.get(url, {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                }
            });
            // const project = await response.json();
            console.log("hai");
            console.log(response.data.data);
            const dataUpdate = response.data.data.filter((item) => item.id == id);
            console.log('dataupate', dataUpdate[0]);
            setTitle(dataUpdate[0]);
            // setProject(response.data.content);
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        getTitle();
    }, []);

    const handlePost = async (e) => {
        e.preventDefault();
        try {

            await axios.patch('https://todo.api.devcode.gethired.id/activity-groups/' + id, {
                title : title.title
            }, {
                headers: {
                    "Content-Type": "application/json", "Accept": "application/json",
                }
            }).then((res) => {
                console.log('ress', res.data.response);
                alert('berhasil');
                navigate('/activity-groups/' + id);
            })
        } catch (error) {
            alert('gagal');
        }
    }


    return (
        <div>
            <div data-cy="todo-back-button" className='absolute top-[159px] left-[220px] '>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width="32" height="32" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <polyline points="15 6 9 12 15 18"></polyline>
                </svg>
            </div>

            <div className='absolute w-[233px] h-[54px] left-[271px] top-[148px] '>
                {/* <Link to={`/activity-groups/${detail.id}`}><h2 data-cy="todo-title" className='font-poppins font-bold text-[36px] leading-[54px] text-[#111111] '>{detail.title}</h2></Link> */}
                <form onSubmit={handlePost}>
                    <input
                        type="text"
                        required
                        value={title.title}
                        onChange={(e) => setTitle({
                            ...title,
                            title: e.target.value
                        })}
                    />
                </form>
            </div>

            <div data-cy="todo-title-edit-button" className='absolute left-[523px] top-[164px] cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pencil" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="#A4A4A4" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
                            <line x1="13.5" y1="6.5" x2="17.5" y2="10.5"></line>
                        </svg>
                    </div>


            <div data-cy="todo-sort-button" className='absolute left-[989px] top-[154px] w-[54px] h-[54px] border border-solid border-[#E5E5E5] rounded-[45px] flex items-center justify-center cursor-pointer py-[13px] px-[14px] gap-[6px]' onClick={() => setToggle((prev) => !prev)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrows-sort" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="#888888" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3 9l4 -4l4 4m-4 -4v14"></path>
                    <path d="M21 15l-4 4l-4 -4m4 4v-14"></path>
                </svg>
            </div>

            <div data-cy="todo-add-button" className='flex flex-row justify-center items-center p-button gap-[6px] absolute w-[159] h-[54px] top-[154px] left-[1061px] bg-[#16ABF8] rounded-[45px] cursor-pointer' onClick={() => setModal(true)}>
                <p className='font-poppins font-semibold text-[18px] leading-[27px] text-[#FFFFFF] '>+</p>
                <p className='w-[78px] h-[27px] font-poppins font-semibold text-[18px] leading-[27px] text-[#FFFFFF] '>Tambah</p>
            </div>

        </div>
    )
}

export default EditTitle