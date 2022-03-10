import {useState} from 'react'

function Exercise() {

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

    const handleExSubmit = event => {
        event.preventDefault()
        console.log("Exercise: ", exercise)
        fetch("http://localhost:4000/workout/addex/6228461e10fc3c52455d0903", {
            headers: {
              'Content-Type': 'application/json'
            },
            method: 'PUT',
            body: JSON.stringify(exercise)
          })
            .then(response => response.json())
            .then(data => {
                setWorkout(data.workout)
                console.log("workout: ", workout) ///// item I just added isn't in the array
                console.log("data.workout: ", data.workout) ///// ...but it DOES show up here
            })
    }

    console.log("workout-2: ", workout) // but here, the newly added item is shown.
    // let exerciseDetail = []
    // if(workout.name) {
    //     exerciseDetail = workout.map((exercise, index) => {
    //         <>
    //             <li>exercise.name</li>
    //             <li>exercise.description</li>
    //             <li>exercise.reps</li>
    //             <li>exercise.sets</li>
    //         </>
    
    //     })
    //     console.log("exerciseDetail: ", exerciseDetail)
    // }
    // else {
    //     exerciseDetail = null
    //     console.log("you are here.")
    // } 

    return (
        <div className='exercise'>
        <>
            <form onSubmit={handleExSubmit}>
                <input onChange={handleChange} value={exercises.name} name="name" placeholder="Exercise Name"/>
                <input onChange={handleChange} value={exercises.description} name="description" placeholder="Exercise Description"/>
                <input onChange={handleChange} value={exercises.reps} name="reps" placeholder="Number of reps"/>
                <input onChange={handleChange} value={exercises.sets} name="sets" placeholder="Number of sets"/>
                <button type="Submit">Add Exercise</button>
            </form>
            <div> 
                <ul>
                    {/* {exerciseDetail} */}
                </ul>
            </div>
        </>
        </div>
    );
}

export default Exercise;