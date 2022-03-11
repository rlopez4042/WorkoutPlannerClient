

function ExerciseDetail({ workout }) {

    let exerciseList = []
    if (workout) {
        exerciseList = workout.exercises.map((exercise, index) => {
            return (
                <div className='exercise card-element' key={index}>
                    <li className='card-subheader'>Exercise {index + 1}: {exercise.name}</li>
                    <li className='card-text'>Description: {exercise.description}</li>
                    <li className='card-text'>Reps: {exercise.reps}</li>
                    <li className='card-text'>Sets: {exercise.sets}</li>
                </div>
            )

            //     <div className='card-body'>
            //     {workout.exercises.map((exercise, i) => {
            //       return (
            //         <div className='exercise card-element' key={i}>
            //           <sec className="card-subheader">Exercise {i + 1}: {exercise.name}</sec>
            //           <ul>
            //             <li><span className='card-text'>Description: </span> {exercise.description}</li>
            //             <li><span className='card-text'>Reps: </span> {exercise.reps}</li>
            //             <li><span className='card-text'>Sets: </span> {exercise.sets}</li>
            //           </ul>
            //         </div>
            //       )
            //     })}
            //   </div>

        })
        console.log("exerciseList: ", exerciseList)
        return (
            <ul className='card-body'>{exerciseList}</ul>
        )
    }
    else {
        console.log("you are here.")
        return (
            <div>Loading...</div>
        )
    }


}

export default ExerciseDetail;