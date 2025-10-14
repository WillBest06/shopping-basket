import { useOutletContext } from "react-router";
import styles from "./Basket.module.css";
import BasketItemCard from "./BasketItemCard/BasketItemCard";

function Basket() {
  // BasketItem = object containing ID of item + quantity
  // shopItem = object containing corresponding ID + item details

  const [basketItems, setBasketItems, shopItems] = useOutletContext();

  const detailedBasket = basketItems.map((basketItem) => {
    const shopItem = shopItems.find(
      (shopItem) => basketItem.id === shopItem.id
    );

    return {
      ...shopItem,
      quantity: basketItem.quantity,
    };
  });

  const handleQuantityChange = (id, delta) => {
    const index = basketItems.findIndex((item) => item.id === id);

    if (basketItems[index].quantity + delta === 0) {
      // deletes item from basket if down to 0
      setBasketItems([
        ...basketItems.slice(0, index),
        ...basketItems.slice(index + 1),
      ]);
      return;
    }

    const updatedItem = {
      ...basketItems[index],
      quantity: (basketItems[index].quantity += delta),
    };

    setBasketItems([
      ...basketItems.slice(0, index),
      updatedItem,
      ...basketItems.slice(index + 1),
    ]);
  };

  const handleItemDelete = (id) => {
    const index = basketItems.findIndex((item) => item.id === id);

    setBasketItems([
      ...basketItems.slice(0, index),
      ...basketItems.slice(index + 1),
    ]);
    return;
  };

  return (
    <section className={styles.BasketWrapper}>
      <div>
        {detailedBasket.map((item) => (
          <BasketItemCard
            key={item.id}
            item={item}
            handleQuantityChange={handleQuantityChange}
            handleItemDelete={handleItemDelete}
          ></BasketItemCard>
        ))}
      </div>

      <h2>
        Subtotal: £
        {detailedBasket
          .reduce(
            (subtotal, currentItem) =>
              subtotal + currentItem.price * currentItem.quantity,
            0
          )
          .toFixed(2)}
      </h2>
    </section>
  );
}

export default Basket;
