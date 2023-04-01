import React from "react";
import { useState } from "react";
import styled from "styled-components";

function HomeHeader() {
  const [num, setNum] = useState(1);
  const data = [
    {
      id: 1,
      image: "/img/five-star-home1.jpg",
      title: "Prosper in tne volatile market funding 1.",
      text: "Without consulting, plans stay as plan.",
      btnText: "View services",
      btnImg: "",
    },
    {
      id: 2,
      image: "/img/IMG-20230306-WA0008.jpg",
      title: "Prosper in tne volatile market funding 2.",
      text: "Without consulting, plans stay as plan.",
      btnText: "View services",
      btnImg: "",
    },
    {
      id: 3,
      image: "/img/download (1).jpg",
      title: "Prosper in tne volatile market funding 3.",
      text: "Without consulting, plans stay as plan.",
      btnText: "View services",
      btnImg: "",
    },
  ];

  const filteredData = data.filter(item => item.id === num);
  
  const selectImage = () => {
    num === 3 ? setNum(1) : setNum(num + 1)
  }
  // setInterval(() => {
  //   selectImage(num)
  // }, 5000);

  setTimeout(() => {
    selectImage(num)
  }, 5000);
  
  return (
    <Wrapper className="header">
      {filteredData.map(item => (
        <Img src={item.image} className="head"/>
      ))}
      <h1>{num}</h1>
    </Wrapper>
  );
}

const Wrapper = styled.div`
width: 100%;
height: 100vh;
max-width: 1440px;
margin: 0% auto;
`

const Img = styled.img`
width: 100%;
height: 100vh;
object-fit: cover;
background-repeat: no-repeat;
transition: 2s all ease;
`

export default HomeHeader;
