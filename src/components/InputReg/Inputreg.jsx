import { NavLink } from "react-router-dom";
import styles from '../Input/Input.module.css';
import { useState } from "react";
import axios from "axios";

const Inputreg = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const Register = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8080/auth/register", { username, email, password});
            localStorage.setItem("access_token", res.data.token);
            setMessage("ok");
        } catch (error) {
            console.log(error);
            setMessage("no");
        }
    };

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
                <form onSubmit={Register}>
                    <div className={styles.inputStyle}>
                        <input
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            type="text"
                            placeholder="NickName"
                            className={styles.inputField}
                        />
                    </div>
                    <div className={styles.spacing}></div>
                    <div className={styles.inputStyle}>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            type="email"
                            placeholder="Email"
                            className={styles.inputField}
                        />
                    </div>
                    <div className={styles.spacing}></div>
                    <div className={styles.inputStyle}>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            type="password"
                            placeholder="Password"
                            className={styles.inputField}
                        />
                    </div>
                    <div className={styles.spacing}></div>
                    <button type="submit" className={styles.btnStyle}>Sign up</button>
                    {message && <p>{message}</p>}
                </form>
            </div>
        </div>
    );
};

export default Inputreg;
