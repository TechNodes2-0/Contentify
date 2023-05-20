import React from 'react'
import { useState } from 'react'
import Description from './Description';

const Card = () => {


  const [submit, setsubmit] = useState("");
  const [Descriptions, setDescription] = useState('');
  const [url,setUrl]=useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted!");
   const  newDescription=description;
   
    setDescription(newDescription);
    const newUrl=urls[4];
    setUrl(newUrl);
    
    setsubmit(true);
  };
  const handleSubmit1 = (event) => {
    event.preventDefault();
    console.log("Submitted!");
   const  newDescription=description1;
    setDescription(newDescription);
    const newUrl=urls[3];
    setUrl(newUrl);
    
    setsubmit(true);
  };
  const handleSubmit2 = (event) => {
    event.preventDefault();
    console.log("Submitted!");
    const newDescription=description2;
    setDescription(newDescription);
    const newUrl=urls[2];
    setUrl(newUrl);
    
    
    setsubmit(true);
  };
  const handleSubmit3 = (event) => {
    event.preventDefault();
    console.log("Submitted!");
    const newDescription=description3;
    setDescription(newDescription);
    const newUrl=urls[1];
    setUrl(newUrl);
    
    
    setsubmit(true);
  };
  const handleSubmit4 = (event) => {
    event.preventDefault();
    console.log("Submitted!");
    const newDescription=description4;
    setDescription(newDescription);
    const newUrl=urls[0];
    setUrl(newUrl);
    
    
    setsubmit(true);
  };
  const description=`The world could run out of forests in 2100, food in 2050, and water in 2040.
  On the 53rd anniversary of Earth Day & 51st anniversary of World Environment Day, let us sustainably invest in our planet, and also in the lives of our farmers who help us with food security and sustenance on the planet by growing trees!`
  const description1=`    Plant trees to protect the environment, it’s our only ray of light!   Air Pollution is the contamination of indoor or outdoor environments by an external agent, which turns out to be detrimental to the health of humans and other living organisms. One major benefit of reducing air pollution would be to substantially reduce the chances of diseases in humans, global warming, acid rain, ozone layer depletion and its effects on animals.`
 const description2=`    Scorpions have an all-rounder health beneficial tree.
 Astrology relates Guava as the birth tree of Scorpions, signifying vitality and creativity, similar to their character traits. So, did you know? Guava is a rich source of Vitamin C, antioxidants, potassium and fiber. Known as the powerhouse of nutrients.
    `;
    const description3=`  Plant trees and claim your #TaxFreeTree today!

    We are registered under 80G and every tree you plant with us gets you a 50% rebate on the donated amount.
    
    
    Plant to save your taxes while being a helping hand to our farmers and the environment`
    const description4=` Undertaking tree plantation for the farmers in the Rural areas of
    Jharkhand. Project Hariyar Jharkhand aims to provide livelihood
    support through agroforestry to these farmers so that they can see
    the hope for a better future for themselves and their families.`
    const urls =["https://s3-ap-south-1.amazonaws.com/sankalptaru-web/wp-content/uploads/2022/10/04054134/HM1v-1664528454-500x500.jpg",
    "https://s3-ap-south-1.amazonaws.com/sankalptaru-web/wp-content/uploads/2023/03/01122147/lUBL-1677672890-600x600.jpg",
    "https://s3-ap-south-1.amazonaws.com/sankalptaru-web/wp-content/uploads/2020/03/06045431/iXiz-1559386065-600x600.png",
    "https://s3-ap-south-1.amazonaws.com/sankalptaru-web/wp-content/uploads/2023/03/02075425/153X-1672298924-500x500.jpg",
    "https://s3-ap-south-1.amazonaws.com/sankalptaru-web/wp-content/uploads/2023/03/24105714/ETMy-1649053863-600x600.jpg"

  ]

  return (
    <>
       {submit ? (
        <Description
       Descriptions={Descriptions}
        url={url}

        />
      ) : (
        <>
        <section class="flex flex-row gap-x-10 items-center justify-center my-8">
<div
  class="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden"
>
  <div class="relative">
    <img
      src="https://s3-ap-south-1.amazonaws.com/sankalptaru-web/wp-content/uploads/2022/10/04054134/HM1v-1664528454-500x500.jpg"
      alt="Project Harit Himachal"
      class="w-full h-48 object-cover object-center"
    />
  </div>
  <div class="py-4 px-6">
    <h2 class="text-gray-900 font-bold text-xl mb-2">
      Project Harit Himachal
    </h2>
    <p class="text-gray-700 text-base">
      Undertaking tree plantation for the farmers in the Rural areas of
      Jharkhand. Project Hariyar Jharkhand aims to provide livelihood
      support through agroforestry to these farmers so that they can see
      the hope for a better future for themselves and their families.
    </p>
    <div class="flex justify-between items-center mt-4">
      <p class="text-gray-600 text-sm">Contribution ₹175.00</p>
      <button  onClick={handleSubmit4} id="desc"
        class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Plant Now
      </button>
    </div>
  </div>
</div>
<div
  class="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden"
>
  <div class="relative">
    <img
      src="https://s3-ap-south-1.amazonaws.com/sankalptaru-web/wp-content/uploads/2023/03/01122147/lUBL-1677672890-600x600.jpg"
      alt="Project Harit Himachal"
      class="w-full h-48 object-cover object-center"
    />
  </div>
  <div class="py-4 px-6">
    <h2 class="text-gray-900 font-bold text-xl mb-2">
    #TaxFreeTrees
    </h2>
    <p class="text-gray-700 text-base">
    Plant trees and claim your #TaxFreeTree today!

We are registered under 80G and every tree you plant with us gets you a 50% rebate on the donated amount.


Plant to save your taxes while being a helping hand to our farmers and the environment
    </p>
    <div class="flex justify-between items-center mt-4">
      <p class="text-gray-600 text-sm">Contribution ₹149.00</p>
      <button  onClick={handleSubmit3} id="desc"
        class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Plant Now
      </button>
    </div>
  </div>
</div>
<div
  class="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden"
>
  <div class="relative">
    <img
      src="https://s3-ap-south-1.amazonaws.com/sankalptaru-web/wp-content/uploads/2020/03/06045431/iXiz-1559386065-600x600.png"
      alt="Project Harit Himachal"
      class="w-full h-48 object-cover object-center"
    />
  </div>
  <div class="py-4 px-6">
    <h2 class="text-gray-900 font-bold text-xl mb-2">
    Zodiac Vṛścika – Scorpio (Guava)
    </h2>
    <p class="text-gray-700 text-base">
    Scorpions have an all-rounder health beneficial tree.
Astrology relates Guava as the birth tree of Scorpions, signifying vitality and creativity, similar to their character traits. So, did you know? Guava is a rich source of Vitamin C, antioxidants, potassium and fiber. Known as the powerhouse of nutrients.
    </p>
    <div class="flex justify-between items-center mt-4">
      <p class="text-gray-600 text-sm">Contribution ₹251.00</p>
      <button  onClick={handleSubmit2} id="desc"
        class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Plant Now
      </button>
    </div>
  </div>
</div>

</section>
<section class="flex flex-row gap-x-10 items-center justify-center my-8">
<div
  class="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden"
>
  <div class="relative">
    <img
      src="https://s3-ap-south-1.amazonaws.com/sankalptaru-web/wp-content/uploads/2023/03/02075425/153X-1672298924-500x500.jpg"
      alt="Project Harit Himachal"
      class="w-full h-48 object-cover object-center"
    />
  </div>
  <div class="py-4 px-6">
    <h2 class="text-gray-900 font-bold text-xl mb-2">
      Trees For Air Pollution
    </h2>
    <p class="text-gray-700 text-base">
    Plant trees to protect the environment, it’s our only ray of light!   Air Pollution is the contamination of indoor or outdoor environments by an external agent, which turns out to be detrimental to the health of humans and other living organisms. One major benefit of reducing air pollution would be to substantially reduce the chances of diseases in humans, global warming, acid rain, ozone layer depletion and its effects on animals.

    </p>
    <div class="flex justify-between items-center mt-4">
      <p class="text-gray-600 text-sm">Contribution ₹175.00</p>
      <button  onClick={handleSubmit1} id="desc"
        class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Plant Now
      </button>
    </div>
  </div>
</div>
<div
  class="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden"
>
  <div class="relative">
    <img
      src="https://s3-ap-south-1.amazonaws.com/sankalptaru-web/wp-content/uploads/2023/03/24105714/ETMy-1649053863-600x600.jpg"
      alt="Project Harit Himachal"
      class="w-full h-48 object-cover object-center"
    />
  </div>
  <div class="py-4 px-6">
    <h2 class="text-gray-900 font-bold text-xl mb-2">
    My Environment and Earth
    </h2>
    <p class="text-gray-700 text-base">
{description}   </p>
    <div class="flex justify-between items-center mt-4">
      <p class="text-gray-600 text-sm">Contribution ₹175.00</p>
      {/* <a href='/Description'  onClick={handleSubmit} id="desc"
        class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Plant Now
      </a> */}
      <button  onClick={handleSubmit} id="desc"
        class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Plant Now
      </button>
    </div>
  </div>
</div>

</section>
</>
      )}

    </>
  )
}

export default Card
