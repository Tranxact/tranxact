import React from "react";
import styled from "styled-components";

function Agenda() {
<i class="fa-thin fa-bullseye-arrow"></i>
    const data = [
        {
            img: './img/knight.png',
            title: 'Success fullfill',
            text: ' A feature of great leaders is that they never stop for learning. Mentorship and Coaching for your leaders.'
        },
        {
            img: './img/knight.png',
            title: 'StartUp Business',
            text: ' Photography is the core of everything we do, photography equipment, camera, photography.'
        },
        {
            img: './img/knight.png',
            title: 'Leadership Work',
            text: ' When there is a key element of your organisation that is limiting your people’s to engagement performance.'
        },
        {
            img: './img/knight.png',
            title: 'Business Growth',
            text: ' Whatever the scenario, we tap into deep networks and innate understanding of each party’s priorities.'
        }
    ]
  return (
    <Wrapper>
      <div className="agenda">
        <div className="agenda-top">
          <div className="left">
            <div className="line"></div>
            <h1>
              We position our clients at the forefront of their field by
              advancing an agenda.
            </h1>
          </div>
          <p>
            We bring more than 20 years’ senior experience forging
            collaborations across government, private sector and international
            forums.
          </p>
        </div>
        <div className="agenda-bottom">
            {
                data.map((item, i) => 
                <div key={i}>
                    <img src={item.img} alt="" />
                    <h2>{item.title}</h2>
                    <p>{item.text}</p>
                    <span className="cover"><img src={item.img} alt="" /></span>
                </div>)
            }
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-image: url("./img/agenda-bg.jpg");
  height: max-content;
  background-attachment: fixed;
  position: relative;
  .agenda {
    background-color: rgba(14, 14, 14, 0.85);
    width: 100%;
    padding: 75px 100px;
    @media (max-width: 1200px) {
      padding: 75px 30px;
    }
    @media (max-width: 768px) {
      padding: 75px 20px;
    }
    .agenda-top {
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
    .agenda-bottom {
        display: grid;
        max-width: 1540px;
        margin: 0 auto;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 30px;
        @media (max-width: 992px) {
          grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 575px) {
          grid-template-columns: 1fr;
        }
        div {
            background: white;
            border-radius: 5px;
            padding: 40px 28px 38px;
            text-align: center;
            position: relative;
            transition: 0.3s all ease;
            &:hover {
                background: linear-gradient(to left, #c1282a, #d1651a);
                box-shadow: 15px 15px rgb(193, 40, 42, 0.5);
            }
            &:hover .cover {
                opacity: 0;
            }
            &:hover {
                color: white;
            }
            img {
                width: 62px;
                height: 62px;
                margin-bottom: 13px;
            }
            h2 {
                font-size: 20px;
                margin-bottom: 14px;
                line-height: 1.2;
                margin: 0 0 15px;
                font-weight: 800;
            }
            p {
                font-size: 14px;
                line-height: 24px;
            }
            .cover {
                position: absolute;
                bottom: 0px;
                right: 0px;
                opacity: 0.3; 
                transition: 0.3s all ease;
                img {
                    margin: 0;
                }
            }
        }
    }
`;

export default Agenda;
