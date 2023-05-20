import React, { useRef } from "react";
import Card from "./Card";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";

export default function CardsArea() {
  const swiperRef = useRef(null);

  // Initialize Swiper once the component mounts
  React.useEffect(() => {
    swiperRef.current = new Swiper(".swiper-container", {
      slidesPerView: "auto",
      spaceBetween: 16,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, []);

  return (
    <div className="flex flex-wrap justify-around py-32 bg-gray-900 hover:bg-gray-850">
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <Card title="Articles/Blog Posts" link="/Articles" />
          <Card title="Ads" link="/Ads" />
          <Card title="Social-Media-Posts" link="/SocialMedia" />
          <Card title="Educational-Materials" link='/Gallery'/>
          <Card title="Climate-Change-Resources" link='/Climate' />
        </div>
      </div>
      <div className="swiper-button-next flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full hover:bg-gray-300 animate-pulse"></div>
      <div className="swiper-button-prev flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full hover:bg-gray-300 animate-pulse"></div>
    </div>
  );
}
