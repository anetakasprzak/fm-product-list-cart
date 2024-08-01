import Cart from "./components/Cart";
import Card from "./components/Card";
import { fakeData } from "./data";

function App() {
  return (
    <div>
      <h1 className="text-[#260F08] font-[700] text-[4rem] mb-[3.2rem]">
        Desserts
      </h1>
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
