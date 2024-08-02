import React from "react";
import { useDispatch } from "react-redux";
import { decrement, deleteProduct, increment } from "../../../redux/shop-slice";

const ShopCardItem = ({ products }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between border p-[12px] h-[180px]">
      <img className="w-[85px]" src={products.img} alt="" />
      <div className="grid gap-[20px] w-[200px]">
        <h2>{products.title.slice(0, 40)}...</h2>
        <p>Sotuvchi {products.salesman}</p>
      </div>
      <div className="border flex items-center gap-[25px] px-[10px] py-[5px]">
        <button onClick={() => dispatch(decrement(products.id))}>-</button>
        <span>{products.count}</span>
        <button onClick={() => dispatch(increment(products.id))}>+</button>
      </div>
      <div className="flex-col gap-[10px] text-center">
        <button
          onClick={() => dispatch(deleteProduct(products.id))}
          className="flex items-center gap-[5px] cursor-pointer"
        >
          <i className="fa-solid fa-trash-can"></i>
          <p>Yo'q qilish</p>
        </button>
        <h2>{products.discountPrice} so'm</h2>
      </div>
    </div>
  );
};

export default ShopCardItem;
