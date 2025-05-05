import styles from "../sass/drinkList.module.scss";
import drinks from "../data/drink";
import DrinkItem from "./DrinkItem";
interface DrinkItemListProps {
  cart: { [key: string]: { quantity: number } };
  handleAddToCart: (id: string) => void;
}

export default function DrinkItemList({
  cart,
  handleAddToCart,
}: DrinkItemListProps) {
  return (
    <div className={styles.list}>
      {drinks.map((drink) => (
        <DrinkItem
          key={drink.id}
          id={drink.id}
          name={drink.name}
          price={drink.price}
          quantity={cart[drink.id].quantity}
          onAddToCart={() => handleAddToCart(drink.id)}
        />
      ))}
    </div>
  );
}
