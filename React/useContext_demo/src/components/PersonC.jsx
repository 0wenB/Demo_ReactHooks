import { useContext } from "react";
import { Context } from "../App";
const PersonC = () => {
  const contextInfo = useContext(Context);
  console.log(contextInfo);
  return (
    <>
      <div className="my-3">
        <h1>I am Person C 🧑‍⚕️</h1>
        <p>
          I received information from <span className="fw-bold">B</span>
          <br />
          The information is:{" "}
          <span className="bg-primary-subtle">{contextInfo.information}</span>
        </p>
      </div>
    </>
  );
};

export default PersonC;
