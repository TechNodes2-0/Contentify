import React from "react";
import Card from "../Card";

export default function Ads() {
  return (
    <div className="flex flex-wrap justify-around py-32 bg-gray-900">
      <Card title="Facebook-ads" link="/FacebookAds" />
      <Card title="LinkedIN-ads" link="/LinkedInAds" />
      <div className="swiper-button-next flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full hover:bg-gray-300 animate-pulse"></div>
      <div className="swiper-button-prev flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full hover:bg-gray-300 animate-pulse"></div>
    </div>
  );
}
