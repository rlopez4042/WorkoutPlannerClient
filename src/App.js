import React, { useState, useEffect } from 'react';
import Form from './components/Form'
import { Route, Link, Routes, Navigate } from 'react-router-dom';
import Workout from './components/Workout'
import Exercise from './components/Exercise';



function App() {

  return (
    <div className='App'>
      <main>
        <Routes>
        <Route path='/' element={<Workout/>} />
        <Route path="/exercise" element={<Exercise />} />
      <h1>Workout Planner</h1>
      < Form/>
      </Routes>
      </main>
    </div>
  )


}

export default App;
