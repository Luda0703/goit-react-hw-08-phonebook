import styled from '@emotion/styled';

export const Container = styled.form`
  border: 1px solid #ffdab9;
  position: relative;
  margin: 50px auto;
  width: 340px;
  height: auto;
  text-align: start;
  padding: 30px;
  background-color: #ffe4e1;
  border-radius: 10px;
`;

export const Label = styled.label`
  display: blok;
  text-align: start;
  color: #696969;
`;
export const Input = styled.input`
padding: 15px;
border-radius:7px;
background-color: #C0C0C0;
display: block;
margin-top: 5px;
margin-bottom: 15px;
width: 300px;  
color: white;
font-size:18px;
border: 1px solid #FFDAB9;

:focus {
    outline-color: rgba(0,0,0,0);
    background: rgba(255,255,255,.95);
    color: #e74c3c;
    border: 1px solid #FFDAB9;
`;
export const Button = styled.button`
  background-color: #2f4f4f;
  color: #ffffff;
  width: 100px;
  border-radius: 7px;
  padding: 8px;
`;
