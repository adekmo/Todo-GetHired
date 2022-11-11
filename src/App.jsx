import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Activity, Navbar, ActivityDetail, EditTitle } from './components'
// import { useState } from 'react'

const App = () => {

  return (
    <BrowserRouter>

      <div className='max-w-[1440px] max-h-[1024px] bg-[#F4F4F4] mx-auto relative' data-cy="dashboard">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Activity />} />
          <Route path="/activity-groups/:id" element={<ActivityDetail />} />
          <Route path="/detail/:id" element={<EditTitle />} />
        </Routes>
    </div>
        

    </BrowserRouter>
  )
}

export default App