import React from 'react'
import styles from "./Card.module.css"


//componente card com espaço para imagem e espaço para titulo, recebido via props 
//src da imagem o strDrinkThumb vindo da API 

function Card (props) {
    return (
        <div className={styles.containerCard}>
            <img className={styles.cardImg} src= {props.image}/> 
            <p className={styles.cardTexto}> {props.titulo} </p>
        </div>
    )
}
export default Card