

function ExerciseDetail({workout}) {

    let exerciseList = []
    if(workout) {
        exerciseList = workout.exercises.map((exercise, index) => {
        return (
            <>
                <li>{exercise.name}</li>
                <li>{exercise.description}</li>
                <li>{exercise.reps}</li>
                <li>{exercise.sets}</li>
            </>
        )})
        console.log("exerciseList: ", exerciseList) //returns one 'undefined' for every item in array (number of objects in exerciseList is equal to number of items in workout.exercises array, but they all show 'undefined' in console and therefore don't render )
        return (
            <ul>{exerciseList}</ul>
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