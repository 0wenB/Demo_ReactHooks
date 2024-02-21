import { useEffect } from "react";

function Cleanup({ info }) {
  useEffect(() => {
    let i = 0;
    let stopwatch = setInterval(() => {
      console.log(`Hello-${i}`);
      i++;
    }, 1000);
    //Continue:
    return () => {
      clearInterval(stopwatch);
    };
  }, [info.show]);
  return (
    <>
      <button onClick={() => info.setShow(!info.show)}>Stop Stopwatch</button>
    </>
  );
}

export default Cleanup;
