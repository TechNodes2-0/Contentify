
import React from 'react';
import { useState } from 'react';
import Cart from './Cart';

export default function Description(
  {
    Descriptions,
    url

  }
) {
  const [numTrees, setNumTrees] = useState("");
  const [treeName, setTreeName] = useState("");
  const [occasion, setOccasion] = useState("");
  const [submit, setsubmit] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted!");
    setsubmit(true);
  };
  return (
    <>
    {submit ?(
      < Cart
      numTrees={numTrees}
      treeName={treeName}
      occasion={occasion}
      />
      
    ):( <div  class="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden mt-4">
    <div class="relative">
        <img
          src={url}
          alt="Project Harit Himachal"
          class="w-full h-48 object-cover object-center"
        />
      </div>
      <div class="py-4 px-6">
        <h2 class="text-gray-900 font-bold text-xl mb-2">
        My Environment and Earth
        </h2>
        <p class="text-gray-700 text-base">
          
{Descriptions}
        </p>
        <br></br>
     
        <p class="text-gray-600 text-sm">Contribution ₹175.00</p>
        </div>
        <form
    onSubmit={handleSubmit}
    className="fixed top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 bg-white shadow-lg rounded-lg p-8"
  >
    <h2 className="text-gray-900 font-bold text-xl mb-2">
      Plantation Form
    </h2>
    <div className="mb-4">
      <label
        htmlFor="numTrees"
        className="block text-gray-700 font-bold mb-2"
      >
        Number of Trees
      </label>
      <input
        type="number"
        id="numTrees"
        name="numTrees"
        value={numTrees}
        onChange={(e) => setNumTrees(e.target.value)}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        required
      />
    </div>
    <div className="mb-4">
      <label htmlFor="treeName" className="block text-gray-700 font-bold mb-2">
        Your Name on certificate
      </label>
      <input
        type="text"
        id="treeName"
        name="treeName"
        value={treeName}
        onChange={(e) => setTreeName(e.target.value)}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        required
      />
    </div>
    <div className="mb-4">
      <label htmlFor="occasion" className="block text-gray-700 font-bold mb-2">
        Event(cause)
      </label>
      <input
        type="text"
        id="occasion"
        name="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        required
      />
    </div>
    <button
      type="submit"
      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      Add to cart
    </button>
    {numTrees >= 10 && (
      <p className="mt-4 text-sm text-gray-500">
        Plant 10 trees and receive a goody bag. (Only applicable for online
        plantation through website)
      </p>
    )}
  </form>
  </div> )}
   


    </>
  )
}
