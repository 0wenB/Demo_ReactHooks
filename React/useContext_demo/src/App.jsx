import PersonA from "./components/PersonA";
import { createContext } from "react";

export const Context = createContext(null);
function App() {
  const information = "Eating chocolate ease away the stress of coding";
  const secret = "I eat chocolate everyday";

  return (
    <>
      <div className="container p-5">
        <h1 className="bg-primary-subtle p-2 ">UseContext Demo</h1>
        <p>🗣️: {information}</p>
        <Context.Provider value={{ information, secret }}>
          <PersonA information={information} />
        </Context.Provider>
      </div>
    </>
  );
}

export default App;
