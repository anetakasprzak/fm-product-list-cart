function Cart() {
  return (
    <div className="flex flex-col shrink-0 w-[38.4rem] h-max bg-white p-[2.4rem] rounded-[1.2rem]">
      <h2 className="text-[#C73B0F] font-[700] text-[2.4rem] mb-[2.5rem]">
        Your Cart (0)
      </h2>
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
    </div>
  );
}

export default Cart;
