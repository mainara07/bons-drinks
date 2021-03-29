import React from "react";
import styles from "./Input.module.css";

const Input = ({
  id,
  label,
  onChange,
  value,
  type,
  onBlur,
  placeholder,
}) => {
 

  return (
    <div className={styles.container}>
      <label htmlFor={id} className={styles.containerLabel}>
        {label}
      </label>
      <input
        className={styles.campoTexto}
        id={id}
        type={type}
        name={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
