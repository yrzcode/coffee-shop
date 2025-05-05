import styles from "../sass/title.module.scss";

const Title = () => {
  return (
    <>
      <h1 className={styles.title}>
        Trackカフェ
        <span className={styles.emoji}>☕</span>
      </h1>
      <p className={styles.description}>ドリンクをオンラインで注文✨</p>
      <hr className={styles.divider} />
    </>
  );
};

export default Title;
