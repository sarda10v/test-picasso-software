import React, { useState } from "react";
import Companies from "../../UI/Companies/Companies";
import styles from "./Form.module.scss";
import { useSelector } from "react-redux";

const Form = () => {
  const [value, setValue] = useState("");

  const companies = useSelector((state) => state.companies);
  const companiesFilt = companies.filter((item) => {
    return (
      item.name.toLowerCase().includes(value.toLowerCase().toString()) ||
      item.domain.toLowerCase().includes(value.toLowerCase().toString())
    );
  });

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <h6>Компания</h6>
        <form>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <ul className={styles.autocomplete}>
            {value
              ? companiesFilt.map((company, index) => {
                  return (
                    <li key={index} className={styles.autocompleteItem}>
                      {company.name}
                    </li>
                  );
                })
              : null}
          </ul>
        </form>
        <Companies value={value} setValue={setValue} />
      </div>
    </div>
  );
};

export default Form;
