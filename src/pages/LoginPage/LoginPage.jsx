/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import s from "./LoginPage.module.css";
import { useState } from "react";

export const LoginPage = ({ user, setUser }) => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const changeUser = (e) => {
    setUser(e.target.value);
    setError("");
  };

  const userLogin = (e) => {
    e.preventDefault();
    if (!user.trim()) {
      setError("Логин не может быть пустым");
      return;
    }
    navigate("/");
  };

  return (
    <form className={s.form}>
      <h1>Авторизация</h1>
      <input
        className={s.login}
        type="text"
        onChange={(e) => changeUser(e)}
        placeholder="Введите логин"
      />
      {error && (
        <p className={s.error}>{error}</p>
      )}
      <button className={s.button} onClick={(e) => userLogin(e)}>
        Войти
      </button>
    </form>
  );
};
