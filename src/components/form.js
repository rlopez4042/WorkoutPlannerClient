import React from 'react';
import ReactDOM from 'react-dom';

function Form() {

    const [workout, setWorkout] = useState({})
    const [exercise, setExercise] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleSubmit();
        setWorkout("");
      };

      const handleChange = (e) => {
        const ingredient = e.target.value;
        setIngredient(ingredient);
      };

    return (
        <>
      <form onSubmit={handleSubmit}>
        <label htmlFor=""></label>
        <input
          =""
          type="text"
          value={}
          onChange={handleChange}
        />
        <input type="submit" value="" />
      </form>
    </>
    );
}

export default Form;