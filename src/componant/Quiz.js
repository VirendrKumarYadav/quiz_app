import React, { useState, useEffect } from "react";
import axios from "axios";
import Question from "./Question";

const Quiz = () => {
  const [ques, setQues] = useState(
    localStorage.getItem("questions")
      ? JSON.parse(localStorage.getItem("questions"))
      : []
  );
  const [countQues, setCount] = useState(0);
  const [mark, setMark] = useState(0);
  useEffect(() => {
    console.log("onload");
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const apiKey = "LKRY6DZPMRlnTs5Hs1t1LoaFiK992LBIsA0mO6PP";
    const url = `https://quizapi.io/api/v1/questions?apiKey=${apiKey}&limit=10`;

    try {
      const response = await axios.get(url);
      // console.log(response.data);
      localStorage.setItem("questions", JSON.stringify(response.data));
    } catch (e) {
      console.error(e);
    }
  };
    const onNextButtonClk = (arg) => {
      setCount(countQues+arg);
  };

  const onsetMark = (ma) => {
     setMark(ma)
  }
  return (
    <div className=" max-h-screen max-w-screen">
      {console.log(countQues)}
      {countQues < 10 ? (
        <Question
          quesNo={countQues}
          mark={mark}
          onNextclk={onNextButtonClk}
          setMark={onsetMark}
        />
      ) : (
        <div className="h-screen flex justify-center items-center flex-col gap-5">
          <h1 className="font-mono text-4xl"> You Scored !</h1>
          <p className="font-mono text-4xl">{mark}</p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
