import { useRef, useState } from "react";

function App() {
  const [todos, setTodos] = useState(["React Demo", "JWT Demo"]);
  const [input, setInput] = useState(null);
  const inputRef = useRef(null);
  const clickButton = () => {
    setTodos([...todos, input]);
    inputRef.current.value = "";
  };

  return (
    <>
      <div className="container p-5">
        <h1 className="bg-primary-subtle p-2 ">UseRef Demo</h1>
        <input
          ref={inputRef}
          type="text"
          name="todo"
          className="form-control mt-3"
          id="todosInput"
          aria-describedby="emailHelp"
          placeholder="Enter task ..."
          onChange={(e) => {
            const newInput = e.target.value;
            setInput(newInput);
          }}
        />
        <button onClick={clickButton} className="btn btn-primary mt-3">
          Submit
        </button>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Task</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((el, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{el}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
