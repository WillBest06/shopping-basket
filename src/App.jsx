import { NavLink, Outlet } from "react-router";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [basketItems, setBasketItems] = useState([]);
  const [shopItems, setShopItems] = useState([]);

  useEffect(() => {
    const fetchFakeItems = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setShopItems(data);
    };

    fetchFakeItems();
  }, []);

  const getBasketQuantity = () => {
    return basketItems.length > 0
      ? basketItems.reduce(
          (numOfItems, currentItem) => numOfItems + currentItem.quantity,
          0
        )
      : 0;
  };

  const navLinkClassName = ({ isActive }) =>
    isActive ? `${styles.nav_link} ${styles.active}` : `${styles.nav_link}`;

  return (
    <>
      <nav className={styles.site_header_nav}>
        <ul className={styles.nav_menu}>
          {["Home", "Shop", "Basket"].map((page) => {
            const pageLower = page.toLowerCase();

            if (pageLower === "basket")
              return (
                <li key={pageLower} className={styles.nav_item}>
                  <NavLink to={pageLower} className={navLinkClassName}>
                    {page}
                  </NavLink>
                  <span className={styles.basketSize}>
                    {getBasketQuantity()}
                  </span>
                </li>
              );

            return (
              <li key={pageLower} className={styles.nav_item}>
                <NavLink to={page.toLowerCase()} className={navLinkClassName}>
                  {page}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
      <Outlet context={[basketItems, setBasketItems, shopItems]} />
    </>
  );
}

export default App;
