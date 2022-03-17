import React from 'react';
import { useState } from 'react'
import Exercise from './exercise'
import apiUrl from '../apiUrl'

function Form() {

  const [workouts, setWorkouts] = useState([])
  const [workout, setWorkout] = useState({})
  const [workoutToEdit, setWorkoutToEdit] = useState("")
  const [workoutToDelete, setWorkoutToDelete] = useState("")

  const handleClick = () => {
    fetch(`${apiUrl}/workout`)
      .then(response => response.json())
      .then(data => setWorkouts(data.Workout))
  }
  console.log("workouts: ", workouts)

  const handleChange = (event) => {
    event.persist()
    //console.log("workout: ", workout)
    setWorkout(prevWorkout => {
      const editedWorkout = {
        ...prevWorkout, [event.target.name]:
          event.target.value
      }
      return editedWorkout
    })
  };

  const handleSubmit = event => {
    event.preventDefault()
    fetch(`${apiUrl}/workout`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(workout)
    })
      .then(() => fetch(`${apiUrl}/workout`))
      .then(response => response.json())
      .then(data => setWorkouts(data.Workout))
      .then(() => setWorkout({ name: "", duration: "", exercises: [{ name: "", description: "", sets: "", reps: "" }] }))
  }

  function editWorkout(event) {
    setWorkoutToEdit(event.target.value)
  }

  function deleteWorkout(event) {
    setWorkoutToDelete(event.target.value)
    fetch(`${apiUrl}/${event.target.value}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'DELETE',
    })
      .then(response => response.json())
  }

 

  const workoutList = workouts.map((workout, index) => {
    return (
      <div className=".results-grid" key={index} >
        <div className='card card-shadow'>
          <div className='card-header'>
            <div className='card-title'>{workout.name}</div>
            <p className='card-subtitle'>Duration: {workout.duration}</p>
          </div>
          <div className='card-body'>
            {workout.exercises.map((exercise, i) => {
              return (
                <div className='exercise card-element' key={i}>
                  <sec className="card-subheader">Exercise {i + 1}: {exercise.name}</sec>
                  <ul>
                    <li><span className='card-text'>Description: </span> {exercise.description}</li>
                    <li><span className='card-text'>Reps: </span> {exercise.reps}</li>
                    <li><span className='card-text'>Sets: </span> {exercise.sets}</li>
                  </ul>
                </div>
              )
            })}
          </div>
          <div className='card-footer'>
            <button className='btn' onClick={editWorkout} value={workout._id}>Edit Workout</button>
            <button className='btn' onClick={deleteWorkout} value={workout._id}>Delete Workout</button>
          </div>
        </div>
      </div>
    )
  })

  return (
    <>
      <div className='title'>Workout Planner</div>
      <div className='card card-shadow form'>
        <form onSubmit={handleSubmit}>
          <input className='form-input' onChange={handleChange} value={workout.name} name="name" placeholder="Workout Name" />
          <input className='form-input' onChange={handleChange} value={workout.duration} name="duration" placeholder="Estimated Time" />
          <button className='btn' type="Submit">Add Workout</button>
        </form>
        {/* { toggleDisplay ? ( <Exercise /> ) : null  } */}
        <Exercise workoutToEdit={workoutToEdit} />
        <button className='btn' onClick={handleClick}>View Workouts</button>
      </div>
      {workoutList}
    </>
  );
}

export default Form;