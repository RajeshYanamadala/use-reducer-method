import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment_age":
      return {
        name: state.name,
        age: state.age + 1,
      };
    case "changeName":
      return {
        name: action.nextName,
        age: state.age,
      };
    default:
      return state;
  }
}

export default function AgeCounter() {
  const [state, disptch] = useReducer(reducer, { name: "Raju", age: 28 });

  const handleIncrement = () => {
    disptch({ type: "increment_age" });
  };

  const handleChange = (e) => {
    disptch({
      type: "changeName",
      nextName: e.target.value,
    });
  };

  return (
    <div>
      <h1>Example for useReducer method</h1>
      <label>Edit name</label>
      <br />
      <input type="text" value={state.name} onChange={handleChange} />
      <p>
        {state.name} you are {state.age}!
      </p>
      <div>
        <button onClick={handleIncrement}>increment Age</button>
      </div>
    </div>
  );
}
