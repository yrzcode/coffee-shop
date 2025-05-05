import drinks from "./data/drink";
import SubTitle from "./components/SubTitle";
import DrinkItem from "./components/DrinkItem";
import Checkout from "./components/Checkout";
import Title from "./components/Title";
import type { CartState } from "./types/cart";
import { useState } from "react";

const App = () => {
  const [cart, setCart] = useState<CartState>(
    drinks.reduce((acc, drink) => {
      acc[drink.id] = { quantity: 0 };
      return acc;
    }, {} as CartState)
  );

  const totalQuantity = Object.values(cart).reduce(
    (acc, drink) => acc + drink.quantity,
    0
  );

  const totalPrice = Object.entries(cart).reduce(
    (acc, [id, { quantity }]) =>
      acc + quantity * (drinks.find((d) => d.id === Number(id))?.price ?? 0),
    0
  );

  const handleAddToCart = (id: number) => {
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
        <div className="App-content">
          <div className="drink-list">
            {drinks.map((drink) => (
              <DrinkItem
                key={drink.id}
                name={drink.name}
                price={drink.price}
                quantity={cart[drink.id].quantity}
                onAddToCart={() => handleAddToCart(drink.id)}
              />
            ))}
          </div>
          <Checkout itemCount={totalQuantity} totalAmount={totalPrice} />
        </div>
      </main>
    </div>
  );
};

export default App;
