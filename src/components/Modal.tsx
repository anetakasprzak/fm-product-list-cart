function Modal() {
  function startNewOrder() {}

  return (
    <div>
      <div className="absolute h-[auto] w-[60rem] bg-white top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-10 p-[4rem]">
        <img src="../../public/assets/images/icon-order-confirmed.svg" />
        <h2 className="text-[4rem] font-[700] text-[#260F08]">
          Order Confirmed
        </h2>
        <p className="text-[1.6rem] font-[400] text-[#87635A]">
          We hope you enjoy your food!
        </p>

        <div className="bg-[#FCF8F6] p-[2.4rem] rounded-[0.8rem]">
          <div className="border-b-[1px] border-[#F5EEEC)]">CART ITEM</div>

          <div className="flex items-center justify-between">
            <span className="text-[1.4rem] font-[400] text-[#260F08]">
              Order Total
            </span>
            <span className="text-[2.4rem] font-[700] text-[#260F08]">
              £50.00
            </span>
          </div>
        </div>
        <button
          className="w-[100%] bg-[#C73B0F] py-[1.6rem] text-white rounded-full"
          onClick={startNewOrder}
        >
          Start New Order
        </button>
      </div>

      {/* OVERLAY */}
      <div className="fixed w-full h-full bg-black top-0 left-0 opacity-50 z-0"></div>
    </div>
  );
}

export default Modal;
