import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import GeoGraphNav from "./GeoGraphNav"
export default function Geometry() {
  useEffect(() => {
    function perspective(p) {
      window.ggbApplet.setPerspective(p);
    }

    const parameters = {
      id: "ggbApplet",
      appName: "geometry",
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
      className="contentBox flex flex-col items-center justify-center h-screen pt-50 "
      style={{
        backgroundImage: "linear-gradient(to bottom, #2c3e50, #3498db)",
      }}
    >
    <div>
      <GeoGraphNav/>
</div>
      <h5 className="text-2xl font-bold mt-8 text-white">Geometry</h5>
      <p className="text-lg text-white">
        GeoGebra Geometry can be embedded as an app. Preloading a resource is
        optional. <br />
        For details about customization please refer to{" "}
        <a
          className="inlineLink"
          target="_blank"
          href="https://wiki.geogebra.org/en/Reference:Applet_Parameters"
        >
          Documentation
        </a>
        . <br />
        For details about the app have a look at{" "}
        <a
          className="inlineLink"
          target="_blank"
          href="https://www.geogebra.org/m/DmVNbn2V"
        >
          Learn Geometry
        </a>
        .
      </p>

      <div id="applet_container" className="mt-8"></div>
    </div>
  );
}
