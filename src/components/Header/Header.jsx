import { Link, useLocation } from "react-router-dom";
import s from "./Header.module.css";

export const Header = () => {
  const location = useLocation();

  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <Link
          to="/"
          className={`${s.link} ${location.pathname === "/" ? s.active : ""}`}
        >
          Волшебная кнопка
        </Link>
        <Link
          to="/calendar"
          className={`${s.link} ${
            location.pathname === "/calendar" ? s.active : ""
          }`}
        >
          Календарь
        </Link>
      </nav>
    </header>
  );
};
