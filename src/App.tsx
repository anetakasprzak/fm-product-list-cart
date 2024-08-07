import Cart from "./components/Cart";
import Card from "./components/Card";
import { fakeData } from "./data";
import { useState } from "react";

export type CartItem = { id: number; quantity: number };

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const getItemQuantity = (id: number) =>
    cartItems.find((item) => item.id === id)?.quantity || 0;

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const increaseCartQuantity = (id: number) => {
    return setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decreaseCartQuantity = (id: number) => {
    return setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  // const removeCartItem = (id: number) => {
  //   return setCartItems((currItems) =>
  //     currItems.filter((item) => item.id !== id)
  //   );
  // };

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
                getItemQuantity={getItemQuantity}
                increaseCartQuantity={increaseCartQuantity}
                decreaseCartQuantity={decreaseCartQuantity}
              />
            ))}
          </div>
        </div>
        <Cart cartItems={cartItems} cartQuantity={cartQuantity} />
      </div>
    </div>
  );
}

export default App;
