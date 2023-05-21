import React, { useEffect } from "react";
import GeoGraphNav from "./GeoGraphNav"
export default function ScientificCalculator() {
  useEffect(() => {
    function perspective(p) {
      window.ggbApplet.setPerspective(p);
    }

    const parameters = {
      id: "ggbApplet",
      appName: "scientific",
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
    <div className="contentBox flex flex-col items-center justify-center bg-gradient-to-b from-gray-800 to-blue-500 text-white">
      <GeoGraphNav/>
      <h5 className="text-xl font-bold mt-8">Scientific Calculator</h5>
      <p className="text">
        GeoGebra Scientific Calculator can be embedded as an app. <br />
        For details about customization please refer to{" "}
        <a
          className="inlineLink"
          target="_blank"
          href="https://wiki.geogebra.org/en/Reference:Applet_Parameters"
        >
          Documentation
        </a>
        .<br />
        For details about the app have a look at{" "}
        <a
          className="inlineLink"
          target="_blank"
          href="https://www.geogebra.org/m/brr48aw7"
        >
          Learn Scientific Calculator
        </a>
        .
      </p>

      <div id="applet_container" className="mt-8"></div>
    </div>
  );
}
