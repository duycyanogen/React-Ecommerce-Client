import { Modal } from 'antd'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const ModalAppStyled = styled.div`

`
export const ModalApp = (props) => {
  const title = props.title;
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if(props.isOpen) {
      showModal()
    }
  })

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    props.close();
    
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    props.close();

  };

  return (
    <ModalAppStyled>
        <Modal title= {title} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
      </Modal>
    </ModalAppStyled>
  )
}
