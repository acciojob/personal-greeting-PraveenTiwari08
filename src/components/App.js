import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [intfield, setintfield] = useState("");
  const change = (event) => {
    setintfield(event.target.value);
  };
  return (
    <div>
      {
        <>
          <h6>Enter your Name</h6>
          <input onChange={change} />
          <p>{`Hello${intfield}`}</p>
        </>
      }
    </div>
  );
};

export default App;
