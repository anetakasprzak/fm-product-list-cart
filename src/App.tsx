import Cart from "./components/Cart";
import Card from "./components/Card";
import { fakeData } from "./data";
import { useState } from "react";

function App() {
  const [productsInTheCart, setProductsInTheCart] = useState([
    {
      image: {
        thumbnail: "./assets/images/image-waffle-thumbnail.jpg",
        mobile: "./assets/images/image-waffle-mobile.jpg",
        tablet: "./assets/images/image-waffle-tablet.jpg",
        desktop: "./assets/images/image-waffle-desktop.jpg",
      },
      name: "Waffle with Berries",
      category: "Waffle",
      price: 6.5,
    },
  ]);

  return (
    <div className="bg-[#FCF8F6] p-[8.8rem] lg:py-[7rem] lg:px-[6rem] xsm:py-[5rem] xsm:px-[2rem]">
      <div className="flex lg:flex-col lg:items-center">
        <div className="flex flex-col lg:mb-[6rem]">
          <h1 className="text-[#260F08] font-[700] text-[4rem] mb-[3.2rem] lg:self-start">
            Desserts
          </h1>
          <div className="flex gap-x-[2.4rem] gap-y-[3.2rem] flex-wrap lg:flex lg:justify-center">
            {fakeData?.map((item) => (
              <Card
                key={item.name}
                item={item}
                setProductsInTheCart={setProductsInTheCart}
              />
            ))}
          </div>
        </div>
        <Cart productsInTheCart={productsInTheCart} />
      </div>
    </div>
  );
}

export default App;
