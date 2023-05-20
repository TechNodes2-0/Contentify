import React, { useState } from 'react';

function CertificateSelector({
  Price
}) {
  const [selectedImage, setSelectedImage] = useState('');
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const[price,setprice]=useState(0);

  function handleImageChange(event) {
    setSelectedImage(event.target.value);
  }

  function handlePromoCodeChange(event) {
    setPromoCode(event.target.value);
   
 
  }

  function applyPromoCode() {
    if (promoCode === 'Free100') {
    
     Price=price;
     console.log(Price);
     
      
    }
  }

  function showPreview() {
    const preview = document.getElementById("preview");
    if (selectedImage) {
      preview.textContent = `Preview selected image: ${selectedImage}`;
    } else {
      preview.textContent = "";
    }
  }

  function resetBorders() {
    const images = document.querySelectorAll('input[name="image"]');
    for (let i = 0; i < images.length; i++) {
      images[i].parentNode.style.border = "none";
    }
    const selectedImageElement = document.querySelector(`input[name="image"][value="${selectedImage}"] + img`);
    if (selectedImageElement) {
      selectedImageElement.parentNode.style.border = "3px solid green";
    }
  }

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <h1 className="text-3xl font-bold mb-5">Select an image:</h1>
      <div className="grid grid-cols-3 gap-4">
        <label className="flex flex-col items-center">
          <input
            type="radio"
            name="image"
            className="hidden"
            value="https://sankalptaru-app.s3.ap-south-1.amazonaws.com/images/certificates/tfg5-1677477024.jpg"
            onChange={(event) => { handleImageChange(event); showPreview(); resetBorders(); }}
          />
          <img
            src="https://sankalptaru-app.s3.ap-south-1.amazonaws.com/images/certificates/tfg5-1677477024.jpg"
            alt="Certificate"
            className="w-full h-auto cursor-pointer"
            onClick={resetBorders}
          />
        </label>
      </div>
      <h4 id="preview" className="text-green-500 mt-5"></h4>
      <div className="mt-5">
        <label htmlFor="promoCode" className="font-bold">Promo code:</label>
        <input
          type="text"
          id="promoCode"
          className="mx-3 p-2 border border-gray-400"
          value={promoCode}
          onChange={handlePromoCodeChange}
        />
        <button className="bg-green-500 text-white px-3 py-2 rounded" onClick={applyPromoCode}>Apply</button>
      </div>
      {discount > 0 &&
        <p className="text-green-500 font-bold mt-3">Discount applied: {discount}%</p>
      }
    </div>
  );
}

export default CertificateSelector;
