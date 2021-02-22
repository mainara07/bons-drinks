import React, { Component } from "react"
import '../css/Form.css'

export default class Form extends Component {
    render() {
        return (
            <section className="BodyForm">
                <h1 className="TituloContato">Contato</h1>
                
                <div className="Container">
                <form>
                <div className="Inputs">
                    <label className="Nome">Nome:</label>
                    <input type="text"/>
                </div>
                <div className="Inputs">
                    <label className="Email" >Email:</label>
                    <input type="text"/>
                </div>
                <div className="Inputs">
                    <label className="Mensagem">Mensagem</label>
                    <textarea></textarea>
                </div>
                    <button type="submit">Enviar</button>
                </form>
                </div>
            </section>)
    
    }
}