import React from "react"
import Header from "../header/header"
export default function Layout(props) {
    return (
        <div className={props.className}>
            <Header />
            {props.children}

        </div>
    )
}