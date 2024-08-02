import React from "react";
import imgAppStore from "../../assets/img/app_store_img.png";
import imgPlayMarket from "../../assets/img/play_market_img.png";
import imgInstagram from "../../assets/img/instagram_img.png";
import imgTelegram from "../../assets/img/telegram_Img.png";
import imgYoutube from "../../assets/img/youtube_img.png";
import imgFacebook from "../../assets/img/facebook_img.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation("global");

  return (
    <footer className="w-[80%] m-auto grid gap-[20px] divide-y divide-slate-400 pt-[20px]">
      <div className="flex items-center justify-between">
        <ul className="grid gap-[5px] text-[14px]">
          <p className="font-medium text-[#1F2026]">{t('footer.aboutUs')}</p>
          <li className="text-[#8B8E99] font-[400]">
            <a href="">{t('footer.deliveryPoints')}</a>
          </li>
          <li className="text-[#8B8E99] font-[400]">
            <a href="">{t('footer.vacancies')}</a>
          </li>
        </ul>
        <ul className="grid gap-[5px]">
          <p className="font-medium text-[#1F2026]">{t('footer.contactUs')}</p>
          <li className="text-[#8B8E99] font-[400]">
            <a href="">{t('footer.contactUs')}</a>
          </li>
          <li className="text-[#8B8E99] font-[400]">
            <a href="">{t('footer.faq')}</a>
          </li>
        </ul>
        <ul className="grid gap-[5px]">
          <p className="font-medium text-[#1F2026]">{t('footer.sellOnUzum')}</p>
          <li className="text-[#8B8E99] font-[400]">
            <a href="">{t('footer.sellOnUzum')}</a>
          </li>
          <li className="text-[#8B8E99] font-[400]">
            <a href="">{t('footer.sellerLogin')}</a>
          </li>
        </ul>
        <div className="grid gap-[10px]">
          <p className="font-medium text-[#1F2026] text-[14px]">
            {t('footer.downloadApp')}
          </p>
          <div className="flex items-center gap-[10px] text-[12.8px] text-[#1F2026]">
            <button className="flex items-center gap-[5px]">
              <img src={imgAppStore} alt="" />
              <p>{t('footer.appStore')}</p>
            </button>
            <button className="flex items-center gap-[5px]">
              <img src={imgPlayMarket} alt="" />
              <p>{t('footer.playStore')}</p>
            </button>
          </div>
          <div className="grid gap-[5px]">
            <p className="text-[#1F2026] text-[14px]">
              {t('footer.socialNetworks')}
            </p>
            <div className="flex items-center gap-[5px]">
              <a href="">
                <img src={imgInstagram} alt="" />
              </a>
              <a href="">
                <img src={imgTelegram} alt="" />
              </a>
              <a href="">
                <img src={imgYoutube} alt="" />
              </a>
              <a href="">
                <img src={imgFacebook} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between pt-[20px]">
        <div className="font-medium text-[14px] text-[#1F2026] flex items-center gap-[10px]">
          <p>{t('footer.privacyPolicy')}</p>
          <p>{t('footer.termsOfUse')}</p>
        </div>
        <p className="text-[11px] text-[#8B8E99]">
          {t('footer.copyright')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
