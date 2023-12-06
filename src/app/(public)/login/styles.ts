import styled from 'styled-components';

export const Container = styled.div``;

export const Form = styled.form`

input {
  border: 1px solid #dfe1e5;
  text-align: left;
  border-radius: 6px;
  color: #000;
  font-size: 16px;
  width: 90%;
  height: 35px;
  padding: 10px 15px;
  margin-bottom: 8px;
  transition: border 0.2s ease-in;

  &:focus {
    border-width: 2px;
    border-color: #4285f4;
    outline: none;
  }
}

  div:first-child {
    margin-top: 15px;
    justify-content: flex-end;
    width: 100%;

    button {
      background-color: transparent;
      border: none;
      color: #4285f4;
      cursor: pointer;
      font-size: 14px;

      &:hover {
        text-decoration: none;
      }
    }
  }

  div:nth-child(2) {
    margin: -2px -3px;
    display: flex;
    justify-content: flex-start;

    button {
      font-weight: 500;
      letter-spacing: 0.25px;
      background-color: transparent;
      border: none;
      color: #4285f4;
      cursor: pointer;
      font-size: 14px;
      margin-bottom: 2vh;

      &:hover {
        text-decoration: none;
      }
    }}

`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center; 
  text-align: center;
  height: 100%;

  img {
    width: 92px;
  }

  h1 {
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 0; /* Adjust the margin bottom */
  }

  h3 {
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 4vh; /* Adjust the margin bottom */
  }
`;


export const Section = styled.section`
  font-family: "Google Sans", "Noto Sans Myanmar UI", arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  border: 1px solid #d3d3d3;
  border-radius: 8px;
  background-color: #fff;

  div:nth-child(3) {

  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  input {
    font-family: "Google Sans", "Roboto", Arial, sans-serif;
    background-color: rgb(26, 115, 232);
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    padding: 9px 24px 8px 24px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #3c78d8;
      box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
    }
  }
}

  p {
    font-size: 14px;
    color: #666;
    margin-top: 40px;
    margin-bottom: 6vh;
  }

  a {
      color: rgb(26, 115, 232);
      text-decoration: none;
      font-weight: 500;
      font-size: 14px;
      letter-spacing: 0.25px;
    }
`;



export const Body = styled.body`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #fff;
`;
