import styles from "../sass/drinkItem.module.scss";

interface DrinkItemProps {
  name: string;
  price: number;
  notificationCount?: number;
}

const DrinkItem = ({ name, price, notificationCount }: DrinkItemProps) => {
  return (
    <button type="button" className={styles.drinkItem}>
      <span className={styles.name}>{name}</span>
      <span className={styles.price}>{price} 円</span>
      {notificationCount !== undefined && (
        <span className={styles.notification}>{notificationCount}</span>
      )}
    </button>
  );
};

export default DrinkItem;
