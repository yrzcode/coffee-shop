import styles from "../sass/checkout.module.scss";

interface CheckoutProps {
  itemCount: number;
  totalAmount: number;
}

const Checkout = ({ itemCount, totalAmount }: CheckoutProps) => {
  return (
    <div className={styles.checkout}>
      <h2 className={styles.title}>お会計</h2>
      <hr className={styles.divider} />
      <div className={styles.detail}>
        <p className={styles.itemCount}>
          商品数：<span id="count">{itemCount}</span> 個
        </p>
        <p className={styles.totalAmount}>
          合計金額：<span id="price">{totalAmount}</span> 円
        </p>
      </div>
    </div>
  );
};

export default Checkout;
