import { useState } from "react";

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
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div>
      <div className="w-[25rem] md:w-[21.3rem] sm:w-[32.7rem] relative">
        <picture className="">
          <source srcSet={image.mobile} media="(max-width: 30em)" />
          <source srcSet={image.tablet} media="(max-width: 47.8em)" />
          <source srcSet={image.desktop} media="(max-width: 90em)" />
          <img
            src={image.desktop}
            alt="image"
            className="rounded-[0.8rem] relative"
          />
        </picture>

        <div onClick={() => setIsClicked(true)}>
          {!isClicked && (
            <button className="w-[16rem] h-[4.4rem] text-[1.4rem] flex items-center justify-center gap-2 bg-white border border-[#87635A] rounded-full hover:text-[#C73B0F] hover:border-[#C73B0F] transition-all duration-200 absolute top-[90%] left-[50%] translate-x-[-50%]">
              <img
                src="../../public/assets/images/icon-add-to-cart.svg"
                alt="add to cart icon"
              />
              <p>Add to cart</p>
            </button>
          )}
          {isClicked && (
            <div className="w-[16rem] h-[4.4rem] text-[1.4rem]">
              <p>CLICKED</p>
            </div>
          )}
        </div>
      </div>

      <div className="mt-[3.6rem]">
        <p className="text-[1.4rem] font-normal text-[#87635A] ">{category}</p>
        <p>{name}</p>
        <span className="text-[#C73B0F]">£{price.toFixed(2)}</span>
      </div>
    </div>
  );
}

export default Card;
