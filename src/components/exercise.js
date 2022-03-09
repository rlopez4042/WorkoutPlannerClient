import {useState} from 'react'


function Exercise() {

    const [exercises, setExercises] = useState([])
    const [exercise, setExercise] = useState({})
    //name:"", description:"", reps:0, sets:0

    const handleChange = (event) => {
        event.persist()
        console.log("exercise: ", exercise)
        setExercise(prevExercise => {
            const editedExercise = {...prevExercise, [event.target.name]: event.target.value}
            return editedExercise
        })
    }

    const handleExSubmit = event => {
        event.preventDefault()
        setExercises(prevExercises => {
            const editedExercises = {...prevExercises, [event.target.name]: event.target.value}
            return editedExercises
        })
        console.log("Exercises: ", exercises)
      
    }

    return (
        <div className='exercise'>
        <>
            <form onSubmit={handleExSubmit}>
                <input onChange={handleChange} value={exercises.name} name="name" placeholder="Exercise Name"/>
                <input onChange={handleChange} value={exercises.description} name="description" placeholder="Exercise Description"/>
                <input onChange={handleChange} value={exercises.reps} name="Number of reps" placeholder="Number of reps"/>
                <input onChange={handleChange} value={exercises.sets} name="Number of sets" placeholder="Number of sets"/>
                <button type="Submit">Add Exercise</button>
            </form>
        </>
        </div>
    );
}

export default Exercise;