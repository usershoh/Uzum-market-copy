import React from "react";
import {} from "@ant-design/icons";
import logo from "../../../assets/img/uzum logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const NavbarBottom = () => {
  const navigate = useNavigate();
  const { data } = useSelector((state) => state.shopSlice);
  const { t, i18n } = useTranslation("global");
  return (
    <div className="pt-[17px] flex items-center justify-between">
      <Link to={"/"}>
        <img src={logo} alt="" />
      </Link>
      <button className="bg-[#F0F0FF] text-[#7000FF] flex items-center justify-center gap-[10px] px-[14px] rounded-[4px] font-[500] h-[40px]">
        <i className="fa-solid fa-layer-group"></i>
        <p className="text-[14px]">{t("navbar_bottom.menu")}</p>
      </button>
      <form className="w-[520px] h-[40px] rounded-[4px] flex items-center justify-between pl-[17px] border-[#36364021] border-[1px]">
        <input
          type="text"
          placeholder={t("navbar_bottom.search")}
          className="text-[#757575] w-[400px] outline-none"
        />
        <button className="w-[80px] h-[100%] bg-[#F2F4F7] flex items-center justify-center rounded-r-lg-[1px] border-[#363640]">
          <i className="fa-solid fa-magnifying-glass text-[#595B66]"></i>
        </button>
      </form>
      <button className="flex items-center gap-[7px]">
        <i className="fa-regular fa-user"></i>
        <p className="text-[14px] text-[#1F2026]">{t("navbar_bottom.login")}</p>
      </button>
      <button
        onClick={() => navigate("/like")}
        className="flex items-center gap-[7px]"
      >
        <i className="fa-regular fa-heart"></i>
        <p className="text-[14px] text-[#1F2026]">{t("navbar_bottom.LikePage")}</p>
      </button>
      <button
        className="flex items-center gap-[7px]"
        onClick={() => navigate("/shop")}
      >
        <i className="fa-solid fa-cart-shopping"></i>
        <p className="text-[14px] text-[#1F2026]">{t("navbar_bottom.Shop")}</p>
        <span className="bg-[#7002FF] w-[17px] h-[18px] text-[#fff] text-[14px] flex items-center justify-center">
          {data.length}
        </span>
      </button>
    </div>
  );
};

export default NavbarBottom;
