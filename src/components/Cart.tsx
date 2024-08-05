function Cart() {
  return (
    <div className="flex flex-col shrink-0 w-[38.4rem] h-max bg-white p-[2.4rem] rounded-[1.2rem]">
      <h2 className="text-[#C73B0F] font-[700] text-[2.4rem] mb-[2.5rem]">
        Your Cart (0)
      </h2>
      {/* <EmptyCart /> */}
      <CartList />
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

function CartList() {
  return (
    <ul className="flex flex-col gap-5">
      <li className="border-b-[1px] border-[#F5EEEC)]">
        <CartItem />
      </li>
      <li>
        <CartItem />
      </li>
    </ul>
  );
}

function CartItem() {
  return (
    <div className="flex justify-between pb-8">
      <div className="flex flex-col">
        <h4 className="font-[600] text-[1.4rem] text-[#260F08]">item name</h4>
        <div className="flex gap-[0.8rem]">
          <span className="font-[600] text-[1.4rem] text-[#C73B0F]">1x</span>
          <span className="font-[400] text-[1.4rem] text-[#87635A]">
            @ £7.00
          </span>
          <span className="font-[600] text-[1.4rem] text-[#87635A]">
            £28.00
          </span>
        </div>
      </div>
      <button className="">
        <div className="border border-[#87635A] rounded-full p-[0.3rem]">
          <img src="../../public/assets/images/icon-remove-item.svg" />
        </div>
      </button>
    </div>
  );
}

export default Cart;
