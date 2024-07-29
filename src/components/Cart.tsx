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
    </div>
  );
}

export default Cart;
