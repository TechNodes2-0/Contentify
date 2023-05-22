import React, { useEffect, useRef } from "react";
import Card from "./Card";

export default function CardsArea() {
  return (
    <div className="flex flex-wrap justify-around py-32 bg-gray-900 hover:bg-gray-850">
      <Card title="Articles/Blog Posts" link="/Articles" />
      <Card title="Ads" link="/Ads" />
      <Card title="Social-Media-Posts" link="/SocialMedia" />
      <Card title="Educational-Materials" link="/EduHome" />
      <Card title="Climate-Change-Resources" link="/Climate" />
    </div>
  );
}
