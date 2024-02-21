import PersonB from "./PersonB";

const PersonA = ({ information }) => {
  return (
    <>
      <div className="my-5">
        <h1>I am Person A 👨‍⚕️</h1>
        <p>
          I am passing the information to <span className="fw-bold">B</span>
        </p>
        <p>⬇️</p>
      </div>
      <PersonB information={information} />
    </>
  );
};

export default PersonA;
