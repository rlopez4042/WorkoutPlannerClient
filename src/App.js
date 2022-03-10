import React, { useState, useEffect } from 'react';
import Form from './components/form'
import { Route, Link, Routes, Navigate } from 'react-router-dom';
import Workout from './components/Workout'
import Exercise from './components/exercise';





function App() {

  return (
    <div className='App'>
      <main>
        <Routes>
        {/* <Route path='/' element={<Workout/>} /> */}
        {/* <Route path="/exercise" element={<Exercise />} /> */}
      
      </Routes>
      < Form/>
      </main>
    </div>
  )


}

export default App;
