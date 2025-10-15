import styles from "./BasketItemCard.module.css";

function BasketItemCard({ item, handleQuantityChange, handleItemDelete }) {
  return (
    <article className={styles.BasketItemCardWrapper}>
      <img className={styles.ItemImage} src={item.image} alt="" />
      <div>
        <h1>Item name: {item.title}</h1>
        <div className={styles.ItemActionsWrapper}>
          <div className={styles.QuantityWrapper}>
            <button
              data-testid="decrement"
              onClick={() => handleQuantityChange(item.id, -1)}
            >
              -
            </button>
            <p>{item.quantity}</p>
            <button
              data-testid="increment"
              onClick={() => handleQuantityChange(item.id, 1)}
            >
              +
            </button>
          </div>
          <button
            data-testid="delete"
            className={styles.ActionDelete}
            onClick={() => handleItemDelete(item.id)}
          >
            Delete
          </button>
        </div>
      </div>
      <p>Price: £{item.price}</p>
    </article>
  );
}

export default BasketItemCard;
