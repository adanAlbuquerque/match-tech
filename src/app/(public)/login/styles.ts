import styled from 'styled-components';


export const Container = styled.div``;

export const Content = styled.div`

img{

}
h1{
  font-size: 24px;
  font-weight: 400;
}
h3{
  font-size: 16px;
  font-weight: 400;
}

button{
  border: none;
  color: rgb(26,115,232);
  background-color: transparent;
  font-size: inherit;
  text-align: left;
}


font-family: "Google Sans","Noto Sans Myanmar UI",arial,sans-serif;
text-align: center;
border: 1px solid #D3D3D3;
border-radius: 8px;
padding: 20vh 0px;
`;

export const Body = styled.body`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #FFF;
`

export const Input = styled.input`
  border-radius: 4px;
  color: rgb(32,33,36);
  font-size: 16px;
  height: 28px;
  padding: 13px 45px;
`;