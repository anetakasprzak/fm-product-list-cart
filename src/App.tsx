import Cart from "./components/Cart";
import Card from "./components/Card";

function App() {
  return (
    <div>
      <h1 className="text-red-500">Desserts</h1>
      <div>
        <Card />
        <Cart />
      </div>
    </div>
  );
}

export default App;
