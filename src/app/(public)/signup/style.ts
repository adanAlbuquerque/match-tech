import styled from 'styled-components';


export const Checkbox = styled.input`

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
    margin-bottom: 0;
  }

  h3 {
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 4vh; 
  }
`;

export const Form = styled.form`
  justify-content: center;
  align-items: center;
input {
  border: 1px solid #dfe1e5;
  text-align: left;
  border-radius: 4px;
  color: #000;
  font-size: 16px;
  width: 48vh;
  height: 35px;
  padding: 10px 15px;
  margin-bottom: 20px;
  transition: border 0.2s ease-in;

  &:focus {
    border-width: 2px;
    border-color: #4285f4;
    outline: none;
  }
}

`;

export const Body = styled.body`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #fff;
`;

export const Section = styled.section`

  font-family: "Google Sans", "Noto Sans Myanmar UI", arial, sans-serif;
  display: flex;
  flex-direction: column;
  padding: 30px;
  border: 1px solid #d3d3d3;
  border-radius: 8px;
  background-color: #fff;

  div:nth-child(3) {
    display: flex;
    justify-content: end;
    margin-top: 20px;
    margin-bottom: 65px;

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
`;







