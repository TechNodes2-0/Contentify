import React from 'react';

const GeoGraphNav = () => {
  return (
    <div className="contentBox" id="contentBox">
      <h1 className="text-2xl font-bold text-center">CalcXpert</h1>

      <div className="flex gap-4 flex-row justify-between m-10">
        <a
          className="appBtn app-icon-graphing bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded cursor:pointer w-40"
          href="/Grapic"
        >
          Graphing
        </a>
        <a
          className="appBtn app-icon-geometry bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded cursor:pointer w-40"
          href="/Geometry"
        >
          Geometry
        </a>
        <a
          className="appBtn app-icon-scientific bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded cursor:pointer w-40"
          id="app_scientific"
          href="/ScientificCalculator"
        >
          Scientific
        </a>
        <a
          className="appBtn app-icon-cas bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded cursor:pointer w-40"
          id="app_cas"
          href="/Cas"
        >
          CAS
        </a>
        <a
          className="appBtn app-icon-3d bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded cursor:pointer w-40"
          id="app_3d"
          href="/ThreeD"
        >
          3D
        </a>
        <a
          className="appBtn app-icon-classic active bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded cursor:pointer w-40"
          id="app_classic"
          href="/Classic"
        >
          Classic
        </a>
      </div>

      <div className="mt-8 text-center">
 
      </div>
    </div>
  );
};

export default GeoGraphNav;
