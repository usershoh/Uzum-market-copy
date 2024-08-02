import React from "react";
import ShopCardItem from "./shop-card-item";
import { useSelector } from "react-redux";

const ShopCard = () => {
  const { data } = useSelector((state) => state.shopSlice);
  const totalPrice = data.reduce((acc, value) => (acc += value.userPrice), 0);

  return (
    <div className="grid grid-flow-row-dense grid-cols-3 w-[80%] m-auto gap-[20px] relative">
      <div className="grid gap-[20px] col-span-2">
        {data.map((value) => (
          <ShopCardItem products={value} key={value.id} />
        ))}
      </div>
      <div className="relative">
        <div className="p-4 sticky top-0 border rounded-[4px] grid gap-[20px]">
          <h3 className="text-[16px] font-bold">Buyurtmangiz</h3>
          <div className="flex items-center justify-between">
            <p className="text-[14px] font-medium">
              Mahsulotlar ({data.length})
            </p>
            <p className="text-[14px] font-medium">{totalPrice} so'm</p>
          </div>
          <div className="text-[#7a3bf9] border-[#7a3bf9] border-[2px] font-semibold text-center">
            Yetkazib berish M02 11 (Erta)
          </div>
          <div className="flex items-start justify-between">
            <p className="text-[14px] font-medium">Jami: </p>
            <h2 className="text-[20px] font-semibold">
              {totalPrice} so'm
            </h2>
          </div>
          <button className="bg-[#7F4DFF] text-[#fff] text-center rounded-[14px] w-[100%] py-[8px] text-[18px]">
            Rasmiylashtirishga o'tish
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
