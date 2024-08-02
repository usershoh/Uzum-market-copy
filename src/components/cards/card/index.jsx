import React, { useState } from "react";
import img1 from "../../../assets/svg/SVG.svg";
import { useDispatch } from "react-redux";
import { getData } from "../../../redux/shop-slice";
import { useMutationHandler } from "../../../hooks/useMutationHandler";
import { useQueryClient } from "react-query";
import { Link } from "react-router-dom";

const Card = ({ products }) => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const [isLiked, setIsLiked] = useState(products.like);
  const [hasClicked, setHasClicked] = useState(false);

  const mutation = useMutationHandler({
    url: `products/${products.id}`,
    method: "PUT",
    onSuccess: (updatedProduct) => {
      queryClient.setQueryData("products", (oldData) =>
        oldData.map((product) =>
          product.id === updatedProduct.id ? updatedProduct : product
        )
      );
    },
    onError: (error) => {
      console.error("Failed to update product:", error);
    },
  });

  const handleLikeToggle = () => {
    const updatedProduct = { ...products, like: !isLiked };
    mutation.mutate(updatedProduct);
    setIsLiked(!isLiked);
  };

  const handleClick = () => {
    if (!hasClicked) {
      dispatch(getData(products));
      setHasClicked(true);
    }
  };

  const {
    id,
    img,
    title,
    review,
    reviewPer,
    monthPrice,
    price,
    discountPrice,
  } = products;

  return (
    <div className="relative">
      <button
        onClick={handleLikeToggle}
        className="absolute top-3 right-3 text-[#1F2026] text-lg"
        aria-label={isLiked ? "Unlike product" : "Like product"}
      >
        {isLiked ? (
          <i className="fa-solid fa-heart text-red-500"></i>
        ) : (
          <i className="fa-solid fa-heart text-white"></i>
        )}
      </button>
      <div
        className="absolute bottom-2 right-2 w-8 h-8 rounded-full border flex items-center justify-center cursor-pointer"
        onClick={handleClick}
        aria-label="Get product data"
      >
        <img src={img1} alt="Get Data Icon" />
      </div>
      <Link to={`/cards/${id}`} key={id}>
        <img className="rounded-lg w-full" src={img} alt={title} />
      </Link>
      <div className="py-3 px-2 grid gap-7">
        <div className="grid gap-1">
          <h2 className="text-[#1F2026] text-sm">{title.slice(0, 55)}...</h2>
          <div className="flex items-center gap-2 text-xs text-[#8B8E99]">
            <div className="flex items-center gap-1">
              <i className="fa-solid fa-star text-[#FFB54C]"></i>
              <p>{review}</p>
            </div>
            <p>({reviewPer} отзывов)</p>
          </div>
          <div className="inline-block">
            <p className="text-xs text-[#1F1F26] rounded bg-yellow-500 px-1 inline-block">
              {monthPrice} so'm/месяц
            </p>
          </div>
        </div>
        <div className="grid gap-1">
          <p className="line-through text-xs text-[#8B8E99]">{price} so'm</p>
          <p className="text-base text-[#1F2026]">{discountPrice} so'm</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
