import { useEffect, useState } from "react";
import Cleanup from "./Cleanup";
function App() {
  const [show, setShow] = useState(false);
  // const [others, setOthers] = useState(false);
  useEffect(() => {
    console.log("I am trigerred");
  }, []);

  return (
    <>
      <div className="container p-5">
        <div className="mb-3">
          <h1 className="bg-primary-subtle p-2 ">UseEffect Demo</h1>
          <button onClick={() => setShow(!show)}>
            {show ? "Hide Secret" : "Show Secret"}
          </button>
          {/* <button onClick={() => setOthers(!others)}>Others</button> */}
          <h1>{show ? "I eat chocolate everyday" : ""}</h1>
        </div>
        {/* This is for cleanup */}
        {show ? <Cleanup info={{ show, setShow }} /> : ""}
      </div>
    </>
  );
}

export default App;
