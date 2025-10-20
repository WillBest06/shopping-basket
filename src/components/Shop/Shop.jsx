import ItemCard from "./ItemCard/ItemCard.jsx";
import styles from "./Shop.module.css";
import { useOutletContext } from "react-router";

function Shop() {
  const [, , shopItems] = useOutletContext();

  return shopItems && shopItems.length > 0 ? (
    <main className={styles.ItemGrid}>
      {shopItems.map((item) => (
        <ItemCard key={item.id} item={item}></ItemCard>
      ))}
    </main>
  ) : (
    <div>No items found</div>
  );
}

export default Shop;
