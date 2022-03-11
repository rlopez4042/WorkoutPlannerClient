import {useState} from 'react'
import ExerciseDetail from './ExerciseDetail'

function Exercise({workoutToEdit}) {

    const [exercises, setExercises] = useState([])
    const [exercise, setExercise] = useState({})
    const [workout, setWorkout] = useState({})
    //name:"", description:"", reps:0, sets:0

    const handleChange = (event) => {
        event.persist()
        setExercise(prevExercise => {
            const editedExercise = {...prevExercise, [event.target.name]: event.target.value}
            return editedExercise
        })
    }

    // fetch("http://localhost:4000/workout/addex/6229ac4a373b51490b28cac5", {

    const handleExSubmit = event => { 
        event.preventDefault()
        console.log(workoutToEdit)
        console.log(`http://localhost:4000/workout/addex/${workoutToEdit}`)
        console.log("Exercise: ", exercise)
        fetch(`http://localhost:4000/workout/addex/${workoutToEdit}`, {
            headers: {
              'Content-Type': 'application/json'
            },
            method: 'PUT',
            body: JSON.stringify(exercise)
          })
            .then(response => response.json())
            .then(data => {
                setWorkout(data.workout)
                console.log("workout: ", workout) 
                console.log("data.workout: ", data.workout) 
            })
    }

    console.log("workout-2: ", workout) // but here, the newly added item is shown.

    return (
        <div className='exercise'>
        <>
            <form onSubmit={handleExSubmit}>
                <input onChange={handleChange} value={exercises.name} name="name" placeholder="Exercise Name"/>
                <input onChange={handleChange} value={exercises.description} name="description" placeholder="Exercise Description"/>
                <input onChange={handleChange} value={exercises.reps} name="reps" placeholder="Number of reps"/>
                <input onChange={handleChange} value={exercises.sets} name="sets" placeholder="Number of sets"/>
                <button className='btn' type="Submit">Add Exercise</button >
            </form>
            <div className='card card-shadow '> 
                <ul className=''>
                    {workout.name ? ( <ExerciseDetail workout={workout} /> ) : null }
                </ul>
            </div>
        </>
        </div>
    );
}

export default Exercise;