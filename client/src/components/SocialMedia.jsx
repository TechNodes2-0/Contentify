import React, { useRef, useEffect } from "react";
import Card from "./Card";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";

export default function SocialMedia() {
  const swiperRef = useRef(null);

  useEffect(() => {
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
    <div className="flex flex-wrap justify-around py-32 bg-gray-900">
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <Card title="LinkedIN-post" link="/LinkedIn" />
          <Card title="Instagram-Posts" link="/Instagram" />
          <Card title="Twitter-Posts" link="/Twitter" />
        </div>
      </div>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </div>
  );
}
