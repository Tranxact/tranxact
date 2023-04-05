import React from "react";
import { useState } from "react";
import styled from "styled-components";

function HomeHeader() {
  const [num, setNum] = useState(1);
  const data = [
    {
      id: 1,
      image: "/img/IMG-20230306-WA0010.jpg",
      title: <h2 className="text">Welcome To TranXact Real Estate.</h2>,
      text: <p className="textp">Without consulting, plans stay as plan.</p>,
      btnText: "View services",
      btnImg: <Img src="./img/logo(5).JPG" alt="header logo image" className="img"/>,
    },
    {
      id: 2,
      image: "/img/IMG-20230306-WA0011.jpg",
      title: <h2 className="text" style={{color:"rgb(134, 134, 240)"}}>Come get a home of your dreams at tranXact.</h2>,
      text: <p className="textp" style={{color:"rgb(134, 134, 240)"}}>Without consulting, plans stay as plan.</p>,
      btnText: "View services",
      btnImg: <Img src="./img/logo(1).JPG" alt="header logo image" className="img"/>,
    },
    {
      id: 3,
      image: "/img/five-star-home1.jpg",
      title: <h2 className="text" style={{color:"rgb(121, 98, 98)"}}>Your Service is our number one priority.</h2>,
      text: <p className="textp" style={{color:"rgb(121, 98, 98)"}}>Without consulting, plans stay as plan.</p>,
      btnText: "View services",
      btnImg: <Img src="./img/logo(2).JPG" alt="header logo image" className="img"/>,
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
        <Baground className="bg-img" style={{ backgroundImage: `url(${item.image})` }}>
          {item.btnImg}
          {/* <Title className="title">{item.title}</Title> */}
          {item.title}
          {item.text}
        </Baground>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
width: 100%;
height: 100vh;

@media screen and (max-width: 1023px) {
  height: auto;
}
`

const Baground = styled.div`
max-width: 1440px;
height: 100vh;
background-size: cover;
background-repeat: no-repeat;
transition: 2s all ease;
display: flex;
flex-direction: column;
gap: 15px;
justify-content: center;
align-items: center;

.text,
.textp {
    text-align: center;
    line-height: 60px;
    margin: 0%;
    width: 60%;
    font-size: 60px;
    font-weight: 800;
    color: whitesmoke;
    transition: 2s all ease;
}

.textp {
  width: 100%;
  font-size: 25px;
  font-weight: 400;
}

@media screen and (max-width: 1023px) {
  width: 100%;
  height: 500px;
  background-size: cover;
  gap: 15px;

  .text,
.textp {
    line-height: 40px;
    width: 70%;
    font-size: 35px;
    font-weight: 600;
}

.textp {
  width: 100%;
  font-size: 20px;
  font-weight: 400;
}
}
@media screen and (max-width: 767px) {
  height: 500px;
  background-size: cover;
  gap: 15px;

  .text,
.textp {
    line-height: 40px;
    width: 70%;
    font-size: 35px;
    font-weight: 600;
}

.textp {
  font-size: 20px;
  font-weight: 400;
}
}

@media screen and (max-width: 540px) {
  .text,
  .textp {
      line-height: 30px;
      width: 90%;
      font-size: 30px;
  }
  
  .textp {
    font-size: 18px;
    font-weight: 400;
  }
}
`
const Title = styled.p`
font-size: 30px;
font-weight: bold;
`
const Img = styled.img`
width: 150px;
height: 150px;
border-radius: 100%;
transition: 2s all ease;
@media screen and (max-width: 767px) {
  width: 100px;
  height: 100px;
}
`

export default HomeHeader;
