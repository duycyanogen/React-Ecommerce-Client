import React from "react"
import Header from "../header/header"
import Login from "../../containers/Login"
import Grid from "../grid/grid"
export default function Layout(props) {
    return (
        <div>
            <Header>
                <Grid />
            </Header>
        </div>
    )
}