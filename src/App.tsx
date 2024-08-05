import Cart from "./components/Cart";
import Card from "./components/Card";
import { fakeData } from "./data";

function App() {
  return (
    <div className="bg-[#FCF8F6] p-[88px]">
      <div className="flex">
        <div className="flex flex-col">
          <h1 className="text-[#260F08] font-[700] text-[4rem] mb-[3.2rem]">
            Desserts
          </h1>
          <div className="flex gap-x-[2.4rem] gap-y-[3.2rem] flex-wrap flex-auto">
            {fakeData?.map((item) => (
              <Card key={item.name} item={item} />
            ))}
          </div>
        </div>
        <Cart />
      </div>
    </div>
  );
}

export default App;
