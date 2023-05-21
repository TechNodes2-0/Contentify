import React, { useEffect } from "react";

export default function Cas() {
  useEffect(() => {
    function perspective(p) {
      window.ggbApplet.setPerspective(p);
    }

    const parameters = {
      id: "ggbApplet",
      appName: "cas",
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
      className="contentBox flex flex-col items-center justify-center"
      style={{
        backgroundImage: "linear-gradient(to bottom, #2c3e50, #3498db)",
        color: "white",
      }}
    >
      <h1 className="text-2xl font-bold">CalcXpert</h1>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="card bg-blue-500 hover:bg-blue-600">
          <a
            className="appBtn app-icon-graphing text-white font-bold py-2 px-4 rounded"
            id="app_graphing"
            href="example-graphing.html"
          >
            Graphing
          </a>
        </div>
        <div className="card bg-green-500 hover:bg-green-600">
          <a
            className="appBtn app-icon-geometry text-white font-bold py-2 px-4 rounded"
            id="app_geometry"
            href="example-geometry.html"
          >
            Geometry
          </a>
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
          <a
            className="appBtn app-icon-cas text-white font-bold py-2 px-4 rounded"
            id="app_cas"
            href="example-cas.html"
          >
            CAS
          </a>
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
            href="example-tools.html"
          >
            Classic
          </a>
        </div>
      </div>

      <h5 className="text-2xl font-bold mt-8">CAS Calculator</h5>
      <p className="text">
        GeoGebra CAS Calculator can be embedded as an app. Preloading resources
        is optional.
        <br />
        For details about customization please refer to{" "}
        <a
          className="inlineLink"
          target="_blank"
          href="https://wiki.geogebra.org/en/Reference:Applet_Parameters"
        >
          Documentation
        </a>
        .
        <br />
        For details about the app have a look at{" "}
        <a
          className="inlineLink"
          target="_blank"
          href="https://www.geogebra.org/m/mxtyvd22"
        >
          Learn CAS Calculator
        </a>
        .
      </p>

      <div id="applet_container"></div>
    </div>
  );
}
