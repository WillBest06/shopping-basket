import ItemCard from "./ItemCard/ItemCard.jsx";
import styles from "./Shop.module.css";
import { useOutletContext } from "react-router";

function Shop() {
  const [, , shopItems] = useOutletContext();

  return (
    <main className={styles.ItemGrid}>
      {shopItems.map((item) => (
        <ItemCard key={item.id} item={item}></ItemCard>
      ))}
    </main>
  );
}

export default Shop;
