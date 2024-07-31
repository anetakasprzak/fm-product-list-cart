interface CardProps {
  item: {
    image: {
      thumbnail: string;
      mobile: string;
      tablet: string;
      desktop: string;
    };
    name: string;
    category: string;
    price: number;
  };
}

function Card({ item }: CardProps) {
  const { name, category, price, image } = item || {};

  return (
    <div>
      <div className="w-[25rem]">
        <picture>
          <source srcSet={image.mobile} media="(max-width: 23.4em)" />
          <source srcSet={image.tablet} media="(max-width: 47.8em)" />
          <source srcSet={image.desktop} media="(max-width: 90em)" />
          <img src={image.desktop} alt="image" />
        </picture>
      </div>

      <button className="w-[16rem] h-[4.4rem] text-[1.4rem] flex items-center justify-center gap-2 border border-[#87635A] rounded-full hover:text-[#C73B0F] hover:border-[#C73B0F] transition-all duration-200">
        <img
          src="../../public/assets/images/icon-add-to-cart.svg"
          alt="add to cart icon"
        />
        <p>Add to cart</p>
      </button>

      <div>
        <p className="text-[1.4rem] font-normal text-[#87635A]">{category}</p>
        <p>{name}</p>
        <span className="text-[#C73B0F]">£{price}</span>
      </div>
    </div>
  );
}

export default Card;
