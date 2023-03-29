import React from "react";
import { useState } from "react";

function HomeHeader() {
  const data = [
    {
      id: 1,
      image: "",
      title: "Prosper in tne volatile market funding 1.",
      text: "Without consulting, plans stay as plan.",
      btnText: "View services",
      btnImg: "",
    },
    {
      id: 2,
      image: "",
      title: "Prosper in tne volatile market funding 2.",
      text: "Without consulting, plans stay as plan.",
      btnText: "View services",
      btnImg: "",
    },
    {
      id: 3,
      image: "",
      title: "Prosper in tne volatile market funding 3.",
      text: "Without consulting, plans stay as plan.",
      btnText: "View services",
      btnImg: "",
    },
  ];
  const [num, setNum] = useState(1);
  
  setInterval(() => {
    num >= 3 ? setNum(1) : setNum(num + 1)
  }, 1000);
  const filteredData = data.filter(item => item.id === num);
  return (
    <div className="header">
      {/* {filteredData.map(item => (
        <h1 className="head">{item.title}</h1>
      ))}
      <h1>{num}</h1> */}
    </div>
  );
}

export default HomeHeader;
