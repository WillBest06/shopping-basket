import { useState } from "react";
import styles from "./ItemCard.module.css";
import { useOutletContext } from "react-router";

function ItemCard({ item }) {
  const [quantity, setQuantity] = useState(0);
  const [basketItems, setBasketItems] = useOutletContext();

  const handleAddToBasket = (item) => {
    if (quantity === 0) return null;

    const itemIndex = basketItems.findIndex((element) => {
      return element.id === item.id;
    });

    if (itemIndex !== -1) {
      const newQuantity = basketItems[itemIndex].quantity + quantity;

      const updatedItem = {
        ...basketItems[itemIndex],
        quantity: newQuantity,
      };

      setBasketItems((prev) => [
        ...prev.slice(0, itemIndex),
        updatedItem,
        ...prev.slice(itemIndex + 1),
      ]);
    } else {
      setBasketItems((prev) => [...prev, { id: item.id, quantity: quantity }]);
    }
  };

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

  return item.title !== null ? (
    <article className={styles.ItemWrapper}>
      <img className={styles.ItemImage} src={item.image} alt="" />
      <div className={styles.ItemInfo}>
        <h2>{item.title}</h2>
        <div className={styles.DescWrapper}>
          <p>£{item.price}</p>
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
            data-testid="quantity_input"
          />
          <button
            className={`${styles.qtyChangeBtn} ${styles.plus}`}
            onClick={() => changeQuantity(1)}
          >
            +
          </button>
        </div>
        <button
          className={styles.AddToBasket}
          onClick={() => handleAddToBasket(item)}
        >
          Add to basket
        </button>
      </div>
    </article>
  ) : (
    <div>Sorry</div>
  );
}

export default ItemCard;
