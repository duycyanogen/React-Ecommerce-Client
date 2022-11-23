import React from "react"
import { Outlet } from "react-router-dom"
import Header from "../headerAndNavBar/header"
import ListProduct from "../listProduct/listProduct"
export default function Layout() {
    return (
        <div>
            <Header>
              <Outlet/>
            </Header>
        </div>
    )
}