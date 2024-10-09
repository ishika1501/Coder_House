import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={`${styles.navigation} container`}>
       <div className={styles.logo}>
        <img src="/images/logo1.png" alt="do some coding logo" />
      </div>

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>x
      </ul>
    </nav>
  );
};

export default Navigation;