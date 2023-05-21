import React, { useEffect } from "react";
import GeoGraphNav from "./GeoGraphNav"
export default function Grapic() {
  useEffect(() => {
    function perspective(p) {
      window.ggbApplet.setPerspective(p);
    }

    const parameters = {
      id: "ggbApplet",
      appName: "graphing",
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
      className="bg-gray-500 text-white py-4"
      style={{
        backgroundImage: "linear-gradient(to bottom, #2c3e50, #3498db)",
      }}
    >
     <GeoGraphNav/>
     <h5 className="text-xl font-bold">3D Calculator</h5>
        <p className="text-lg">
          GeoGebra CAS Calculator can be embedded as an app. Preloading resources
          is optional.
        </p>
        <p className="text-lg">
          For details about customization, please refer to{" "}
          <a
            className="inlineLink"
            target="_blank"
            href="https://wiki.geogebra.org/en/Reference:Applet_Parameters"
          >
            Documentation
          </a>
          .
        </p>
        <p className="text-lg">
          For details about the app, have a look at{" "}
          <a
            className="inlineLink"
            target="_blank"
            href="https://www.geogebra.org/m/aWhYSpvy"
          >
            Learn 3D Calculator
          </a>
          .
        </p>
      <div id="applet_container" className="p-4 mx-auto"></div>
    </div>
  );
}
