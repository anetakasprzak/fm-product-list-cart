function Modal() {
  return (
    <div className="grid place-items-center">
      <div className="absolute h-[500px] w-[300px] bg-pink-400 top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-10">
        <img src="../../public/assets/images/icon-order-confirmed.svg" />
        <h2>Order Confirmed</h2>
        <p>We hope you enjoy your food!</p>

        <div className="bg-[#FCF8F6]">
          <div>CART ITEM</div>

          <div className="flex">
            <span>Order Total</span>
            <span>£50.00</span>
          </div>
        </div>
        <button>Start New Order</button>
      </div>

      {/* OVERLAY */}
      <div className="absolute bg-slate-500 top-0 left-0 w-[100vw] h-[100%] opacity-50 z-0"></div>
    </div>
  );
}

export default Modal;
