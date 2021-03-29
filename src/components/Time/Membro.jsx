import React from "react";
import styles from "./Membro.module.css";

const Membro = (props) => {
  return (
    <div className={styles.containerMembro}>
      <div className={styles.containerDescr}>
        <img src={props.img} className={styles.imgMembro} />
        <h3 className={styles.nomeMembro}>{props.nome}</h3>
        <p className={styles.miniBio}>{props.miniBio}</p>
      </div>
    </div>
  );
};

export default Membro;
