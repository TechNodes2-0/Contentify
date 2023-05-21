import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Maths() {
  useEffect(() => {
    function perspective(p) {
      window.ggbApplet.setPerspective(p);
    }

    const parameters = {
      id: "ggbApplet",
      appName: "3d",
      width: 800,
      height: 550,
      showToolBar: true,
      borderColor: null,
      showMenuBar: true,
      allowStyleBar: true,
      showAlgebraInput: true,
      enableLabelDrags: false,
      enableShiftDragZoom: true,
      capturingThreshold: null,
      showToolBarHelp: false,
      errorDialogsActive: true,
      showTutorialLink: true,
      showLogging: true,
      useBrowserForJS: false,
    };

    const loadScript = () => {
      const script = document.createElement("script");
      script.src = "https://www.geogebra.org/apps/deployggb.js";
      script.async = true;
      script.onload = () => {
        const applet = new window.GGBApplet(parameters, true);
        applet.inject("applet_container");
      };
      document.body.appendChild(script);
    };

    loadScript();
  }, []);

  return (
    <div
      className="text-center bg-gray-500 text-white py-4"
      style={{
        backgroundImage: "linear-gradient(to bottom, #2c3e50, #3498db)",
      }}
    >
      <h1 className="text-4xl font-bold mb-8">CalcXpert</h1>

      <div className="grid grid-cols-3 gap-4">
        <div className="card bg-blue-500 hover:bg-blue-600">
          <Link
            className="appBtn app-icon-graphing text-white font-bold py-2 px-4 rounded"
            id="app_graphing"
            to="/Grapic"
          >
            Graphing
          </Link>
        </div>
        <div className="card bg-green-500 hover:bg-green-600">
          <Link
            className="appBtn app-icon-geometry text-white font-bold py-2 px-4 rounded"
            id="app_geometry"
            to="/Geometry"
          >
            Geometry
          </Link>
        </div>
        <div className="card bg-yellow-500 hover:bg-yellow-600">
          <a
            className="appBtn app-icon-scientific text-white font-bold py-2 px-4 rounded"
            id="app_scientific"
            href="example-scientific.html"
          >
            Scientific
          </a>
        </div>
        <div className="card bg-purple-500 hover:bg-purple-600">
          <Link
            className="appBtn app-icon-cas text-white font-bold py-2 px-4 rounded"
            id="app_cas"
            to="/Cas"
          >
            CAS
          </Link>
        </div>
        <div className="card bg-red-500 hover:bg-red-600">
          <a
            className="appBtn app-icon-3d text-white font-bold py-2 px-4 rounded"
            id="app_3d"
            href="example-3d.html"
          >
            3D
          </a>
        </div>
        <div className="card bg-gray-500 hover:bg-gray-600">
          <a
            className="appBtn app-icon-classic text-white font-bold py-2 px-4 rounded"
            id="app_classic"
            href="/Classic"
          >
            Classic
          </a>
        </div>
        <div className="card bg-gray-500 hover:bg-gray-600">
          <a
            className="appBtn app-icon-classic text-white font-bold py-2 px-4 rounded"
            id="app_classic"
            href="example-tools.html"
          >
            Equation Editor
          </a>
        </div>
      </div>

      <h5 className="text-2xl font-bold mt-8">3D Calculator</h5>
      <p className="text-lg mt-4">
        GeoGebra CAS Calculator can be embedded as an app. Preloading resources
        is optional. For details about customization, please refer to the{" "}
        <a
          className="inlineLink"
          target="_blank"
          href="https://wiki.geogebra.org/en/Reference:Applet_Parameters"
        >
          Documentation
        </a>
        . For details about the app, have a look at the{" "}
        <a
          className="inlineLink"
          target="_blank"
          href="https://www.geogebra.org/m/aWhYSpvy"
        >
          Learn 3D Calculator
        </a>
      </p>

      <div id="applet_container" className=" p-4 m-auto"></div>
    </div>
  );
}
