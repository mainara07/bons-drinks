import React from "react";
import styles from "./Erro404.module.css";


const Erro404 = () => {
  return (
    <div>
      
      <h1 className={styles.title + " content"}>Página Não Encontrada</h1>
      <p className={styles.texto}>
        {" "}
        Parece que o endereço procurado não existe ...
      </p>
    </div>
  );
};

export default Erro404;
