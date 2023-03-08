import styled from "styled-components"
import { Link } from "react-router-dom"

export const All = styled.div`
 width: 100%;
  height: 100vh;
  display: flex;

`


export const Left = styled.div`
width: 70%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color:#151515;  
  padding-left: 5%;

  h1{
    font-family: 'Passion One', cursive;
    font-size: 106px;
    color:#FFFFFF;
  }
  h2{
    font-family: 'Oswald', sans-serif;
    color:#FFFFFF;
    font-size: 43px;
  } 

`

export const Right = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
  background-color:#494c4e;
  width: 535px;
  height: 100vh;

`

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

`
export const StyledInput = styled.input`
  width: 429px;
  height: 65px;
  padding: 10px;
  border: 1px solid #D5D5D5;
  border-radius: 6px;
  font-size: 27px;
  margin-bottom: 13px;
  
 
  &::placeholder{
    color:#9F9F9F;
    font-size: 27px;
    font-family: 'Oswald', sans-serif;
  }
`
export const StyledButton = styled.button`
  font-family: 'Oswald', sans-serif;
  width: 429px;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 27px;
  font-weight: 700;
  line-height: 26px;
  text-align: center;
  background: #1877F2;
  color: #FFFFFF;
`
export const StyledLink = styled(Link)`
  font-family: 'Lato', sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  color:#FFFFFF;
  margin-top: 14px;
`