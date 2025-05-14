import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import generalstyles from "../Style.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div  className={generalstyles.dflexBetween}>
        <NavLink to="/" >
          <h1>Fight Club</h1>
        </NavLink>

        <nav>
          <ul className={styles.navigation}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                }
              >
                Contact us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                }
              >
                About us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/battle"
                className={({ isActive }) =>
                  isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                }
              >
                Battle
              </NavLink>
            </li>
          </ul>
        </nav>

        <NavLink to="/login">
          <button className={styles.btnStyle}>Log in</button>
        </NavLink>
      </div>
    </header>
  );
}