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
  const [count, setCount] = useState(1);

  const decrease = () => {
    setCount((count) => count - 1);
  };

  const increase = () => {
    setCount((count) => count + 1);
  };

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
            <div className="w-[16rem] h-[4.4rem]  bg-[#C73B0F] rounded-full absolute top-[90%] left-[50%] translate-x-[-50%] flex items-center justify-center gap-12">
              <button
                onClick={decrease}
                className="border border-white py-[1rem] px-[0.6rem] rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="2"
                  fill="none"
                  viewBox="0 0 10 2"
                >
                  <path
                    d="M0 .375h10v1.25H0V.375Z"
                    className="fill-white hover:fill-[#C73B0F]"
                  />
                </svg>
              </button>

              <span className="text-white text-[1.4rem]">{count}</span>

              <button
                onClick={increase}
                className="border border-white py-[0.6rem] px-[0.6rem] rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  fill="none"
                  viewBox="0 0 10 10"
                >
                  <path
                    fill="#fff"
                    d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
                  />
                </svg>
              </button>
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
