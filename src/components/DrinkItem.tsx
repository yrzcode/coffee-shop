import styles from "../sass/drinkItem.module.scss";

interface DrinkItemProps {
  name: string;
  price: number;
  quantity: number;
  onAddToCart: () => void;
}

const DrinkItem = ({ name, price, quantity, onAddToCart }: DrinkItemProps) => {
  return (
    <button type="button" className={styles.drinkItem} onClick={onAddToCart}>
      <span className={styles.name}>{name}</span>
      <span className={styles.price}>{price} 円</span>
      {quantity !== undefined && (
        <span className={styles.notification}>{quantity}</span>
      )}
    </button>
  );
};

export default DrinkItem;
