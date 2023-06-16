import styled from "styled-components";

export const Container = styled.header`
  width: 100vw;
  height: 100vh;

  .navbar {
    width: 100%;
    height: 70px;
    background-color: #c4170c;
    color: white;
    font-size: 10px;

    flex-direction: row;
    justify-content: space-around;
    img {
      height: 29px;
    }

    i {
      color: white;
      font-size: 20px;
    }
  }

  #images__ {
    width: 100%;
    margin: 30px 0;
  }

  .content {
    width: 100%;
    padding: 0px 18px;
  }

  .text_1 {
    margin-top: 80px;
    font-size: 27px;
    line-height: 1.2;
  }

  .text_sub {
    color: #7d7d7d;
    line-height: 1.2;
    font-size: 15px;
  }

  .p_1 {
    margin-top: 50px;
  }

  a {
    color: #ff5d8f;
    font-weight: 700;
  }

  .icons {
    font-size: 25px;
    margin: 20px 0;

    * {
      color: #df5353;
    }

    i {
      margin: 0px 7px;
    }
  }

  .text_main {
    color: #333333;
    font-size: 18px;
    font-weight: 400;
  }

  .desc {
    h3 {
      margin-top: 30px;
      font-size: 23px;
    }
    p {
      margin: 10px 0;
    }

    * {
      text-align: center;
    }

    img {
      width: 100%;
    }

    .link1 {
      color: #333;
    }

    .link2 {
      margin-top: 10px;
      color: red;
    }

    .button {
      padding: 20px 0;
      width: 100%;
      border-radius: 4px;
      color: white;
      font-size: 20px;
      text-transform: uppercase;
      background: #61ce70;

      box-shadow: 0px 8px 14px 4px rgba(0, 0, 0, 0.4);
    }
  }

  .faq {
    margin-top: 40px;

    strong {
      margin-right: 10px;
    }

    h2 {
      font-weight: 500;
    }

    #abbt {
      margin: 10px 0;
      font-size: 12px;
      margin-bottom: 40px;
      opacity: 0.7;
    }
  }

  .user {
    margin: 10px 0;
    flex-direction: row;

    .info {
      flex-direction: column;
      align-items: flex-start;

      margin-left: 15px;

      span {
        font-weight: 700;
        font-size: 16px;
      }

      p {
        font-size: 10px;
        opacity: 0.8;
      }

      .text {
        opacity: 1;
      }
    }

    img {
      width: 40px;
      height: 40px;

      border-radius: 50%;
    }
  }

  footer {
    background: #c4170c;
    color: white;
    width: 101vw;

    padding: 20px 10px;

    font-size: 12px;
    text-align: center;
    margin-top: 50px;
  }
`;
