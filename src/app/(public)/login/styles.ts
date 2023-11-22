import styled from 'styled-components';


export const Container = styled.div``;


export const BotaoProxima = styled.button`
  font-family: "Google Sans","Roboto", Arial, sans-serif;
  background-color: rgb(26,115,232);
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
  }`;

export const ContainerBotoes = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;

`;

export const Content = styled.div`
  font-family: "Google Sans","Noto Sans Myanmar UI",arial,sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  padding: 30px;
  height: 70vh;
  border: 1px solid #d3d3d3;
  border-radius: 8px;
  background-color: #fff;

  img {
    width: 92px;
    margin-bottom:10% ;
  }

  h1 {
    font-size: 24px;
    font-weight: 400;
  }

  h3 {
    font-size: 16px;
    font-weight: 400;
  }`;

export const Body = styled.body`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #FFF;
  div:fist-chield
`;

export const Input = styled.input`
  border: 1px solid #dfe1e5; 
  border-radius: 8px;
  color: #3c4043; 
  font-size: 16px;
  height: 40px; 
  padding: 10px 16px;
  margin-bottom: 10px; 

  &:focus {
    border-color: #4285f4;
    outline: none; 
  }
`;
