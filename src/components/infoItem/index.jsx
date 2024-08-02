import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import img1 from "../../assets/svg/SVG.svg";
import { decrement, increment } from "../../redux/shop-slice";

const InfoItem = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/${id}`)
      .then((data) => setData(data.data));
  }, []);
  return (
    <div className="w-[80%] m-auto grid gap-[20px]">
      <div className="flex items-center justify-between gap-[30px]">
        <div className="w-[70%]">
          <img className="w-full rounded-[12px]" src={data.img} alt="" />
        </div>
        <div className="grid w-[100%] gap-[12px]">
          <div className="w-[350px] grid gap-[15px]">
            <div className="grid grid-cols-2 items-center gap-[4px]">
              <p>
                <i className="fa-solid fa-star text-[#F5A623]"></i>
                {data.review}
                (10560 baho)
              </p>
              <p>19500 ta buyurtma</p>
            </div>
            <h2>{data.title}</h2>
            <div className="flex items-center justify-between">
              <p>Sotuvchi</p>
              <p>{data.salesman}</p>
            </div>
            <div>
              <p>Yetkazib berish:</p>
              <p>1 kun bepul</p>
            </div>
          </div>
          <div className="w-[100%] border"></div>
          <p>Miqdor:</p>

          <div className="flex items-center gap-[15px]">
            <p>Narx:</p>
            <p>{data.discountPrice} so'm</p>
          </div>
          <div className="flex items-center gap-[10px] bg-[#F2F4F7] h-[55px] rounded-[12px] p-[12px]">
            <p className="bg-[#FFFF00] text-[14px] text-[#1F2026] px-[5px] py-[4px] inline-block rounded-[4px] font-semibold">
              Oyiga {data.monthPrice} so'mdan
            </p>
            <p className="text-[14px]">Muddatli to'lov</p>
          </div>
          <div className="text-[16px] font-medium flex items-center gap-[20px]">
            <button className="bg-[#7000FF] text-[#fff] rounded-[12px] w-[100%] h-[56px]">
              Savatga qo'shish
            </button>
            <button className="text-[#7000FF] bg-[#fff] border-[1.2px] border-[#7000FF] rounded-[12px] w-[100%] h-[56px]">
              Tugmani 1 bosishda xarit qilish
            </button>
          </div>
          <div className="flex items-center gap-[5px] bg-[#FFF8E6] py-[5px] px-[12px] rounded-[12px] text-[14px]">
            <img src={img1} alt="" /> Bu haftada 6804 kishi sotib oldi
          </div>
        </div>
      </div>
      <p>Maxsulotlar tavsiri</p>
      <h3 className="text-[18px]">{data.body}</h3>
      <img className="w-[100%] rounded-[12px]" src={data.img} alt="" />
    </div>
  );
};

export default InfoItem;
