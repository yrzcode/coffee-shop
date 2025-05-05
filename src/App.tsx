import SubTitle from "./components/SubTitle";
import DrinkItem from "./components/DrinkItem";
import Checkout from "./components/Checkout";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <SubTitle />
        <h1 className="App-header-title">Trackカフェ</h1>
        <p className="App-header-description">オライン注文システム</p>
      </header>
      <main className="App-main">
        <div className="App-content">
          <div className="drink-list">
            <DrinkItem name="コーヒー" price={480} notificationCount={3} />
            <DrinkItem name="紅茶" price={280} notificationCount={2} />
            <DrinkItem name="ミルク" price={180} notificationCount={0} />
            <DrinkItem name="コーラ" price={190} notificationCount={0} />
            <DrinkItem name="ビール" price={580} notificationCount={2} />
          </div>
          <Checkout itemCount={7} totalAmount={3160} />
        </div>
      </main>
    </div>
  );
};

export default App;
