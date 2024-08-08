import { CartItem } from "../App";
import { fakeData } from "../data";

interface ModalProps {
  cartItems: CartItem[];
  cleanCartItems: () => void;
  totalPrice: number;
}

function Modal({ cartItems, cleanCartItems, totalPrice }: ModalProps) {
  return (
    <div>
      <div className="absolute h-[auto] w-[60rem] bg-white top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-10 p-[4rem] flex flex-col gap-[2.4rem]">
        <img
          src="../../public/assets/images/icon-order-confirmed.svg"
          alt="icon order confirmed"
          className="w-[4.8rem]"
        />
        <div>
          <h2 className="text-[4rem] font-[700] text-[#260F08]">
            Order Confirmed
          </h2>
          <p className="text-[1.6rem] font-[400] text-[#87635A]">
            We hope you enjoy your food!
          </p>
        </div>

        <ul className="bg-[#FCF8F6] px-[2.4rem] pb-[2.4rem] rounded-[0.8rem]">
          {cartItems.map((item) => {
            return (
              <ModalCartItem
                key={item.id}
                id={item.id}
                quantity={item.quantity}
              />
            );
          })}

          <div className="flex items-center justify-between pt-[2.4rem]">
            <span className="text-[1.4rem] font-[400] text-[#260F08] ">
              Order Total
            </span>
            <span className="text-[2.4rem] font-[700] text-[#260F08]">
              £{totalPrice.toFixed(2)}
            </span>
          </div>
        </ul>
        <button
          className="w-[100%] bg-[#C73B0F] py-[1.6rem] text-white rounded-full"
          onClick={cleanCartItems}
        >
          Start New Order
        </button>
      </div>

      {/* OVERLAY */}
      <div className="fixed w-full h-[100vh] bg-black top-0 left-0 opacity-50 z-0"></div>
    </div>
  );
}

function ModalCartItem({ id, quantity }: CartItem) {
  const item = fakeData.find((item) => item.id === id);

  if (item == null) {
    return null;
  }

  return (
    <li className="py-[2.4rem] border-b-[1px] border-[#F5EEEC)] ">
      <div className="flex justify-between items-center">
        <div className="flex gap-[1.6rem]">
          <img
            src={item.image.thumbnail}
            alt={item.name}
            className="w-[4.8rem]"
          />
          <div className="flex flex-col">
            <h4 className="font-[600] text-[1.4rem] text-[#260F08]">
              {item.name}
            </h4>
            <div className="flex gap-[0.8rem] items-center">
              <span className="font-[600] text-[1.4rem] text-[#C73B0F]">
                {quantity}
              </span>
              <span className="font-[400] text-[1.4rem] text-[#87635A]">
                @ £{item.price.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
        <span className="font-[600] text-[1.6rem] text-[#260F08]">
          £{(item.price * quantity).toFixed(2)}
        </span>
      </div>
    </li>
  );
}

export default Modal;
