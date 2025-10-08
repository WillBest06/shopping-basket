import { NavLink, Outlet } from "react-router";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <nav className={styles.site_header_nav}>
        <ul className={styles.nav_menu}>
          <li className={styles.nav_item}>
            <NavLink
              to={"home"}
              className={({ isActive }) =>
                isActive
                  ? `${styles.nav_link} ${styles.active}`
                  : `${styles.nav_link}`
              }
            >
              Home
            </NavLink>
          </li>
          <li className={styles.nav_item}>
            <NavLink
              to={"shop"}
              className={({ isActive }) =>
                isActive
                  ? `${styles.nav_link} ${styles.active}`
                  : `${styles.nav_link}`
              }
            >
              Shop
            </NavLink>
          </li>
          <li className={styles.nav_item}>
            <NavLink
              to={"basket"}
              className={({ isActive }) =>
                isActive
                  ? `${styles.nav_link} ${styles.active}`
                  : `${styles.nav_link}`
              }
            >
              Basket
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
