import React, { Component } from "react"
import './Header.css'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <header className="cabecalho"> 
            <nav className="navMenu">
                    <Link to="/drinks/" className="itemMenu">Drinks</Link>
                    <Link to="/sobre" className="itemMenu">Sobre nós</Link>
                    <Link to="/" className="logoMenu">Bons Drinks</Link>
                    <Link to="/time" className="itemMenu">Nosso time</Link>
                    <Link to="/contato" className="itemMenu">Contato</Link>
            </nav>
            </header>
            
        )
    }
}