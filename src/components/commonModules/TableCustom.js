import { Table } from 'antd';
import React from 'react'
import styled from 'styled-components'

const TableCustomStyled  = styled.div`
  width: 100%;
  .ant-table-row {
    cursor: pointer;
  }
`
// const dataSource = [
//     {
//       key: '1',
//       name: 'Mike',
//       age: 32,
//       address: '10 Downing Street',
//     },
//     {
//       key: '2',
//       name: 'John',
//       age: 42,
//       address: '10 Downing Street',
//     },
//   ];
  
//   const columns = [
//     {
//       title: 'Name',
//       dataIndex: 'name',
//       key: 'name',
//     },
//     {
//       title: 'Age',
//       dataIndex: 'age',
//       key: 'age',
//     },
//     {
//       title: 'Address',
//       dataIndex: 'address',
//       key: 'address',
//     },
//   ];

// props:  dataTable +  columnsTable +  pageSizeTable
export const  TableCustom = (props) => {
  const dataTable = props.dataTable;
  const columnsTable =  props.columnsTable;
  const pageSize = props.pageSize;

  return (
    <TableCustomStyled>
        <Table dataSource={dataTable} columns={columnsTable} pagination={{ pageSize: pageSize }}/>
    </TableCustomStyled>
  )
}
