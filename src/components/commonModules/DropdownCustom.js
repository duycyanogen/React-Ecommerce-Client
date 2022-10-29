import React from 'react'
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';

// const DropdownCustomStyled = styled``.div

const listItem = [
  {
    key: '1',
    label:'item 1'
  },
  {
    key: '2',
    label: 'item2'
  }
];
export const  DropdownCustom = (props) => {
    // const menu = props.menu;
    const menu = (
      <Menu
        item={
          listItem
        }
      />
    );
  return (
    <div>
    <Dropdown overlay={menu}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
    </div>
  )
}

