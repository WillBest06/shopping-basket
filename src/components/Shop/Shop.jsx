import { useEffect, useState } from "react";
import ItemCard from "./ItemCard/ItemCard.jsx";
import styles from "./Shop.module.css";

function Shop() {
  const [shopItems, setShopItems] = useState([]);

  useEffect(() => {
    const fetchFakeItems = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setShopItems(data);
    };

    fetchFakeItems();
  }, []);

  return (
    <main className={styles.ItemGrid}>
      {shopItems.map((item) => (
        <ItemCard key={item.id} item={item}></ItemCard>
      ))}
    </main>
  );
}

export default Shop;
