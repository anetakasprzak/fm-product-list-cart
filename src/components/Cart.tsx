function Cart() {
  return (
    <div>
      <button className="w-[16rem] h-[4.4rem] text-[1.4rem] flex items-center justify-center gap-2 border border-[#87635A] rounded-full hover:text-[#C73B0F] hover:border-[#C73B0F] transition-all duration-200">
        <img
          src="../../public/assets/images/icon-add-to-cart.svg"
          alt="add to cart icon"
        />
        <p>Add to cart</p>
      </button>

      <div className="text-[1.6rem]">
        <p className="text-[1.4rem] font-normal text-[#87635A]">Waffle</p>
        <p className="">Waffle with Berries</p>
        <span className="text-[#C73B0F]">$6.50</span>
      </div>
    </div>
  );
}

export default Cart;
