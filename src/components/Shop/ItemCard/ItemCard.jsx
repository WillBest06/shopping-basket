import { useState } from "react";
import styles from "./ItemCard.module.css";

function ItemCard({ item }) {
  const [quantity, setQuantity] = useState(0);

  const changeQuantity = (payload) => {
    if (typeof payload === "number") {
      const delta = payload;

      if (quantity === 0 && delta === -1) return;

      setQuantity((prev) => prev + delta);
      return;
    }

    if (payload && payload.target) {
      const event = payload;
      const stringValue = event.target.value;
      const numericValue = parseInt(stringValue, 10); // 10 is base 10 number system

      if (stringValue === "") {
        setQuantity(0);
      } else if (!isNaN(numericValue) && numericValue >= 0) {
        setQuantity(numericValue);
      }
    }
  };

  return (
    <article className={styles.ItemWrapper}>
      <img className={styles.ItemImage} src={item.image} alt="" />
      <div className={styles.ItemInfo}>
        <h2>{item.title}</h2>
        <div className={styles.DescWrapper}>
          <p className={styles.ItemDesc}>{item.description}</p>
        </div>
        <div className={styles.quantityWrapper}>
          <button
            className={`${styles.qtyChangeBtn} ${styles.minus}`}
            onClick={() => changeQuantity(-1)}
          >
            -
          </button>
          <input
            className={styles.qtyInput}
            type="tel"
            onChange={changeQuantity}
            value={quantity}
          />
          <button
            className={`${styles.qtyChangeBtn} ${styles.plus}`}
            onClick={() => changeQuantity(1)}
          >
            +
          </button>
        </div>
        <button className={styles.AddToBasket}>Add to basket</button>
      </div>
    </article>
  );
}

export default ItemCard;
