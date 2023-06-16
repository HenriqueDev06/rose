import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  margin: 35px 0;

  img {
    width: 100%;
    object-fit: cover;
  }

  .sub {
    flex-direction: row;
    width: 100%;
    font-size: 12px;
    line-height: 1.1;

    padding: 2px 5px;

    i {
      font-size: 16px;
      margin: 0 6px;
      color: #df5353;
    }
  }
`;
