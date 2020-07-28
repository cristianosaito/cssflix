import React from "react"
import {Link} from 'react-router-dom';

import logo from "../../assets/img/logo.png"
import "./Menu.css"
import Button from "../Button/Button"

function Menu(){
    return(
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={logo} alt="logo"/>
            </Link>
            <Button as={Link} to="/cadastro/video">
                novo video
            </Button>
        </nav>
    )
}

export default Menu