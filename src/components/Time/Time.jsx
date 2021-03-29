import React from "react";
import styles from "./Time.module.css";
import Membro from "./Membro";
import Ana from "../../assets/fotoAna.jpg";
import Thamy from "../../assets/fotoThamy.jpg";
import Mainara from "../../assets/fotoMainara.jpg";

export default function Time() {
  return (
    <>
      <div className={styles.containerPrinc + " animacao"}>
          <h1 className={styles.titulo}> Nosso Time </h1>
        <div className={styles.containerSec}> 
        <Membro
          img={Mainara}
          nome="Mainara Assis"
          miniBio="Augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo."
        />
      <Membro
        img={Ana}
        nome="Ana Paula"
        miniBio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel enim consequat lacus consectetur tempus nec sit amet tellus. Nam nec justo lacus. Sed sit."
      />
      <Membro
        img={Thamy}
        nome="Thamy Bessa"
        miniBio="Nunc varius arcu tortor, sit amet rutrum urna facilisis id. Mauris mattis in massa et condimentum. Proin dui leo, volutpat sed turpis a, malesuada commodo."
      />
    
      </div>
      </div>
    </>
  );
}
