import React, { useState, useEffect } from "react";
import axios from "axios";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [theme, settheme] = useState("Dark");
  const [status, setStaus] = useState(false);
  // case 1 Re-Render
  //   useEffect(() => {
  //     console.log("rerender");
  //   });
  // case 2 onLoad
  useEffect(() => {
      console.log("onload");
      fetchApi();
  }, []);
  // case 3 onUpdate
  useEffect(() => {
    console.log("rerender counter " + count);
  }, [count]);

  // case 4 on update
  // useEffect(() => {
  //   console.log("rerender counter ");
  // }, []);

    const fetchApi = async () => {
        const apiKey = "LKRY6DZPMRlnTs5Hs1t1LoaFiK992LBIsA0mO6PP";
        const url =
          `https://quizapi.io/api/v1/questions?apiKey=${apiKey}&limit=10`;
  
 
    try {
      const response = await axios.get(url);
      console.log(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  // ... example counters
  const increaseCounter = () => {
    setCount(count + 1);
  };
  const updateTheme = () => {
    theme == "Dark" ? settheme("White") : settheme("Dark");
  };

  const updateStatus = () => {
    status ? setStaus(false) : setStaus(true);
  };

  return (
    <div>
      <div>
        <p>{count}</p>
        <button onClick={increaseCounter} className="p-2 bg-red-400">
          Increase Counter
        </button>
      </div>
      <hr></hr>
      <div>
        <p>{theme}</p>
        <button onClick={updateTheme} className="p-2 bg-red-400">
          Theme Counter
        </button>
      </div>
      <hr></hr>
      <div>
        <p>{status ? "pass" : "fail"}</p>
        <button onClick={updateStatus} className="p-2 bg-red-400">
          Status Counter
        </button>
      </div>
      <hr></hr>
    </div>
  );
};

export default UseEffect;
