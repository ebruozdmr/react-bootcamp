import React, { useCallback, useEffect, useMemo, useState } from "react";

const IncrementComp = ({ increment }) => {
  return (
    <>
      <button onClick={increment}>INCREASE</button>
    </>
  );
};

const ExternalComp = React.memo(() => {
  console.log("rendering!!!");
});

const UseMemoUsage = () => {
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState("");

  //useEffect gives the current text value
  useEffect(() => {
    console.log(text);
  }, [text]);

  //A function with large data
  //   const largeDateFn = () => {
  //     [...new Array(100)].forEach((item) => {
  //       console.log(item);
  //     });

  //     return counter * 2;
  //   };

  //Inside of useMemo runs when page loaded at first so CPU consumption is not effected.
  const largeData = useMemo(() => {
    //Result of this process memorised as a value, not a function.
    [...new Array(1000)].forEach((item) => console.log(item));

    return counter * 2;
  }, []);

  const increment = useCallback(() => {
    setCounter(counter + 1);
  }, [counter]);

  return (
    <>
      <div>
        {counter}
        <br />
      </div>
      <div>
        <input
          type="text"
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></input>
        <br />
        {largeData}
      </div>
      <IncrementComp increment={increment}></IncrementComp>
      <ExternalComp></ExternalComp>
    </>
  );
};

export default UseMemoUsage;
