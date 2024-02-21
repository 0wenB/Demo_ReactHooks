import PersonC from "./PersonC";

const PersonB = ({ information }) => {
  return (
    <>
      <div className="my-5">
        <h1>I am Person B 👩‍⚕️</h1>
        <p>
          I am passing the information to <span className="fw-bold">C</span>
        </p>
        <p>⬇️</p>
      </div>
      <PersonC information={information} />
    </>
  );
};

export default PersonB;
