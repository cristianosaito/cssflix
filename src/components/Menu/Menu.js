import React from "react"
import logo from "../../assets/img/logo.png"
import "./Menu.css"
import Button from "../Button/Button"

function Menu(){
    return(
        <nav className="Menu">
            <a href="/">
            <img className="Logo" src={logo} alt="logo"/>
            </a>
            <Button as="a" href="/">
                novo video
            </Button>
        </nav>
    )
}

export default Menu