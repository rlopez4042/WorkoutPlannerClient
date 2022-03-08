import React from 'react';
import {useState} from 'react'
import ReactDOM from 'react-dom';

function Form() {

  const [workouts, setWorkouts] = useState([])
  const [workout, setWorkout] = useState({artist: "", album: ""})

    const handleClick = () => {
      fetch("http://localhost:4000/workout")
        .then(response => response.json())
        .then(data => setWorkouts(data.Workout))
    }
  
    const handleChange = (event) => {
        event.persist()
        setWorkout(prevWorkout =>{
          const editedWorkout = {...prevWorkout, [event.target.name]:
          event.target.value}
          return editedWorkout
        })
      };
      
      const handleSubmit = event => {
        event.preventDefault()
        console.log(workout)
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
    const workoutList = workouts.map(workout => {
      return (
        <div>
          <p>{workout.name}</p>
          <p>{workout.duration}</p>
          </div>
      )
    })

    return (
        <>
    <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={workout.name} name="Workout Name" placeholder="Workout Name"/>
        <input onChange={handleChange} value={workout.duration} name="Estimated Time" placeholder="Estimated Time"/>
        {/* <input onChange={handleChange} value={workout.exercises.name} name="Exercise Name" placeholder="Exercise Name"/> */}
        {/* <input onChange={handleChange} value={workout.exercises.description} name="Exercise Description" placeholder="Exercise Description"/>
        <input onChange={handleChange} value={workout.exercises.sets} name="Number of sets" placeholder="Number of sets"/>
        <input onChange={handleChange} value={workout.exercises.reps} name="Number of reps" placeholder="Number of reps"/> */}

        <button type="Submit">Add Vinyl</button>
      </form>
      <button onClick={handleClick}>View Workouts</button> 
      <ul>{workoutList}</ul>
    </>
    );
}

export default Form;