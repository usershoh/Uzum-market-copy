import React from "react";
import ShopCard from "../../components/shop-cards";
import { useSelector } from "react-redux";
import img1 from "../../assets/img/savat_png.png";
import { useNavigate } from "react-router-dom";

const Shop = () => {
  const { data } = useSelector((state) => state.shopSlice);
  const navigate = useNavigate();
  return (
    <>
      {!data.length ? (
        <div className="grid gap-[15px] text-center">
          <img className="m-auto" src={img1} alt="" />
          <h1 className="text-[22px] font-semibold">
            Savatda hozircha mahsulot yoʻq
          </h1>
          <p className="text-[12.8px]">
            Bosh sahifadagi to’plamlardan boshlang yoki kerakli mahsulotni
            qidiruv orqali toping
          </p>
          <button
            onClick={() => navigate("/")}
            className="bg-[#7000FF] text-[#fff] text-[14px] font-medium rounded-[4px] w-[108px] h-[38px] block mx-auto my-0"
          >
            Bosh sahiva
          </button>
        </div>
      ) : (
        <ShopCard />
      )}
    </>
  );
};

export default Shop;
