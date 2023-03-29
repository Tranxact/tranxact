import React from "react";
import styled from "styled-components";

function HomeConsultancy() {
  const data = [
    {
      head: "Strategic vision",
      text: "A client once told us that where the others focus on one star one issue we see the whole sky.",
    },
    {
      head: "Networks that span sectors",
      text: "Over more than 20 years, we’ve fostered trusted relationships across government, industry and global forums.",
    },
    {
      head: "Interpersonal skills",
      text: "Forging relationships between multi-national corporations, govern ments and global NGOs begins with connections between people.",
    },
    {
      head: "Flexible delivery model",
      text: "We adapt our delivery to the way your work, whether as an external provider or by providing senior.",
    },
  ];
  return (
    <Wrapper>
      <Left>
        <div className="left-head">
          <div className="line"></div>
          <div>
            <h1>
              We’re a global stakeholder relations and partnership building
              consultancy.
            </h1>
            <p>
              Collaborate Consulting exists to find the place where to being
              seemingly disparate interests meet. From that point of the
              connection, we create platforms.
            </p>
          </div>
        </div>
        <div className="left-grid">
          {data.map((item, i) => (
            <div className="grid" key={i}>
              <h2>
                <i className="fa-solid fa-angles-right"></i>
                {item.head}
              </h2>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </Left>
      <Right>
        <img src="./img/five-star-round.png" alt="" />
      </Right>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 100px;
  max-width: 1540px;
  margin: 0 auto;
  @media (max-width: 1200px) {
    padding: 0 30px;
  }
  @media (max-width: 768px) {
    padding: 0 20px;
    flex-direction: column;
    align-items: center;
  }
`;
const Left = styled.div`
  width: 50%;
  padding: 15px;
  .left-head {
    display: flex;
    justify-content: space-between;
    .line {
      width: 140px;
      height: 3px;
      background-color: #d1651a;
      margin: 30px 20px 0 0;
    }
    h1 {
      font-size: 36px;
      line-height: 44px;
      margin-bottom: 16px;
      padding: 10px 15px;
      font-weight: 800;
    }
    p {
      padding: 10px 15px;
      font-size: 18px;
      line-height: 1.875;
      color: #383838;
      font-weight: 500;
    }
  }
  .left-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 20px 0;
    .grid {
      padding: 15px;
      h2 {
        font-size: 20px;
        font-weight: 800;
        margin: 0 0 15px;
        font-weight: 700;
      }
      i {
        color: #d1651a;
        font-size: 20px;
        margin-right: 10px;
      }
      p {
        font-size: 16px;
        line-height: 1.875;
        color: #383838;
        font-weight: 400;
      }
    }
  }
  @media (max-width: 1200px) {
    padding: 0;
    .left-head {
      h1 {
        font-size: 30px;
        line-height: 35px;
      }
      .left-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding: 20px 0;
        .grid {
          padding: 15px;
          h2 {
            font-size: 18px;
          }
        }
      }
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    .left-head {
      h1 {
        font-size: 28px;
        margin-bottom: 5px;
      }
      p {
        font-size: 16px;
      }
    }
    .left-grid {
      display: block;
      .grid {
        padding: 15px 0;
        h2 {
          font-size: 16px;
        }
        i {
          font-size: 13px;
        }
      }
    }
  }
  @media (max-width: 575px) {
    .left-head {
      display: block;
      .line {
        width: 70px;
        height: 3px;
        margin: 0px 0px 20px 0;
      }
      h1 {
        padding: 10px 0px;
      }
      p {
        padding: 10px 0px;
        font-size: 16px;
      }
    }
  }
`;
const Right = styled.div`
  width: 50%;
  padding: 15px;
  img {
    width: 100%;
  }
  @media (max-width: 1200px) {
    padding: 0;
  }
  @media (max-width: 768px) {
    max-width: 600px;
    margin: 30px auto 0;
    width: 100%;
    padding: 0;
  }
`;

export default HomeConsultancy;
