import React from 'react';
import styled from 'styled-components';
import { FacebookOutlined } from '@ant-design/icons';
import { TwitterOutlined} from '@ant-design/icons';
import { YoutubeOutlined } from '@ant-design/icons';
import { InstagramOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

const FooterStyled = styled.div`
  /* background-color: #2b2f3b ; */
  background-image: url(../../image/background-footer.jpg);
  background-size: cover ;
  background-color: #2b2f3b7a;
  background-blend-mode: overlay;
  width: 100%;
  display: flex;
  flex-direction:column ;
  align-items: center ;
  align-items: flex-end ;
  padding: 20px;
  padding-bottom: 40px;
  position: relative ;
  margin-top: 30px;
  border-radius: 12px ;
  margin-bottom: 30px;


  .footer__logo {
    display: flex;
    flex-direction: column ;
    align-items: center ;
    .footer-title {
      font-size: 28px ;
      font-weight: 700 ;
      color: #fff;
      letter-spacing: 5px;
    }
    img {
        width: 200px;
        margin-bottom: 20px;
        opacity: 0.8 ;
    }

  }
 
  .footer__contact {
    display: flex ;
    align-items: center ;
    margin-bottom: 40px;
    padding-top: 40px;
    a {
        margin: 0px 10px;
        font-size: 30px ;
        color: #0089ff;
        color: #fff;
    }
  }
  .footer__end {
    position: absolute ;
    bottom: 20px;
  }
`
export const Footer = () => {
  return (
    <FooterStyled>
            <div className="footer__logo">
                 <p className='primary-title footer-title'>Flower Store</p>
            </div>
            <div className="footer__contact">
                <a href=""><FacebookOutlined/></a>
                <a href=""><TwitterOutlined/></a>
                <a href=""><YoutubeOutlined/></a>
                <a href=""><InstagramOutlined /></a>
            </div>
            <div  className="footer__end">
              <span className='primary-text'>@Copyright © 2022 Lnd.Org All Rights Reserved</span>
            </div>
    </FooterStyled>
  )
}
