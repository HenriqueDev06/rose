import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        outline: none;
        border: 0;

    }
   
    html, body{
        overflow-x: hidden;
        background: #ffff;
    }
    a{
        text-decoration: none;
    }
    .display-flex{
        display: flex;
        justify-content: center;
        align-items: center;
    }

::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}

::-webkit-scrollbar-track {
  background: transparent;
}


.display-flex{
    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;
}

`;
