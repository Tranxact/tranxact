import React, { useEffect, useState } from "react";
import styled from "styled-components";

function Review() {
  const [id, setId] = useState(0);
  const data = [
    {
      id: 0,
      img: "./img/review-img-1.jpg",
      title: "Macquarie Telecom",
      text: "I had the pleasure of working with Consultio as part of a 6 month ‘Regional Retail Leadership Program’. Her passion for leadership development is evident to help others.",
      conclusion: "Senior Director",
    },
    {
      id: 1,
      img: "./img/review-img-2.jpg",
      title: "Maria Silverii",
      text: "I had the pleasure of working with Consultio as part of a 6 month ‘Regional Retail Leadership Program’. Her passion for leadership development is evident to help others.",
      conclusion: "CEO of Blue Illusion",
    },
    {
      id: 2,
      img: "./img/review-img-3.jpg",
      title: "Kathleen Smith",
      text: "I had the pleasure of working with Consultio as part of a 6 month ‘Regional Retail Leadership Program’. Her passion for leadership development is evident to help others.",
      conclusion: "Senior Director",
    },
    {
      id: 3,
      img: "./img/review-img-4.jpg",
      title: " Pamela Johnson",
      text: "I had the pleasure of working with Consultio as part of a 6 month ‘Regional Retail Leadership Program’. Her passion for leadership development is evident to help others.",
      conclusion: "Leadership Group",
    },
  ];

  const handleNext = () => {
    setId(id + 1);
    if (id === 3) {
      setId(0);
    }
  };
  const handlePrev = () => {
    setId(id - 1);
    if (id === 0) {
      setId(3);
    }
  };
  const [filteredData, setFilteredData] = useState(
    data.filter(item => item.id === id),
  );
  useEffect(() => {
    setFilteredData(data.filter(item => item.id === id));
  }, [id]);
  return (
    <Wrapper>
      <div className="review">
        <div className="review-top">
          <div className="left">
            <div className="line"></div>
            <h1>
              To review means to look back over something for evaluation or
              memory.
            </h1>
          </div>
          <p>
            It’s always a joy to hear that the work I do has positively impacted
            our clients and that they are happy to share their experience.
          </p>
        </div>
        <div className="review-bottom">
          {filteredData.map((item, i) => (
            <div key={i}>
              <section>
                <i class="fa-solid fa-quote-left fa-rotate-180"></i>
              </section>
              <img src={item.img} alt="" />
              <p>{item.text}</p>
              <h2>{item.title}</h2>
              <span>{item.conclusion}</span>
              <button onClick={handlePrev} className="prev">
                <i className="fa-solid fa-chevron-left"></i>
              </button>
              <button onClick={handleNext} className="next">
                <i class="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-image: url("./img/review-bg-1.jpg");
  height: max-content;
  background-attachment: fixed;
  position: relative;
  .review {
    background-image: url("./img/bg-section-02.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-color: rgba(14, 14, 14, 0.85);
    width: 100%;
    padding: 75px 100px;
    @media (max-width: 1200px) {
      padding: 75px 30px;
    }
    @media (max-width: 768px) {
      padding: 75px 20px;
    }
    .review-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1540px;
      margin: 0 auto;
      margin-bottom: 75px;
      .left {
        display: flex;
        width: 50%;
        padding: 15px;
        @media (max-width: 575px) {
          display: block;
        }
        .line {
          width: 140px;
          height: 3px;
          background-color: #d1651a;
          margin: 20px 30px 0 0;
          @media (max-width: 575px) {
            width: 70px;
            height: 3px;
            margin: 0px 0px 20px 0;
          }
        }
        h1 {
          color: #ffffff;
          font-size: 36px;
          line-height: 44px;
          font-weight: 800;
          @media (max-width: 1023px) {
            font-size: 27px;
            line-height: 38px;
          }
          @media (max-width: 575px) {
            padding: 10px 0px;
          }
        }
      }
      p {
        width: 50%;
        padding: 15px 15px 15px 60px;
        color: #ffffff;
        font-size: 18px;
        line-height: 34px;
        font-weight: 500;
        @media (max-width: 1023px) {
          font-size: 16px;
          line-height: 30px;
        }
      }
      @media (max-width: 768px) {
        display: block;
        .left {
          width: 100%;
          padding: 0 0 15px;
        }
        p {
          width: 100%;
          padding: 15px 0px 15px 0px;
        }
      }
    }
    .review-bottom {
      max-width: 1540px;
      margin: 38px auto 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      color: white;
      div {
        max-width: 840px;
        margin: auto;
        padding: 0 80px;
        position: relative;
        transition: 0.5s all ease;
        @media (max-width: 575px) {
          padding: 0 20px;
        }
        @media (max-width: 375px) {
          padding: 0;
        }
        section {
          height: 53px;
          width: 53px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 28px;
          margin: 0;
          line-height: 1;
          font-weight: 700;
          font-family: playfair display;
          position: absolute;
          top: -6%;
          left: 52%;
          border-radius: 50%;
          background: linear-gradient(to left, #c1282a, #d1651a);
          @media (max-width: 575px) {
            height: 45px;
            width: 45px;
            font-size: 20px;
            top: -5%;
          }
        }
        img {
          width: 218px;
          height: 218px;
          border-radius: 50%;
          margin-bottom: 40px;
          transition: 0.3s all ease;
          @media (max-width: 575px) {
            width: 170px;
            height: 170px;
            margin-bottom: 20px;
          }
        }
        p {
          font-size: 16px;
          line-height: 30px;
          color: #fff;
          font-style: italic;
          font-family: poppins, sans-serif;
          margin-bottom: 26px;
        }
        h2 {
          font-size: 18px;
          font-weight: 700;
          color: #fff;
          text-transform: uppercase;
          margin-bottom: 8px;
          line-height: 1.2;
          margin: 0 0 15px;
          text-transform: uppercase;
        }
        span {
          font-size: 15px;
          color: #c1c1c1;
        }
        button {
          position: absolute;
          height: 50px;
          width: 50px;
          line-height: 50px;
          background-color: #3a3939;
          color: white;
          cursor: pointer;
          border: none;
          border-radius: 50%;
          top: 50%;
          transition: 0.3s all ease;
          &:hover {
            background: linear-gradient(to left, #c1282a, #d1651a);
          }
          @media (max-width: 575px) {
            top: 30%;
          }
        }
        .prev {
          left: 0;
        }
        .next {
          right: 0;
        }
      }
    }
  }
`;

export default Review;
