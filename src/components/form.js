import React from 'react';
import {useState} from 'react'
import Exercise from './Exercise'

function Form() {

  const [workouts, setWorkouts] = useState([])
  const [workout, setWorkout] = useState({})
  const [toggleDisplay, setToggleDisplay] = useState(true)
  const [workoutToEdit, setWorkoutToEdit] = useState("")

    const handleClick = () => {
      fetch("http://localhost:4000/workout")
        .then(response => response.json())
        .then(data => setWorkouts(data.Workout))
    }
    console.log("workouts: ", workouts)

    const handleChange = (event) => {
        event.persist()
        //console.log("workout: ", workout)
        setWorkout(prevWorkout =>{
          const editedWorkout = {...prevWorkout, [event.target.name]:
          event.target.value}
          return editedWorkout
        })
      };
      
      const handleSubmit = event => {
        event.preventDefault()
        //console.log("workout: ", workout)
        fetch("http://localhost:4000/workout", {
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify(workout)
        })
          .then(() => fetch("http://localhost:4000/workout"))
          .then(response => response.json())
          .then(data => setWorkouts(data.Workout))
          .then(() => setWorkout({name: "", duration: "", exercises:[{name:"", description:"", sets:"", reps:""}]}))
      }

    function editWorkout(event) {
      //console.log("event: ", event.target.value)
      setWorkoutToEdit(event.target.value)
    }  

    console.log("workoutToEdit: ", workoutToEdit)

    const workoutList = workouts.map((workout, index) => {
      return (
        <div key={index}>
          <h4>{workout.name}</h4>
          <p>{workout.duration}</p>
          <button onClick={editWorkout} value={workout._id}>Edit Workout</button>
          {workout.exercises.map((exercise, i) => {
            return (
            <div key={i}>
              <h5>{exercise.name}</h5>
              <ul>
                <li>{exercise.description}</li>
                <li>{exercise.reps}</li>
                <li>{exercise.sets}</li>
              </ul>
            </div>
          )})}
          </div>
      )
    }) 

    return (
        <>
    <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={workout.name} name="name" placeholder="Workout Name"/>
        <input onChange={handleChange} value={workout.duration} name="duration" placeholder="Estimated Time"/>
        <button type="Submit">Add Workout</button>
      </form>
      {/* { toggleDisplay ? ( <Exercise /> ) : null  } */}
      <Exercise workoutId={workoutToEdit}/>
      <button onClick={handleClick}>View Workouts</button> 
      {workoutList}
    </>
    );
}

export default Form;
