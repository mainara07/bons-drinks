import React from 'react';
import styles from './TextArea.module.css';

const TextArea = ({ id, label,} ) => {
  return (
    <div className={styles.container}>
      <label htmlFor={id} className={styles.labelContent}>
        {label}
      </label>
      <textarea
        className={styles.areaTexto}
        type="text"
        id={id}
        name={id}
      ></textarea>
    </div>
  );
};

export default TextArea;