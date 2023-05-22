import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import GeoGraphNav from "./GeoGraphNav";
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
      <GeoGraphNav />
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
