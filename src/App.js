import { useState } from "react";

function App() {
  const [excercises, setExcercises] = useState([]);
  const [excercise, setExcercise] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    setExcercises([...excercises, excercise])
    setExcercise('');
  }

  return (
    <div>
      Training App
      <form onSubmit={submitHandler}>
        <label>Excercise: </label>
        <input value={excercise} onChange={(e) => setExcercise(e.target.value)}/>
        <button>Add</button>
      </form>
      {excercises.map(excercise => {
        return <div>{excercise}</div>
      })}
    </div>
  );
}

export default App;
