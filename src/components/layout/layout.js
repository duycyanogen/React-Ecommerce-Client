import React from "react"
import Header from "../headerAndNavBar/header"
import ListProduct from "../listProduct/listProduct"
export default function Layout(props) {
    return (
        <div>
            <Header>
                {props.children}
            </Header>
        </div>
    )
}