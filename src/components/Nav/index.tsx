import { useProfile } from "context/Profile";
import styles from "./style.module.css";

const NavBar = () => {
  const { hoursCompleted } = useProfile();

  return (
    <nav className={styles.nav}>
      <h2>Horas Integralizada: {hoursCompleted} / 3.690</h2>
    </nav>
  );
};

export default NavBar;
