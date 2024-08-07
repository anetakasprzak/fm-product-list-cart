import type { CartItem } from "../App";
import { fakeData } from "../data";

function Cart({
  cartItems,
  cartQuantity,
  removeCartItem,
}: {
  cartItems: CartItem[];
  cartQuantity: number;
  removeCartItem: (id: number) => void;
}) {
  return (
    <div className="flex flex-col shrink-0 w-[38.4rem] h-max bg-white p-[2.4rem] rounded-[1.2rem] lg:w-[100%]">
      <h2 className="text-[#C73B0F] font-[700] text-[2.4rem]">
        Your Cart ({cartQuantity})
      </h2>

      {!cartItems.length ? (
        <EmptyCart />
      ) : (
        <CartList cartItems={cartItems} removeCartItem={removeCartItem} />
      )}
    </div>
  );
}

function EmptyCart() {
  return (
    <div className="flex flex-col items-center py-3">
      <img
        src="../../public/assets/images/illustration-empty-cart.svg"
        alt="empty cart image"
        className="h-[12.8rem] mb-[1.5rem]"
      />
      <p className="text-[#87635A] font-[600] text-[1.4rem]">
        Your added items will appear here
      </p>
    </div>
  );
}

function CartList({
  cartItems,
  removeCartItem,
}: {
  cartItems: CartItem[];
  removeCartItem: (id: number) => void;
}) {
  const totalPrice = cartItems.reduce((total, cartItem) => {
    const item = fakeData.find((item) => item.id === cartItem.id);
    return total + (item?.price || 0) * cartItem.quantity;
  }, 0);

  return (
    <div>
      <ul className="flex flex-col">
        {cartItems?.map((item) => (
          <li key={item.id} className="border-b-[1px] border-[#F5EEEC)]">
            <CartItem
              id={item.id}
              quantity={item.quantity}
              removeCartItem={removeCartItem}
            />
          </li>
        ))}
      </ul>

      {/* SUMMARY */}
      <div className="flex flex-col gap-[2.4rem] pt-[2.4rem]">
        <div className="flex justify-between items-center">
          <span className="font-[400] text-[1.4rem] text-[#260F08]">
            Order Total
          </span>
          <span className="font-[700] text-[2.4rem] text-[#260F08]">
            £{totalPrice.toFixed(2)}
          </span>
        </div>

        <div className="flex gap-2 justify-center items-center bg-[#FCF8F6] rounded-[0.8rem] py-[1.6rem] ">
          <img src="../../public/assets/images/icon-carbon-neutral.svg" />
          <p className="text-[#260F08] text-[1.4rem] font-[400]">
            This is <span className="font-[600]">carbon-neutral</span> delivery
          </p>
        </div>
        <button className="bg-[#C73B0F] text-[#fff] text-[1.6rem] font-[600] w-[100%] rounded-full py-[1.6rem] hover:bg-[#a22e0b] transition-all duration-200">
          Confirm Order
        </button>
      </div>
    </div>
  );
}

function CartItem({
  id,
  quantity,
  removeCartItem,
}: CartItem & { removeCartItem: (id: number) => void }) {
  const item = fakeData.find((item) => item.id === id);

  if (item == null) {
    return null;
  }

  return (
    <div className="flex justify-between py-7">
      <div className="flex flex-col">
        <h4 className="font-[600] text-[1.4rem] text-[#260F08]">{item.name}</h4>
        <div className="flex gap-[0.8rem] items-center">
          <span className="font-[600] text-[1.4rem] text-[#C73B0F]">
            {quantity}
          </span>
          <span className="font-[400] text-[1.4rem] text-[#87635A]">
            @ £{item.price.toFixed(2)}
          </span>
          <span className="font-[600] text-[1.4rem] text-[#87635A]">
            £{(item.price * quantity).toFixed(2)}
          </span>
        </div>
      </div>
      <button className="" onClick={() => removeCartItem(id)}>
        <div className="border border-[#87635A] rounded-full p-[0.3rem]">
          <img src="../../public/assets/images/icon-remove-item.svg" />
        </div>
      </button>
    </div>
  );
}

export default Cart;
