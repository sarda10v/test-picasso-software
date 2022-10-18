import React, { useState } from "react";
import Companies from "../../UI/Companies/Companies";
import styles from "./Form.module.scss";

const Form = () => {
  const [value, setValue] = useState("");

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <h6>Компания</h6>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Companies value={value} setValue={setValue} />
      </div>
    </div>
  );
};

export default Form;
