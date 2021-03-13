import React, { Component } from "react"
import styles from './Footer.module.css'


export default class Header extends Component {
    render () {
        return (
            //estou chamando o estilo que criei no App.js já que será igual em todas as páginas
                <footer className='rodape'>
                    <p className={styles.textoRodape}>Alguns direitos reservados &copy; Resilia 2021</p>
                </footer>
        )
    }
}
