import React from "react";
import styles from "./Form.module.css";
import contactPic from "../../../assets/contact-pic.jpg";
import Button from "../Button";
import Input from "../Input/Input";
import TextArea from "../TextArea/TextArea";

function Form() {

  const [nome, setNome] = React.useState("")
  const [email, setEmail] = React.useState("")

  return (
    <>
      <div className={styles.container + ' animacao'}>
        <h1 className={styles.titulo}>Contato</h1>
        <img
          src={contactPic}
          className={styles.imgContainer}
          alt="Typewriter"
        ></img>
        <form className={styles.containerForm}>
          <Input placeholder= "Escreva seu nome" id="nome" label="Nome:" type="text" value ={nome} onChange={(event) => {setNome(event.target.value)}}/>
          <Input placeholder= "Escreva seu e-mail" id="email" label="E-mail:" type="email" value ={email}  onChange={(event) => {setEmail(event.target.value)}} />

          <TextArea
            id="mensagem"
            label="Mensagem:"
            placeholder= "Digite sua mensagem aqui"
          />
          <div className={styles.btnGrid}>
            <Button style={styles.btnStyle}> Enviar </Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;
