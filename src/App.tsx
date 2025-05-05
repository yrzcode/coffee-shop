import drinks from "./data/drink";
import SubTitle from "./components/SubTitle";
import DrinkItem from "./components/DrinkItem";
import Checkout from "./components/Checkout";
import Title from "./components/Title";
import type { CartState } from "./types/cart";
import { useState } from "react";
import DrinkItemList from "./components/DrinkList";

const App = () => {
  // カートの状態を管理
  const [cart, setCart] = useState<CartState>(
    drinks.reduce((acc, drink) => {
      acc[drink.id] = { quantity: 0 };
      return acc;
    }, {} as CartState)
  );

  // カート内の商品数を計算
  const totalQuantity = Object.values(cart).reduce(
    (acc, drink) => acc + drink.quantity,
    0
  );

  // カート内の合計金額を計算
  const totalPrice = Object.entries(cart).reduce(
    (acc, [id, { quantity }]) =>
      acc + quantity * (drinks.find((d) => d.id === id)?.price ?? 0),
    0
  );

  // カートに商品を追加
  const handleAddToCart = (id: string) => {
    setCart((prev) => {
      const newCart = { ...prev };
      newCart[id].quantity += 1;
      return newCart;
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <SubTitle />
        <Title />
      </header>
      <main className="App-main">
        <DrinkItemList cart={cart} handleAddToCart={handleAddToCart} />
        <Checkout itemCount={totalQuantity} totalAmount={totalPrice} />
      </main>
    </div>
  );
};

export default App;
