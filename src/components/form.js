import React from 'react';
import {useState} from 'react'
import ReactDOM from 'react-dom';

function Form() {

  const [workouts, setWorkouts] = useState([])
  const [workout, setWorkout] = useState({artist: "", album: ""})

    const handleClick = () => {
      fetch("http://localhost:4000/workout")
        .then(response => response.json())
        .then(data => setWorkout(data.Workout))
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

        </div>
      )
    })

    return (
        <>
    <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={workout.name} name="artist" placeholder="Artist"/>
        <input onChange={handleChange} value={workout.duration} name="album" placeholder="Album"/>
        <button type="Submit">Add Vinyl</button>
      </form>

      <button onClick={handleClick}>View Vinyls</button> 
      <ul>{workoutList}</ul>
    </>
    );
}

export default Form;