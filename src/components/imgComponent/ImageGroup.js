import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Fancybox from './FancyBox';

const UpLoadImgStyled = styled.div`
    width: 100%;
    /* height: 500px; */
    height: 70px;
    position: relative ;
    border-radius: 10px ;
    overflow: hidden ;
    &.show-img-block {
      height: 500px;
    }
    .add-block {
        position: absolute;
        left: 10px;
        top: 15px;
        width: fit-content;
        span {
            color: #fff;
            padding: 10px;
            border: 1px solid #333;
            background-color: #1f2028; 
            border-radius: 10px ;
            font-weight: 700;
            
        }
       
    }
    .img-block {
        display: flex;
        width: 100%;
        height: 100%;
        top: 0px;
        bottom: 0px;
        flex-wrap: wrap;
        &__item {
            padding: 2px;
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
    .over-block {
        position: absolute ;
        bottom: 0px;
        right: 0px;
        z-index: 10;
        background-color: #444343ad;
        width: 33.33%;
        height: 50%;
        display: flex ;
        align-items: center ;
        justify-content: center ;
        span {
            color: #fff;
            font-size: 24px;
            font-weight: 600
        
        }
    }
`
export const  ImageGroup = (props) => {
  const dataImg = props.dataImg
  const [overNumber,setOverNumber] = useState(0);
  console.log(dataImg);

  useEffect(()=> {
    if(dataImg?.length>5) {
        setOverNumber(dataImg?.length - 5);
    }
  },[dataImg]);

  const handleWidth = (index) => {
    let size = dataImg.length;
    if(size === 1) {
        return '100%';
    }
    if(size === 2) {
      return '100%';
    }
    if(size === 3) {
        if(index === 0) {
            return '100%'
        } else return '50%';
    }
    if(size === 4) {
        return '50%';
    }
    if(size ===  5) {
        if(index === 0 | index ===1) {
            return '50%';
        }
        else return '33.33%';
    }
  }

  const handleHeight = (index) => {
    let size = dataImg.length + 1;
    if(size === 1) {
        return '100%';
    } else return '50%';
  }
  
  return (
    <UpLoadImgStyled className={dataImg.length != 0 ? 'show-img-block' : ''}>
      {/*  <Fancybox options={{ infinite: false }}> */}
        <div className='img-block'>
         { dataImg.map((item,index)=>
            <div  className = 'img-block__item' style={{width: `${handleWidth(index)}`, height : `${handleHeight(index)}`}}>
              <img src={item} data-fancybox="gallery" data-src={item}/>
            </div>
         )}
        </div>
        {(overNumber!=0) &&  <div className='over-block' data-fancybox="gallery" data-src={dataImg[5]}>
          <span >+{overNumber}</span>
        </div>}
    {/*  </Fancybox> */}
    </UpLoadImgStyled>
  )
}
