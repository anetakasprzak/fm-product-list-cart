import Cart from "./components/Cart";
import Card from "./components/Card";
import { fakeData } from "./data";

function App() {
  return (
    <div>
      <h1 className="text-red-500">Desserts</h1>
      <div>
        {fakeData?.map((item) => (
          <Card key={item.name} item={item} />
        ))}

        <Cart />
      </div>
    </div>
  );
}

export default App;
