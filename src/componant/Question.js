import React, { useState, useEffect } from "react";

const Question = (props) => {
  const [mark, setMark] = useState(0);
  const [quesObj, setQuesObj] = useState(
    localStorage.getItem("questions")
      ? JSON.parse(localStorage.getItem("questions"))
      : []
  );
 
  const onNext = () => {
    if (props.quesNo < 10) {
      props.onNextclk(1);
    } else {

    }
  };
  const onSkip = () => {
    if (props.quesNo < 10) {
      props.onNextclk(1);
    } else {
      
    }
  };

  const setAns = (e) => {
    let ans = quesObj[props.quesNo].correct_answer;
    let answers = Object.keys(quesObj[props.quesNo].answers);
  
    answers.forEach((expAns) => {
      //  console.log(expAns);
      if (expAns === ans) {
        props.setMark(mark + 1);
        setMark(mark + 1);
      }
    });
  };
  return (
    <div className="m-6 flex flex-col justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 h-screen">
      <h1 className="font-bold font-mono text-slate-800 text-4xl p-4">
        Question No. <span>{props.quesNo + 1}</span>
      </h1>
      <div className=" p-4 flex flex-col justify-center items-center bg-gradient-to-r from-purple-200 to-pink-300 rounded-xl bg-transparent-bg-pink-700 shadow-lg shadow-cyan-800/50">
        <p className="font-bold font-mono py-3 px-3">
          {quesObj[props.quesNo].question}
        </p>
        <ol>
          {Object.values(quesObj[props.quesNo].answers).map((options, idx) => {
            if (options != null)
              return (
                <div className="flex gap-5 font-mono">
                  <span>{idx + 1}</span>
                  <li>{options}</li>
                  <div>
                    <input
                      className="inputs"
                      type="checkbox"
                      onChange={(e) => setAns(e)}
                      value={options}
                     
                    ></input>
                  </div>
                </div>
              );
          })}
        </ol>

        <div className="flex gap-7 py-8">
          <button
            className="bg-green-400 hover:bg-pink-300  font-mono  rounded-lg  font-bold px-8 py-2 shadow-lg shadow-cyan-500/50"
            onClick={onNext}
          >
            Next
          </button>
          <button
            className="bg-blue-500 hover:bg-pink-300  font-mono  rounded-lg  font-bold px-8 py-2  shadow-lg shadow-cyan-500/50"
            onClick={onSkip}
          >
            Skip
          </button>
        </div>
        <h1>{}</h1>
      </div>
    </div>
  );
};

export default Question;
