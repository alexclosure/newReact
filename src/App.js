import styles from "./App.css";
import React, { useState, useRef } from "react";

export const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [error, setError] = useState("");

  const submitButtonRef = useRef(null);

  const onEmailChange = ({ target }) => setEmail(target.value);
  const onPasswordChange = ({ target }) => {
    setPassword(target.value);
    target.value.length < 8
      ? setError("Длина пароля должна быть не менее 8 символов")
      : setError(null);
  };

  const onCPasswordChange = ({ target }) => {
    setCPassword(target.value);
    password !== target.value
      ? setError("Пароли не совпадают")
      : setError(null);

    setTimeout(() => {
      if (submitButtonRef.current) {
        submitButtonRef.current.focus();
        console.log(`match`);
      }
    }, 0);
  };

  return (
    <div className={styles.app}>
      <form>
        {error && <div className={styles.error}>{error}</div>}
        <input
          name="email"
          type="email"
          value={email}
          placeholder="email"
          onChange={onEmailChange}
        />
        <input
          name="password"
          type="password"
          value={password}
          placeholder="password"
          //minLength="8"
          onChange={onPasswordChange}
        />
        <input
          name="confirmPassword"
          type="password"
          value={cPassword}
          placeholder="confirm password"
          onChange={onCPasswordChange}
        />
        <button
          name="registr"
          type="submit"
          ref={submitButtonRef}
          disabled={!!error || !password || !cPassword}
        >
          Зарегаться
        </button>
      </form>
    </div>
  );
};
