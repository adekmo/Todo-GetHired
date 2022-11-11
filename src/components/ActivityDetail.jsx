import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { fetchFromAPI } from '../utiliti/fetch';
import Items from './Items';
import ModalAddList from './ModalAddList';

const ActivityDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [detail, setDetail] = useState([]);

  const [toggle, setToggle] = useState(false);
  const [modal, setModal] = useState(false);


  console.log('detail', detail);

  const handleClose = () => {
    setModal(false);
  }

  //   const handleUpdate = async (id) => {
  //     console.log('ID', id);
  //     fetch('https://todo.api.devcode.gethired.id/activity-groups/' + id, {
  //         method: 'PATCH',
  //         headers: { "Content-Type": "application/json", "Accept": "application/json",
  // }
  //     }).then(() => {
  //         console.log('patch');
  //     })
  // }

  useEffect(() => {
    fetchFromAPI(`activity-groups/${id}`)
      .then((data) => setDetail(data));
  }, [id])

  const handleBack = () => {
    navigate('/');
}


  return (
    <div>
      <div onClick={handleBack} data-cy="todo-back-button" className='absolute top-[159px] left-[220px] '>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width="32" height="32" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <polyline points="15 6 9 12 15 18"></polyline>
        </svg>
      </div>

      <div className='absolute w-[233px] h-[54px] left-[271px] top-[148px] '>
        <h2 data-cy="todo-title" className='font-poppins font-bold text-[36px] leading-[54px] text-[#111111] '>{detail.title}</h2>
      </div>

      <Link to={`/activity-groups/${detail.id}`}>
        <div data-cy="todo-title-edit-button" className='absolute left-[523px] top-[164px] cursor-pointer'>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pencil" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="#A4A4A4" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
            <line x1="13.5" y1="6.5" x2="17.5" y2="10.5"></line>
          </svg>
        </div>
      </Link>

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

      {
        detail?.todo_items === [] ? (<div data-cy="todo-empty-state" className='absolute w-[541px] h-[413px] left-[449px] top-[305px] cursor-pointer '>
          <svg width="541" height="413" viewBox="0 0 541 413" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_2_477)">
              <path d="M210.676 39.5H486.324C487.045 39.5 487.688 39.5455 488.14 39.6155C488.29 39.6387 488.41 39.6633 488.5 39.6868V96.3132C488.41 96.3367 488.29 96.3613 488.14 96.3845C487.688 96.4545 487.045 96.5 486.324 96.5H210.676C209.955 96.5 209.312 96.4545 208.86 96.3845C208.71 96.3613 208.59 96.3367 208.5 96.3132V39.6868C208.59 39.6633 208.71 39.6387 208.86 39.6155C209.312 39.5455 209.955 39.5 210.676 39.5Z" fill="white" stroke="#CACACA" />
              <path d="M210.676 105.5H486.324C487.045 105.5 487.688 105.545 488.14 105.615C488.29 105.639 488.41 105.663 488.5 105.687V162.313C488.41 162.337 488.29 162.361 488.14 162.385C487.688 162.455 487.045 162.5 486.324 162.5H210.676C209.955 162.5 209.312 162.455 208.86 162.385C208.71 162.361 208.59 162.337 208.5 162.313V105.687C208.59 105.663 208.71 105.639 208.86 105.615C209.312 105.545 209.955 105.5 210.676 105.5Z" fill="white" stroke="#CACACA" />
              <path d="M210.676 176.5H486.324C487.045 176.5 487.688 176.545 488.14 176.615C488.29 176.639 488.41 176.663 488.5 176.687V233.313C488.41 233.337 488.29 233.361 488.14 233.385C487.688 233.455 487.045 233.5 486.324 233.5H210.676C209.955 233.5 209.312 233.455 208.86 233.385C208.71 233.361 208.59 233.337 208.5 233.313V176.687C208.59 176.663 208.71 176.639 208.86 176.615C209.312 176.545 209.955 176.5 210.676 176.5Z" fill="white" stroke="#CACACA" />
              <path d="M238.492 283.408C239.436 283.584 240.212 284.056 240.82 284.824C241.428 285.592 241.732 286.472 241.732 287.464C241.732 288.36 241.508 289.152 241.06 289.84C240.628 290.512 239.996 291.04 239.164 291.424C238.332 291.808 237.348 292 236.212 292H228.988V275.248H235.9C237.036 275.248 238.012 275.432 238.828 275.8C239.66 276.168 240.284 276.68 240.7 277.336C241.132 277.992 241.348 278.736 241.348 279.568C241.348 280.544 241.084 281.36 240.556 282.016C240.044 282.672 239.356 283.136 238.492 283.408ZM232.348 282.16H235.42C236.22 282.16 236.836 281.984 237.268 281.632C237.7 281.264 237.916 280.744 237.916 280.072C237.916 279.4 237.7 278.88 237.268 278.512C236.836 278.144 236.22 277.96 235.42 277.96H232.348V282.16ZM235.732 289.264C236.548 289.264 237.18 289.072 237.628 288.688C238.092 288.304 238.324 287.76 238.324 287.056C238.324 286.336 238.084 285.776 237.604 285.376C237.124 284.96 236.476 284.752 235.66 284.752H232.348V289.264H235.732ZM256.962 278.704V292H253.578V290.32C253.146 290.896 252.578 291.352 251.874 291.688C251.186 292.008 250.434 292.168 249.618 292.168C248.578 292.168 247.658 291.952 246.858 291.52C246.058 291.072 245.426 290.424 244.962 289.576C244.514 288.712 244.29 287.688 244.29 286.504V278.704H247.65V286.024C247.65 287.08 247.914 287.896 248.442 288.472C248.97 289.032 249.69 289.312 250.602 289.312C251.53 289.312 252.258 289.032 252.786 288.472C253.314 287.896 253.578 287.08 253.578 286.024V278.704H256.962ZM259.413 285.304C259.413 283.96 259.677 282.768 260.205 281.728C260.749 280.688 261.477 279.888 262.389 279.328C263.317 278.768 264.349 278.488 265.485 278.488C266.477 278.488 267.341 278.688 268.077 279.088C268.829 279.488 269.429 279.992 269.877 280.6V278.704H273.261V292H269.877V290.056C269.445 290.68 268.845 291.2 268.077 291.616C267.325 292.016 266.453 292.216 265.461 292.216C264.341 292.216 263.317 291.928 262.389 291.352C261.477 290.776 260.749 289.968 260.205 288.928C259.677 287.872 259.413 286.664 259.413 285.304ZM269.877 285.352C269.877 284.536 269.717 283.84 269.397 283.264C269.077 282.672 268.645 282.224 268.101 281.92C267.557 281.6 266.973 281.44 266.349 281.44C265.725 281.44 265.149 281.592 264.621 281.896C264.093 282.2 263.661 282.648 263.325 283.24C263.005 283.816 262.845 284.504 262.845 285.304C262.845 286.104 263.005 286.808 263.325 287.416C263.661 288.008 264.093 288.464 264.621 288.784C265.165 289.104 265.741 289.264 266.349 289.264C266.973 289.264 267.557 289.112 268.101 288.808C268.645 288.488 269.077 288.04 269.397 287.464C269.717 286.872 269.877 286.168 269.877 285.352ZM280.455 281.464V287.896C280.455 288.344 280.559 288.672 280.767 288.88C280.991 289.072 281.359 289.168 281.871 289.168H283.431V292H281.319C278.487 292 277.071 290.624 277.071 287.872V281.464H275.487V278.704H277.071V275.416H280.455V278.704H283.431V281.464H280.455ZM294.926 289.336H300.446V292H291.566V275.248H294.926V289.336ZM304.286 277.12C303.694 277.12 303.198 276.936 302.798 276.568C302.414 276.184 302.222 275.712 302.222 275.152C302.222 274.592 302.414 274.128 302.798 273.76C303.198 273.376 303.694 273.184 304.286 273.184C304.878 273.184 305.366 273.376 305.75 273.76C306.15 274.128 306.35 274.592 306.35 275.152C306.35 275.712 306.15 276.184 305.75 276.568C305.366 276.936 304.878 277.12 304.286 277.12ZM305.942 278.704V292H302.582V278.704H305.942ZM314.349 292.216C313.261 292.216 312.285 292.024 311.421 291.64C310.557 291.24 309.869 290.704 309.357 290.032C308.861 289.36 308.589 288.616 308.541 287.8H311.925C311.989 288.312 312.237 288.736 312.669 289.072C313.117 289.408 313.669 289.576 314.325 289.576C314.965 289.576 315.461 289.448 315.813 289.192C316.181 288.936 316.365 288.608 316.365 288.208C316.365 287.776 316.141 287.456 315.693 287.248C315.261 287.024 314.565 286.784 313.605 286.528C312.613 286.288 311.797 286.04 311.157 285.784C310.533 285.528 309.989 285.136 309.525 284.608C309.077 284.08 308.853 283.368 308.853 282.472C308.853 281.736 309.061 281.064 309.477 280.456C309.909 279.848 310.517 279.368 311.301 279.016C312.101 278.664 313.037 278.488 314.109 278.488C315.693 278.488 316.957 278.888 317.901 279.688C318.845 280.472 319.365 281.536 319.461 282.88H316.245C316.197 282.352 315.973 281.936 315.573 281.632C315.189 281.312 314.669 281.152 314.013 281.152C313.405 281.152 312.933 281.264 312.597 281.488C312.277 281.712 312.117 282.024 312.117 282.424C312.117 282.872 312.341 283.216 312.789 283.456C313.237 283.68 313.933 283.912 314.877 284.152C315.837 284.392 316.629 284.64 317.253 284.896C317.877 285.152 318.413 285.552 318.861 286.096C319.325 286.624 319.565 287.328 319.581 288.208C319.581 288.976 319.365 289.664 318.933 290.272C318.517 290.88 317.909 291.36 317.109 291.712C316.325 292.048 315.405 292.216 314.349 292.216ZM326.252 281.464V287.896C326.252 288.344 326.356 288.672 326.564 288.88C326.788 289.072 327.156 289.168 327.668 289.168H329.228V292H327.116C324.284 292 322.868 290.624 322.868 287.872V281.464H321.284V278.704H322.868V275.416H326.252V278.704H329.228V281.464H326.252ZM340.723 275.248V292H337.363V275.248H340.723ZM347.955 281.464V287.896C347.955 288.344 348.059 288.672 348.267 288.88C348.491 289.072 348.859 289.168 349.371 289.168H350.931V292H348.819C345.987 292 344.571 290.624 344.571 287.872V281.464H342.987V278.704H344.571V275.416H347.955V278.704H350.931V281.464H347.955ZM365.707 285.064C365.707 285.544 365.675 285.976 365.611 286.36H355.891C355.971 287.32 356.307 288.072 356.899 288.616C357.491 289.16 358.219 289.432 359.083 289.432C360.331 289.432 361.219 288.896 361.747 287.824H365.371C364.987 289.104 364.251 290.16 363.163 290.992C362.075 291.808 360.739 292.216 359.155 292.216C357.875 292.216 356.723 291.936 355.699 291.376C354.691 290.8 353.899 289.992 353.323 288.952C352.763 287.912 352.483 286.712 352.483 285.352C352.483 283.976 352.763 282.768 353.323 281.728C353.883 280.688 354.667 279.888 355.675 279.328C356.683 278.768 357.843 278.488 359.155 278.488C360.419 278.488 361.547 278.76 362.539 279.304C363.547 279.848 364.323 280.624 364.867 281.632C365.427 282.624 365.707 283.768 365.707 285.064ZM362.227 284.104C362.211 283.24 361.899 282.552 361.291 282.04C360.683 281.512 359.939 281.248 359.059 281.248C358.227 281.248 357.523 281.504 356.947 282.016C356.387 282.512 356.043 283.208 355.915 284.104H362.227ZM384.672 278.512C386.304 278.512 387.616 279.016 388.608 280.024C389.616 281.016 390.12 282.408 390.12 284.2V292H386.76V284.656C386.76 283.616 386.496 282.824 385.968 282.28C385.44 281.72 384.72 281.44 383.808 281.44C382.896 281.44 382.168 281.72 381.624 282.28C381.096 282.824 380.832 283.616 380.832 284.656V292H377.472V284.656C377.472 283.616 377.208 282.824 376.68 282.28C376.152 281.72 375.432 281.44 374.52 281.44C373.592 281.44 372.856 281.72 372.312 282.28C371.784 282.824 371.52 283.616 371.52 284.656V292H368.16V278.704H371.52V280.312C371.952 279.752 372.504 279.312 373.176 278.992C373.864 278.672 374.616 278.512 375.432 278.512C376.472 278.512 377.4 278.736 378.216 279.184C379.032 279.616 379.664 280.24 380.112 281.056C380.544 280.288 381.168 279.672 381.984 279.208C382.816 278.744 383.712 278.512 384.672 278.512ZM406.899 292L402.387 286.336V292H399.027V274.24H402.387V284.344L406.851 278.704H411.219L405.363 285.376L411.267 292H406.899ZM412.179 285.304C412.179 283.96 412.443 282.768 412.971 281.728C413.515 280.688 414.243 279.888 415.155 279.328C416.083 278.768 417.115 278.488 418.251 278.488C419.243 278.488 420.107 278.688 420.843 279.088C421.595 279.488 422.195 279.992 422.643 280.6V278.704H426.027V292H422.643V290.056C422.211 290.68 421.611 291.2 420.843 291.616C420.091 292.016 419.219 292.216 418.227 292.216C417.107 292.216 416.083 291.928 415.155 291.352C414.243 290.776 413.515 289.968 412.971 288.928C412.443 287.872 412.179 286.664 412.179 285.304ZM422.643 285.352C422.643 284.536 422.483 283.84 422.163 283.264C421.843 282.672 421.411 282.224 420.867 281.92C420.323 281.6 419.739 281.44 419.115 281.44C418.491 281.44 417.915 281.592 417.387 281.896C416.859 282.2 416.427 282.648 416.091 283.24C415.771 283.816 415.611 284.504 415.611 285.304C415.611 286.104 415.771 286.808 416.091 287.416C416.427 288.008 416.859 288.464 417.387 288.784C417.931 289.104 418.507 289.264 419.115 289.264C419.739 289.264 420.323 289.112 420.867 288.808C421.411 288.488 421.843 288.04 422.163 287.464C422.483 286.872 422.643 286.168 422.643 285.352ZM445.82 278.512C447.452 278.512 448.764 279.016 449.756 280.024C450.764 281.016 451.268 282.408 451.268 284.2V292H447.908V284.656C447.908 283.616 447.644 282.824 447.116 282.28C446.588 281.72 445.868 281.44 444.956 281.44C444.044 281.44 443.316 281.72 442.772 282.28C442.244 282.824 441.98 283.616 441.98 284.656V292H438.62V284.656C438.62 283.616 438.356 282.824 437.828 282.28C437.3 281.72 436.58 281.44 435.668 281.44C434.74 281.44 434.004 281.72 433.46 282.28C432.932 282.824 432.668 283.616 432.668 284.656V292H429.308V278.704H432.668V280.312C433.1 279.752 433.652 279.312 434.324 278.992C435.012 278.672 435.764 278.512 436.58 278.512C437.62 278.512 438.548 278.736 439.364 279.184C440.18 279.616 440.812 280.24 441.26 281.056C441.692 280.288 442.316 279.672 443.132 279.208C443.964 278.744 444.86 278.512 445.82 278.512ZM467.009 278.704V292H463.625V290.32C463.193 290.896 462.625 291.352 461.921 291.688C461.233 292.008 460.481 292.168 459.665 292.168C458.625 292.168 457.705 291.952 456.905 291.52C456.105 291.072 455.473 290.424 455.009 289.576C454.561 288.712 454.337 287.688 454.337 286.504V278.704H457.697V286.024C457.697 287.08 457.961 287.896 458.489 288.472C459.017 289.032 459.737 289.312 460.649 289.312C461.577 289.312 462.305 289.032 462.833 288.472C463.361 287.896 463.625 287.08 463.625 286.024V278.704H467.009Z" fill="#555555" />
              <path d="M456.621 73.0298H260.015C258.685 73.0298 257.41 72.5015 256.469 71.561C255.528 70.6205 255 69.3449 255 68.0149C255 66.6849 255.528 65.4093 256.469 64.4688C257.41 63.5284 258.685 63 260.015 63H456.621C457.951 63 459.227 63.5284 460.168 64.4688C461.108 65.4093 461.637 66.6849 461.637 68.0149C461.637 69.3449 461.108 70.6205 460.168 71.561C459.227 72.5015 457.951 73.0298 456.621 73.0298Z" fill="#E6E6E6" />
              <path d="M456.621 139.03H260.015C258.685 139.03 257.41 138.501 256.469 137.561C255.528 136.621 255 135.345 255 134.015C255 132.685 255.528 131.409 256.469 130.469C257.41 129.528 258.685 129 260.015 129H456.621C457.951 129 459.227 129.528 460.168 130.469C461.108 131.409 461.637 132.685 461.637 134.015C461.637 135.345 461.108 136.621 460.168 137.561C459.227 138.501 457.951 139.03 456.621 139.03Z" fill="#E6E6E6" />
              <path d="M456.621 210.03H260.015C258.685 210.03 257.41 209.501 256.469 208.561C255.528 207.621 255 206.345 255 205.015C255 203.685 255.528 202.409 256.469 201.469C257.41 200.528 258.685 200 260.015 200H456.621C457.951 200 459.227 200.528 460.168 201.469C461.108 202.409 461.637 203.685 461.637 205.015C461.637 206.345 461.108 207.621 460.168 208.561C459.227 209.501 457.951 210.03 456.621 210.03Z" fill="#E6E6E6" />
              <path d="M488.676 77.1079C509.971 77.1079 527.234 59.8467 527.234 38.554C527.234 17.2612 509.971 0 488.676 0C467.38 0 450.117 17.2612 450.117 38.554C450.117 59.8467 467.38 77.1079 488.676 77.1079Z" fill="#16ABF8" />
              <path d="M472.61 36.0092C471.935 36.0092 471.288 36.2773 470.811 36.7544C470.333 37.2315 470.065 37.8787 470.065 38.5534C470.065 39.2282 470.333 39.8753 470.811 40.3525C471.288 40.8296 471.935 41.0977 472.61 41.0977H486.132V54.6172C486.133 55.2909 486.402 55.9364 486.879 56.4122C487.356 56.888 488.002 57.1553 488.676 57.1553C489.349 57.1553 489.996 56.888 490.473 56.4122C490.95 55.9364 491.218 55.2909 491.22 54.6172V41.0977H504.742C505.416 41.0977 506.064 40.8296 506.541 40.3525C507.018 39.8753 507.286 39.2282 507.286 38.5534C507.286 37.8787 507.018 37.2315 506.541 36.7544C506.064 36.2773 505.416 36.0092 504.742 36.0092H491.22V22.489C491.22 21.8143 490.952 21.1673 490.475 20.6902C489.998 20.2131 489.35 19.9451 488.676 19.9451C488.001 19.9451 487.354 20.2131 486.877 20.6902C486.4 21.1673 486.132 21.8143 486.132 22.489V36.0092H472.61Z" fill="white" />
              <path d="M541 411.663H0V413H541V411.663Z" fill="#CACACA" />
              <path d="M452.065 381.17C454.553 382.045 457.224 382.264 459.821 381.806C462.418 381.349 464.854 380.23 466.894 378.558C472.088 374.199 473.715 367.018 475.041 360.371L478.959 340.703L470.755 346.35C464.855 350.413 458.821 354.605 454.736 360.489C450.651 366.373 448.867 374.406 452.15 380.773" fill="#E6E6E6" />
              <path d="M453.332 406.35C452.297 398.827 451.237 391.209 451.962 383.604C452.606 376.851 454.666 370.256 458.861 364.848C461.087 361.982 463.797 359.528 466.867 357.593C467.669 357.088 468.405 358.357 467.607 358.86C462.295 362.217 458.186 367.174 455.873 373.017C453.318 379.514 452.908 386.596 453.348 393.499C453.616 397.672 454.179 401.819 454.747 405.96C454.792 406.148 454.764 406.345 454.669 406.512C454.574 406.68 454.419 406.805 454.235 406.862C454.048 406.914 453.848 406.888 453.678 406.792C453.509 406.696 453.385 406.538 453.333 406.35H453.332Z" fill="#F2F2F2" />
              <path d="M447.478 395.113C446.211 396.609 444.58 397.755 442.741 398.438C440.903 399.121 438.92 399.319 436.982 399.014C432.011 398.171 428.265 394.176 424.914 390.409L415 379.266L422.389 379.804C427.702 380.191 433.15 380.612 437.984 382.85C442.818 385.089 446.984 389.571 447.273 394.89" fill="#E6E6E6" />
              <path d="M455.984 410.651C454.242 406.459 452.486 402.208 449.813 398.505C447.52 395.151 444.319 392.518 440.584 390.917C438.569 390.112 436.43 389.665 434.261 389.596C433.696 389.577 433.699 390.455 434.261 390.473C438.017 390.598 441.635 391.913 444.595 394.227C447.878 396.806 450.231 400.335 452.092 404.028C453.216 406.261 454.179 408.57 455.138 410.878C455.172 410.988 455.246 411.081 455.345 411.138C455.444 411.196 455.561 411.214 455.673 411.188C455.785 411.158 455.881 411.084 455.939 410.984C455.997 410.883 456.014 410.764 455.984 410.651Z" fill="#F2F2F2" />
              <path d="M460.765 394.281C461.832 395.902 463.298 397.222 465.024 398.112C466.749 399.002 468.674 399.433 470.614 399.362C475.6 399.126 479.757 395.646 483.499 392.342L494.566 382.571L487.242 382.221C481.974 381.969 476.571 381.733 471.553 383.357C466.536 384.982 461.909 388.891 460.991 394.083" fill="#E6E6E6" />
              <path d="M450.412 410.675C455.383 401.879 461.151 392.103 471.454 388.979C474.319 388.113 477.323 387.803 480.305 388.065C481.244 388.146 481.01 389.594 480.072 389.513C475.075 389.098 470.087 390.418 465.948 393.25C461.966 395.96 458.865 399.728 456.24 403.725C454.635 406.173 453.193 408.724 451.752 411.273C451.292 412.087 449.947 411.499 450.412 410.675Z" fill="#F2F2F2" />
              <path d="M528.042 396.966C526.122 397.641 524.06 397.81 522.056 397.457C520.052 397.104 518.172 396.241 516.598 394.951C512.59 391.587 511.333 386.045 510.312 380.914L507.288 365.735L513.62 370.095C518.173 373.23 522.829 376.465 525.982 381.006C529.134 385.547 530.511 391.746 527.978 396.659" fill="#E6E6E6" />
              <path d="M526.293 411.373C526.85 407.316 527.423 403.207 527.032 399.108C526.778 395.452 525.488 391.943 523.312 388.994C522.111 387.449 520.65 386.125 518.995 385.082C518.563 384.81 518.166 385.494 518.594 385.765C521.458 387.575 523.674 390.248 524.921 393.399C526.299 396.903 526.52 400.721 526.283 404.443C526.139 406.694 525.835 408.93 525.528 411.162C525.504 411.263 525.519 411.37 525.571 411.46C525.622 411.55 525.705 411.617 525.804 411.648C525.906 411.675 526.013 411.661 526.104 411.609C526.195 411.558 526.262 411.473 526.291 411.372L526.293 411.373Z" fill="#F2F2F2" />
              <circle cx="237" cy="68" r="5" fill="#E5E5E5" />
              <circle cx="237" cy="134" r="5" fill="#E5E5E5" />
              <circle cx="237" cy="205" r="5" fill="#E5E5E5" />
              <path d="M220.592 179.122C219.917 178.057 219.029 177.15 217.986 176.46C216.943 175.77 215.769 175.313 214.54 175.117C213.312 174.922 212.057 174.994 210.858 175.328C209.658 175.661 208.541 176.25 207.581 177.054C207.278 177.31 206.992 177.587 206.728 177.884L172.041 172.736L170.11 146.145C169.963 144.105 169.026 142.208 167.507 140.872C165.987 139.536 164.009 138.87 162.008 139.021C160.007 139.172 158.147 140.127 156.836 141.676C155.526 143.225 154.873 145.241 155.021 147.281C155.024 147.328 155.028 147.376 155.032 147.423L158.413 184.735L158.43 184.818C158.87 186.253 159.752 187.504 160.945 188.387C162.137 189.27 163.578 189.737 165.052 189.719L205.851 189.001C206.009 189.248 206.18 189.486 206.362 189.714C207.152 190.693 208.135 191.492 209.248 192.057C210.361 192.622 211.578 192.941 212.821 192.992C214.063 193.044 215.302 192.828 216.457 192.358C217.611 191.887 218.655 191.173 219.52 190.263C219.696 190.08 219.862 189.89 220.019 189.695C221.195 188.218 221.884 186.401 221.987 184.503C222.089 182.604 221.601 180.721 220.592 179.122Z" fill="#FFB7B7" />
              <path d="M151.001 402L160.487 401.999L165 363L151 363.001L151.001 402Z" fill="#FFB7B7" />
              <path d="M148.001 411L180 410.999V410.59C180 407.251 178.687 404.049 176.352 401.688C174.016 399.327 170.848 398 167.545 398H167.544L148 398.001L148.001 411Z" fill="#2F2E41" />
              <path d="M81 392.832L90.6723 396L108 361.676L93.7238 357L81 392.832Z" fill="#FFB7B7" />
              <path d="M76 400.9L106.205 411L106.335 410.625C107.398 407.569 107.18 404.223 105.727 401.324C104.274 398.426 101.707 396.211 98.5889 395.169L98.5881 395.168L80.14 389L76 400.9Z" fill="#2F2E41" />
              <path d="M139.887 67.2575C139.887 67.2575 149.66 63.9793 155.943 77.0921C162.226 90.2049 172 104.629 172 104.629L166.415 105.94C166.415 105.94 165.019 96.7613 161.528 95.45L162.924 107.251C162.924 107.251 121.038 121.02 102.189 105.94L102.887 101.351C102.887 101.351 100.094 102.006 100.094 105.94L98 103.973C98 103.973 100.094 100.039 106.377 94.7944C110.501 91.3517 111.918 84.8021 112.405 80.7071C112.792 77.2403 114.255 73.9885 116.584 71.4237C120.76 66.8791 128.368 62.0488 139.887 67.2575Z" fill="#2F2E41" />
              <path d="M136 113C126.059 113 118 104.941 118 95C118 85.0589 126.059 77 136 77C145.941 77 154 85.0589 154 95C154 104.941 145.941 113 136 113Z" fill="#FFB7B7" />
              <path d="M159.889 128.097L163.222 127C163.222 127 169.889 129.742 169.889 134.677C169.889 139.613 171 159.355 171 159.355L156 161L159.889 128.097Z" fill="#CBCBCB" />
              <path d="M101.754 235.113C103.091 233.594 103.845 231.639 103.88 229.603C103.916 227.568 103.229 225.587 101.946 224.022L110.992 147.188C111.08 145.376 110.456 143.603 109.257 142.257C108.058 140.911 106.381 140.102 104.595 140.009C102.809 139.916 101.059 140.545 99.7295 141.759C98.4002 142.972 97.5999 144.672 97.5044 146.483C97.5031 146.508 97.502 146.533 97.501 146.558L89.4087 223.474C89.1153 223.772 88.8449 224.093 88.5999 224.434C87.9508 225.344 87.4849 226.375 87.2287 227.468C86.9725 228.561 86.9311 229.695 87.1068 230.804C87.2825 231.913 87.6719 232.977 88.2527 233.933C88.8336 234.89 89.5945 235.721 90.4921 236.379C90.5851 236.447 90.6795 236.514 90.7752 236.578C91.8144 237.275 92.9929 237.731 94.2262 237.912C95.4596 238.093 96.7171 237.994 97.9086 237.624C99.3963 237.167 100.728 236.297 101.754 235.113Z" fill="#FFB7B7" />
              <path d="M110 159L95 157.355C95 157.355 96.1111 137.613 96.1111 132.677C96.1111 127.742 102.778 125 102.778 125L106.111 126.097L110 159Z" fill="#CBCBCB" />
              <path d="M158.257 186.01C158.257 186.01 170.901 209.037 170.901 236.965C170.901 264.893 172 393.032 172 393.032C172 393.032 155.509 400.698 145.614 391.389L136.819 249.56L102.187 388.651C102.187 388.651 85.6959 391.937 78 386.461L92.8421 289.535C92.8421 289.535 98.8889 198.633 115.38 192.061C131.871 185.49 158.257 186.01 158.257 186.01Z" fill="#2F2E41" />
              <path d="M155.347 95C148.938 90.4828 143.751 85.28 140.32 79.091C140.32 79.091 128.56 91.8182 121.373 92.4545C114.186 93.0909 120.719 77.1819 120.719 77.1819L133.786 74L146.2 75.2727L156 81.6364L155.347 95Z" fill="#2F2E41" />
              <path d="M118.308 122.03C118.308 122.03 117.795 121.754 148.46 122.876L161.294 126.428L163 126.9C163 126.9 161.385 159.368 157.077 165.32C152.769 171.273 153.846 174.519 154.923 175.061C156 175.602 158.692 174.519 157.077 177.225C155.462 179.931 153.308 178.307 155.462 179.931C157.615 181.554 158.692 187.506 158.692 187.506L111.308 194C111.308 194 109.692 172.896 105.385 162.074C101.077 151.251 100 146.922 100 146.922L103.231 125.277L118.308 122.03Z" fill="#CBCBCB" />
            </g>
            <defs>
              <clipPath id="clip0_2_477">
                <rect width="541" height="413" fill="white" />
              </clipPath>
            </defs>
          </svg>

        </div>) : (<div data-cy="todo-item-1" className='absolute w-[1000px] h-[440px] left-[220px] top-[346px] '>
          {detail?.todo_items?.map((todo) => {
            return (
              <Items key={todo.id} todo={todo} />
            )
          })}

        </div>)
      }

      {/* SORT */}
      <div className={`${toggle ? 'flex' : 'hidden'} relative w-[235px] h-[260px]`}>
        <div data-cy="sort-parent" className='w-[235px] h-[260px] bg-white shadow-sort border border-solid border-[#E5E5E5] rounded-[6px] absolute left-[810px] top-[214px] sort-animation '>
          
          <div data-cy="sort-latest" className='w-full h-[52px] radius-sort border-sort flex px-5 items-center justify-between'>
            <div className='flex gap-2 items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-sort-descending" width="18" height="18" viewBox="0 0 24 24" strokeWidth="2" stroke="#16ABF8" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <line x1="4" y1="6" x2="13" y2="6"></line>
                <line x1="4" y1="12" x2="11" y2="12"></line>
                <line x1="4" y1="18" x2="11" y2="18"></line>
                <polyline points="15 15 18 18 21 15"></polyline>
                <line x1="18" y1="6" x2="18" y2="18"></line>
              </svg>
              <p className='w-[63px] h-[24px] font-poppins font-normal text-[16px] leading-[24px] text-[#4A4A4A] '>Terbaru</p>
            </div>
            <div className='w-[18px] h-[18px] border-sort flex items-center justify-center'>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width="18" height="18" viewBox="0 0 24 24" strokeWidth="2" stroke="#4A4A4A" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M5 12l5 5l10 -10"></path>
              </svg>
            </div>
          </div>

          <div data-cy="sort-oldest" className='w-full h-[52px] radius-sort border-sort flex px-5 items-center justify-between'>
            <div className='flex gap-2 items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-sort-ascending" width="18" height="18" viewBox="0 0 24 24" strokeWidth="2" stroke="#16ABF8" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <line x1="4" y1="6" x2="11" y2="6"></line>
                <line x1="4" y1="12" x2="11" y2="12"></line>
                <line x1="4" y1="18" x2="13" y2="18"></line>
                <polyline points="15 9 18 6 21 9"></polyline>
                <line x1="18" y1="6" x2="18" y2="18"></line>
              </svg>
              <p className='w-[63px] h-[24px] font-poppins font-normal text-[16px] leading-[24px] text-[#4A4A4A] '>Terlama</p>
            </div>
            <div className='w-[18px] h-[18px] border-sort flex items-center justify-center'>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width="18" height="18" viewBox="0 0 24 24" strokeWidth="2" stroke="#4A4A4A" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M5 12l5 5l10 -10"></path>
              </svg>
            </div>
          </div>

          <div data-cy="sort-az" className='w-full h-[52px] radius-sort border-sort flex px-5 items-center justify-between'>
            <div className='flex gap-2 items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-sort-ascending-letters" width="18" height="18" viewBox="0 0 24 24" strokeWidth="2" stroke="#16ABF8" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M15 10v-5c0 -1.38 .62 -2 2 -2s2 .62 2 2v5m0 -3h-4"></path>
                <path d="M19 21h-4l4 -7h-4"></path>
                <path d="M4 15l3 3l3 -3"></path>
                <path d="M7 6v12"></path>
              </svg>
              <p className='w-[63px] h-[24px] font-poppins font-normal text-[16px] leading-[24px] text-[#4A4A4A] '>A-Z</p>
            </div>
            <div className='w-[18px] h-[18px] border-sort flex items-center justify-center'>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width="18" height="18" viewBox="0 0 24 24" strokeWidth="2" stroke="#4A4A4A" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M5 12l5 5l10 -10"></path>
              </svg>
            </div>
          </div>

          <div data-cy="sort-za" className='w-full h-[52px] radius-sort border-sort flex px-5 items-center justify-between'>
            <div className='flex gap-2 items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-sort-descending-letters" width="18" height="18" viewBox="0 0 24 24" strokeWidth="2" stroke="#16ABF8" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M15 21v-5c0 -1.38 .62 -2 2 -2s2 .62 2 2v5m0 -3h-4"></path>
                <path d="M19 10h-4l4 -7h-4"></path>
                <path d="M4 15l3 3l3 -3"></path>
                <path d="M7 6v12"></path>
              </svg>
              <p className='w-[63px] h-[24px] font-poppins font-normal text-[16px] leading-[24px] text-[#4A4A4A] '>Z-A</p>
            </div>
            <div className='w-[18px] h-[18px] border-sort flex items-center justify-center'>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width="18" height="18" viewBox="0 0 24 24" strokeWidth="2" stroke="#4A4A4A" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M5 12l5 5l10 -10"></path>
              </svg>
            </div>
          </div>

          <div data-cy="sort-unfinished" className='w-full h-[52px] radius-sort border-sort flex px-5 items-center justify-between'>
            <div className='flex gap-2 items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrows-sort" width="18" height="18" viewBox="0 0 24 24" strokeWidth="2" stroke="#16ABF8" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M3 9l4 -4l4 4m-4 -4v14"></path>
                <path d="M21 15l-4 4l-4 -4m4 4v-14"></path>
              </svg>
              <p className='font-poppins font-normal text-[16px] leading-[24px] text-[#4A4A4A] '>Belum Selesai</p>
            </div>
            <div className='w-[18px] h-[18px] border-sort flex items-center justify-center'>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width="18" height="18" viewBox="0 0 24 24" strokeWidth="2" stroke="#4A4A4A" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M5 12l5 5l10 -10"></path>
              </svg>
            </div>
          </div>

        </div>
      </div>

      <ModalAddList onClose={handleClose} visible={modal} />

    </div >
  )
}

export default ActivityDetail