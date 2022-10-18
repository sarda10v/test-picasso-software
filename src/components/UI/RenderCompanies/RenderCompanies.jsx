import styles from "./RenderCompanies.module.scss";

const RenderCompanies = ({ item }) => {
  return (
    <li>
      <div className={styles.imgSize}>
        <img src={item.logo} alt={item.name} />
      </div>
      <div className={styles.titleAndDomain}>
        <div className={styles.title}>{item.name}</div>
        <div className={styles.domain}>{item.domain}</div>
      </div>
    </li>
  );
};

export default RenderCompanies;
