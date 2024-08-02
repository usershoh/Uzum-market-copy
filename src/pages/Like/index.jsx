import React from "react";
import Card from "../../components/cards/card";
import { useQueryHendler } from "../../hooks/useQueryHandler";
import img1 from "../../assets/img/like_png.png";
import { useNavigate } from "react-router-dom";

const Like = () => {
  const {
    data = [],
    isLoading,
    isError,
  } = useQueryHendler({
    url: "products",
    pathname: "products",
  });

  const navigate = useNavigate();

  if (isLoading) {
    return <div className="container mx-auto w-[90%]">Loading...</div>;
  }

  if (isError) {
    return <div className="container mx-auto w-[90%]">Error loading data.</div>;
  }

  return (
    <>
      {!data.length ? (
        <div className="grid gap-[15px] text-center">
          <img
            className="m-auto"
            src={img1}
            alt="Illustration for adding favorites"
          />
          <h1 className="text-[22px] font-semibold">
            Sizga yoqqanini qo'shing
          </h1>
          <p className="text-[12.8px]">
            Mahsulotdagi ♡ belgisini bosing. Akkauntga kiring va barcha
            saralanganlar saqlanib qoladi
          </p>
          <button
            onClick={() => navigate("/")}
            className="bg-[#7000FF] text-[#fff] text-[14px] font-medium rounded-[4px] w-[108px] h-[38px] block mx-auto my-0"
          >
            Bosh sahiva
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-5 w-[80%] gap-[20px] m-auto">
          {data.map((product) => {
            console.log("Product:", product);
            return product.like ? (
              <Card products={product} key={product.id} />
            ) : (
              <div key={product.id} className="hidden" />
            );
          })}
        </div>
      )}
    </>
  );
};

export default Like;
