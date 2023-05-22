import { useState } from "react";
import { motion } from "framer-motion";
import Cert from'../Cert';
 export default function Order({ trackingId,treeName }) {
  const [isAnimationFinished, setIsAnimationFinished] = useState(false);
  const [download,setdownload]=useState(false);

  const handleDownloadCertificate = () => {
 
    setdownload(true);
  };

  const handleAnimationComplete = () => {
    setIsAnimationFinished(true);
  };

  return (
    
    <div>
      {download ? (
        <Cert treeName={treeName}/>
      ) : (
        <div className="flex flex-col w-screen h-screen  items-center justify-center h-full">
        {!isAnimationFinished && (
          <motion.div
            className="flex flex-col items-center justify-center"
            animate={{ y: [-10, 0, -10] }}
            transition={{ duration: 1, repeat: 2 }}
            onAnimationComplete={handleAnimationComplete}
          >
            <img
              className="w-32 h-32 mb-4"
              src="https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-combo-packs-plants-world-environment-day-special-4-plants-pack-16969434529932_600x600.jpg?v=163423146"
              alt="Air Purifying Plants"
            />
            <h2 className="text-2xl font-bold text-center mb-4">
              Congratulations! Your Order Has Been Placed Successfully
            </h2>
          </motion.div>
        )}
        {isAnimationFinished && (
          <div className="flex flex-col items-center justify-center">
            <p className="text-lg font-bold text-green-600 mb-4">
              Your order has been placed successfully!
            </p>
            <p className="text-gray-700 mb-4">
              Thank you for choosing us. Your tracking ID is{" "}
              <span className="font-bold">{trackingId}</span>. You will receive an
              email with the order details shortly.
            </p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mb-4"
              onClick={handleDownloadCertificate}
            >
              Download Certificate
            </button>
          </div>
      
        )}
        </div>
      )}
    </div>




  

  );
}
