import { NavLink } from "react-router-dom";
import styles from './Input.module.css';

const Login = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <NavLink
                    to="/login"
                    className={({ isActive }) =>
                       isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                    }
                >
                    Log in
                </NavLink>
                <NavLink
                    to="/register"
                    className={({ isActive }) =>
                       isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                    }
                >
                    Sign up
                </NavLink>
            </div>
            <div className={styles.formContainer}>
                <div className={styles.inputStyle}>
                    <input type="text" placeholder="NickName" className={styles.inputField} />
                </div>
                <div className={styles.spacing}></div>
                <div className={styles.inputStyle}>
                    <input type="password" placeholder="Password" className={styles.inputField} />    
                </div>
                <button className={styles.btnStyle}>Log in</button>
            </div>
        </div>
    );
};

export default Login;
