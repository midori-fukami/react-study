import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background: var(--darkGrey);
  padding: 0 20px;
`;

export const Content = styled.div`
  position: relative;
  max-width: var(--maxWidth);
  width: 100%;
  height: 55px;
  background: var(--medGrey);
  margin: 20px auto;
  border-radius: 40px;
  color: var(--white);

  img {
    position: absolute;
    left: 15px;
    top: 14px;
    width: 30px;
  }

  input {
    font-size: 28px;
    position: absolute;
    right: 0;
    margin: 8px 0;
    padding: 0 20px 0 0;
    border: 0;
    width: 95%;
    background: transparent;
    height: 40px;
    color: var(--white);

    :focus {
      outline: none;
    }
  }
`;
