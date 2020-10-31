import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [cardNum, setNum] = useState();
  let [isValid, setValue] = useState();
  let [msg, setMsg] = useState();
  const handleClick = () => {
    let ans = list(cardNum);
    isValid = ans;
    isValid ? setMsg("Yes It is Valid ") : setMsg("NO It is Not");

    // console.log(isValid);
  };
  const list = (number) => {
    let st = (number + "").split("");
    let s1 = 0;
    let s2 = 0;
    let newT = []; //Array to hold alternate num

    st.map((item, i) => {
      if (i % 2 !== 0) {
        newT.push(parseInt(item));
      } else {
        s1 = s1 + parseInt(item);
      }
    });

    let farr = newT.map((item) => {
      let newNum = getSingle(item * 2);
      s2 = s2 + newNum;
      return newNum;
    });

    return (s1 + s2) % 10 === 0 ? true : false;
  };

  const getSingle = (num) => {
    let str = num + "";
    if (str.length === 1) {
      return parseInt(str);
    } else {
      let sum = parseInt(str[0]) + parseInt(str[1]);
      return sum;
    }
  };
  return (
    <div className="App">
      <h1>Welcome To Credit Card Checker</h1>

      <input
        type="number"
        value={cardNum}
        onChange={(e) => {
          setNum(e.target.value);
          setMsg("");
          setValue("");
        }}
      />
      <h2>{cardNum}</h2>
      <button onClick={() => handleClick()}>Check</button>

      <h2>{msg}</h2>
    </div>
  );
}
