import React, { useState } from "react";
import styled from "styled-components";

function Footer() {
  const [email, setEmail] = useState();
  const data = [
    {
      logo: "./img/logo-footer.png",
      address: "30 Commercial Road Fratton, Australia",
      contact: "1-888-452-1505",
      openHours: "Mon – Sat: 8 am – 5 pm, Sunday: CLOSED",

      links: [
        "Home",
        "Team",
        "Services",
        "FAQ",
        "About us",
        "Gallery",
        "Testimonials",
        "Contact",
        "News",
        "Portfolio",
      ],

      newsLetter: {
        title: "Newsletter",
        description: "Send us a newsletter to get update",
        placeholder: "Your mail address",
        logo: ["./img/app-store.png", "./img/google-play.png"],
        icons: [
          { className: "fa-brands fa-facebook-f", style: { color: "#324f81" } },
          { className: "fa-brands fa-twitter", style: { color: "#6693e1" } },
          { className: "fa-thin fa-basketball", style: { color: "#f03838" } },
          { className: "fa-brands fa-behance", style: { color: "#2872f0" } },
        ],
      },
    },
  ];
  return (
    <Wrapper>
      <div className="footer-top">
        {data.map((item, i) => (
          <section key={i}>
            <img className="footer-logo" src={item.logo} alt="" />
            <div>
              <p>
                <i className="fa-sharp fa-solid fa-location-dot"></i>{" "}
                {item.address}
              </p>
              <p>
                <i className="fa-sharp fa-solid fa-phone"></i> {item.contact}
              </p>
            </div>
            <div>
              <p className="red">Open Hours:</p>
              <p>{item.openHours}</p>
            </div>
          </section>
        ))}
        <section>
          <h1>
            Links <div></div>
          </h1>
          <ul>
            {data.map(item =>
              item.links.map((item, i) => (
                <li key={i}>
                  <i class="fa-sharp fa-solid fa-chevron-right"></i> {item}
                </li>
              )),
            )}
          </ul>
        </section>
        {data.map((item, i) => (
          <section key={i}>
            <h1>
              {item.newsLetter.title} <div></div>
            </h1>
            <p>{item.newsLetter.description}</p>
            <form>
              <input
                type="email"
                value={email}
                placeholder={item.newsLetter.placeholder}
                onChange={e => setEmail(e.target.value)}
              />
              <button>
                <i class="fa-regular fa-paper-plane"></i>
              </button>
            </form>
            <div className="img-div">
              {item.newsLetter.logo.map((item, i) => (
                <img key={i} src={item} alt="" />
              ))}
            </div>
            <div className="footer-icons">
              {item.newsLetter.icons.map((item, i) => (
                <div key={i}>
                  <i className={item.className} style={item.style}></i>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
      <div className="footer-bottom">
        <p>
          2023 © All rights reserved by <span>CaseThemes</span>
        </p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-image: url("./img/bg-footer1-update.png");
  background-position: top left;
  background-repeat: no-repeat;
  background-color: #0e0e0e;
  .footer-top {
    max-width: 1540px;
    margin: 0 auto;
    padding: 78px 100px 82px;
    color: white;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @media (max-width: 1200px) {
      padding: 75px 30px;
    }
    @media (max-width: 768px) {
      padding: 75px 20px;
      display: block;
    }
    section {
      padding: 15px;
      margin: 0;
      width: 33%;
      @media (max-width: 768px) {
        width: 100%;
        padding: 15px 0;
      }
      .footer-logo {
        width: 223px;
        height: 59px;
        margin-bottom: 30px;
      }
      div {
        .red {
          color: #d1651a;
          font-weight: 600;
        }
        p {
          margin-top: 10px;
          font-size: 14px;
          line-height: 24px;
          font-weight: 600;
          i {
            margin-right: 10px;
          }
        }
      }
      h1 {
        font-size: 24px;
        font-weight: 600;
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        margin-bottom: 29px;
        line-height: 1.2;
        display: flex;
        align-items: center;
        div {
          width: 100%;
          height: 1px;
          background: #e9eaee26;
          margin-left: 30px;
        }
      }
      ul {
        display: flex;
        flex-wrap: wrap;
        li {
          list-style: none;
          padding: 0;
          width: 50%;
          margin: 12px 0;
          color: #9d9d9d;
          position: relative;
          font-size: 14px;
          font-weight: 700;
          line-height: 24px;
          margin-bottom: 12px;
          transition: 0.3s all ease;
          &:hover {
            color: white;
            padding-left: 12px;
          }
          i {
            margin-right: 10px;
            @media (max-width: 768px) {
              font-size: 10px;
            }
          }
        }
      }
      form {
        width: 100%;
        padding: 20px 0;
        input {
          width: 83%;
          border: none;
          outline: none;
          background-color: #464646;
          border-radius: 0;
          height: 46px;
          font-size: 14px;
          font-weight: 400;
          color: #fff;
          padding: 6px 22px;
          @media (max-width: 768px) {
            width: calc(100% - 70px);
          }
          &::placeholder {
            font-weight: 500;
            color: #fff;
          }
        }
        button {
          width: 15%;
          border-radius: 0;
          border: none;
          height: 46px;
          font-size: 15px;
          font-weight: 700;
          color: #fff;
          cursor: pointer;
          background-image: linear-gradient(to left, #c1282a, #d1651a);
          @media (max-width: 768px) {
            width: 70px;
          }
        }
      }
      .img-div {
        width: 100%;
        img {
          height: 46px;
          width: 157px;
          margin-right: 15px;
          margin-bottom: 20px;
        }
      }
      .footer-icons {
        display: flex;
        div {
          margin: 0;
          height: 29px;
          width: 29px;
          border-radius: 50%;
          font-size: 17px;
          background-color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 15px;
          transition: 0.5s all ease;
          &:hover {
            transform: translateY(-5px);
          }
        }
      }
    }
  }
  .footer-bottom {
    max-width: 1540px;
    margin: 0 auto;
    padding: 19px 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #242323;
    @media (max-width: 1200px) {
      padding: 19px 30px;
    }
    @media (max-width: 768px) {
      padding: 19px 20px;
    }
    p {
      color: #ffffff;
      font-size: 14px;
      line-height: 24px;
      span {
        color: #c1282a;
      }
    }
  }
`;

export default Footer;
