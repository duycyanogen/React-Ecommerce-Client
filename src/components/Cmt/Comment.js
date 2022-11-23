import React, { useEffect, useState, useRef} from 'react'
import styled from 'styled-components'
import { Input } from 'antd';
import { Rate } from 'antd';

const CommentStyled = styled.div`
    .title {
      color: #d1c7bc;
      font-size: 16px;
      font-weight: 400 ;
      margin-top: 30px;
    }
    .btn {
        display: flex;
        align-items: center;
        margin-top: 20px;
        
        button {
          cursor: pointer;
        }

        & button:first-child {
          margin-right: 10px ;
        }
    }
    .ant-rate-text {
      color: #f73173
    }
    .text {
      color: #d1c7bc;
      margin-top: 20px;
    }
    .ant-input {
      background-color: #353849;
      border-radius: 10px ;
      border: 0px;
      color: #d1c7bc;
      &::placeholder {
        color :#d1c7bc;
        opacity: 0.6 ;
      }
    }
`
export const Comment = (props) => {
  const getComment = props.getComment;
  const [valueStar, setValueStar] = useState(3);
  const [valueContent, setValueContent] = useState('');
  const { TextArea } = Input;
  const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
 
  useEffect(()=> {
    getValueStar()
  },[valueStar])

  const getValueStar = () => {
    console.log('valueStar',valueStar);
    return valueStar;
  }
  
  const handleOnChangeInput = (e) => {
    console.log(e.target.value)
    setValueContent(e.target.value)
  }
  
  const handleSubmitComment = () => {
    getComment({valueContent:valueContent, valueStar: valueStar});
  } ;

  const handleCancelComment = () => {
    setValueContent('')
  }  
  return (
    <CommentStyled>
        <p className = 'title'>Bạn có hài lòng về sản phẩm: </p>
        <div className='star-block'>
        <div>
          <Rate tooltips={desc} onChange={setValueStar} value={valueStar} />
          {valueStar ? <span className="ant-rate-text">{desc[valueStar - 1]}</span> : ''}
        </div>
        </div>
        <p className='text'>Nhận xét: (Ý kiến của bạn sẽ thêm thông tin cho nhiều người mua khác)</p>
        
        <div className='content'>
        <TextArea rows={4} value = {valueContent} placeholder="Viết bình luận của bạn" maxLength={1000} onChange ={handleOnChangeInput} />
        </div>
        <div className='btn'>
            <button className='primary-button' onClick={handleSubmitComment}>Đánh giá</button>
            <button className='primary-button' onClick={handleCancelComment}>Hủy</button>
        </div>
    </CommentStyled>
  )
}
  



