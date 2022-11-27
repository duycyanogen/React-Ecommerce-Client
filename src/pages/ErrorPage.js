import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
const ErrorPageStyled = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column ;
    align-items: center;
    justify-content: center ;
    background-image: url('../image/bgErr2.jpg') ;
`;
const LargeContent = styled.div`
    display: flex ;
    justify-content: center;
    align-item: center !important;
    /* height: 180px; */
    span {
        font-size: 120px ;
        font-weight: 800 ;
        margin: 0px;
        color: rgb(227 155 0);
    };
`;
const DetailContent = styled.p`
  margin-top: 30px;
  color: #fff;
`
const GoHomeButton = styled.button`
  margin-top: 20px;
  height: 48px;
  padding: 0px 36px;
  font-size: 18px ;
  background-color:rgb(227 155 0) ;
  border: none;
  border-radius:10px;
  color: #fff;
  cursor: pointer;
  &:hover {
        background-color:rgb(212, 159, 44);
  }
`;
export const  ErrorPage = () => {
  // setIsUser(true);
    const navigate = useNavigate();
    return( 
        <ErrorPageStyled>
          <LargeContent>
            <span>404</span>
          </LargeContent>
          <DetailContent>
            Something went wrong. Looks like the page you are looking for is missing. Please continue to out homepage.
          </DetailContent>
          <Link to = '/'>
            <GoHomeButton>Go Home</GoHomeButton>
          </Link>
         
        </ErrorPageStyled>
    )
}