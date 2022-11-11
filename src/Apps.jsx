import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './container/Navbar'
import Activity from './container/Activity';
import ActivityDetail from './container/ActivityDetail';
import EditTitle from './container/EditTitle';
import ModalEditItem from './container/ModalEditItem';
// import { useState } from 'react'

const Apps = () => {

  return (
    <BrowserRouter>

      <div className='max-w-[1440px] max-h-[1024px] bg-[#F4F4F4] mx-auto relative' data-cy="dashboard">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Activity />} />
          <Route path="/activity-groups/:id" element={<ActivityDetail />} />
          <Route path="/detail/:id" element={<EditTitle />} />
          <Route path="/todo-items/:id" element={<ModalEditItem />} />
        </Routes>
    </div>
        

    </BrowserRouter>
  )
}

export default Apps