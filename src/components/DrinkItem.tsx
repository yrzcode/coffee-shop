import styles from "../sass/drinkItem.module.scss";

interface DrinkItemProps {
  id: string;
  name: string;
  price: number;
  quantity: number;
  onAddToCart: () => void;
}

const DrinkItem = ({
  id,
  name,
  price,
  quantity,
  onAddToCart,
}: DrinkItemProps) => {
  return (
    <button
      id={id}
      type="button"
      className={styles.drinkItem}
      onClick={onAddToCart}
    >
      <span className={styles.name}>{name}</span>
      <span className={styles.price}>{price} 円</span>
      {quantity !== undefined && (
        <div id={`${id}-count`} className={styles.quantity}>
          {quantity}
        </div>
      )}
    </button>
  );
};

export default DrinkItem;
