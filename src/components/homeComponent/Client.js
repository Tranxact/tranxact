import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { clientData } from "../../Data";

function Client() {
  const [name, setName] = useState("All");
  const [show, setShow] = useState(false);
  const [style, setStyle] = useState(false);
  const [filteredData, setFilteredData] = useState(
    clientData.filter(item => item.id <= 8),
  );
  useEffect(() => {
    if (name !== "All") {
      setFilteredData(clientData.filter(item => item.type === name));
      setShow(false);
    } else {
      setFilteredData(clientData.filter(item => item.id <= 8));
      setShow(true);
      setStyle(false);
    }
  }, [name]);
  const handleClick = () => {
    setStyle(!style);
    setTimeout(() => {
      setShow(false);
      setFilteredData(clientData.filter(item => item));
    }, 5000);
  };
  const names = [
    "All",
    "Coaching",
    "Facilitation",
    "Stakeholder Relations",
    "Strategy",
  ];
  return (
    <Wrapper>
      <div className="client-top">
        <div className="left">
          <div className="line"></div>
          <h1>
            Our client, global analytical techno company, wanted to build
            market.
          </h1>
        </div>
        <p>
          In this context, our approach was to build trusted and strategic
          relationships within key sectors, with the goal of advancing health,
          trade and business outcomes.
        </p>
      </div>
      <div className="client-bottom">
        <div className="navigations">
          {names.map((item, i) => (
            <button
              onClick={() => setName(item)}
              className={name === item ? "normal-btn styled-btn" : "normal-btn"}
              key={i}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="client-grids">
          {filteredData.map((item, i) => (
            <div className="grid" key={i}>
              <img src={item.img} alt="" />
              <div className="cover">
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.type}</p>
                </div>
                <div className="btn">
                  <i className="fa-sharp fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
        {show === true ? (
          <div className="btn-div">
            <button onClick={handleClick}>
              {!style ? (
                <i className="fa-sharp fa-solid fa-rotate-right"></i>
              ) : (
                <i class="fa-sharp fa-solid fa-rotate-right fa-spin"></i>
              )}
              Load more
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  max-width: 1540px;
  margin: 0 auto;
  padding: 75px 100px;
  @media (max-width: 1200px) {
    padding: 75px 30px;
  }
  @media (max-width: 768px) {
    padding: 75px 20px;
  }
  .client-top {
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
  .client-bottom {
    .navigations {
      margin-bottom: 44px;
      text-align: center;
      padding: 0 15px;
      @media (max-width: 375px) {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .normal-btn {
        width: max-content;
        color: color: #383838;
        background: transparent;
        cursor: pointer;
        font-size: 16px;
        line-height: 30px;
        font-weight: 600;
        margin: 0 2px 10px;
        padding: 0 16px;
        transition: 0.3s all ease;
        font-family: poppins,sans-serif;
        border: none;
        border-radius: 5px;
        &:hover {
          color: #fff;
          background: linear-gradient(to left, #c1282a, #d1651a);
        }
      }
      .styled-btn {
        color: #fff;
        background: linear-gradient(to left, #c1282a, #d1651a);
      }
    }
    .client-grids {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap: 30px;
      @media (max-width: 992px) {
        grid-template-columns: 1fr 1fr;
      }
      @media (max-width: 575px) {
        grid-template-columns: 1fr;
      }
      .grid {
        overflow: hidden;
        border-radius: 8px;
        position: relative;
        &:hover .cover{
        opacity: 1;
        pointer-events: all;
        }
        &:hover img {
          transform: scale(1.1) rotate(2deg);
        }
        img {
          width: 100%;
          border-radius: 8px;
          height: 100%;
          transition: 0.5s all ease;
        }
        .cover {
          position: absolute;
          width: 100%;
          height: max-content;
          background: linear-gradient(to top, rgb(0, 0, 0), transparent);
          opacity: 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          pointer-events: none;
          bottom: 0;
          left: 0;
          border-radius: 8px;
          padding: 30px 0px;
          transition: 0.5s all ease;
          h2 {
            font-size: 20px;
            margin-bottom: 10px;
            line-height: 1.2;
            font-weight: 800;
            color: white;
          }
          p {
            font-size: 14px;
            color: white;
            opacity: 0.5;
            font-weight: 700;
          }
          .btn {
            width: 42px;
            height: 42px;
            color: white;
            border-radius: 50%;
            background: linear-gradient(to left, #c1282a, #d1651a);
            font-size: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }
    }
    .btn-div {
      text-align: center;
      margin-top: 50px;
      button {
        padding: 0 42px;
        line-height: 55px;
        font-size: 16px;
        font-weight: 800;
        color: #fff;
        border-radius: 5px;
        box-shadow: 0 8px 10px rgba(12,12,12,.1);
        cursor: pointer;
        border: none;
        background: linear-gradient(to left, #c1282a, #d1651a);
        i {
          margin-right: 10px;
          font-size: 18px;
          transition: 3s all ease;
        }
      }
    }
  }
`;

export default Client;
