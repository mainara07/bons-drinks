import React, { Component } from "react"
import '../css/Header.css'

export default class Header extends Component {
    render() {
        return (
            <div className="HeaderApp">
                    <a href="#" className="ItemMenu">Drinks</a>
                    <a href="#" className="ItemMenu">Sobre nós</a>
                    <a href="#" className="menuLogo">Bons Drinks</a>
                    <a href="#" className="ItemMenu">Nosso time</a>
                    <a href="#" className="ItemMenu">Contato</a>
            </div>
        )
    }
}