import React from "react";

export default function ThreeD() {
  return (
    <div className="contentBox" id="contentBox">
      <h1>Apps Integration</h1>

      <p>
        <br />
        <a
          className="appBtn app-icon-graphing"
          id="app_graphing"
          href="example-graphing.html"
        >
          Graphing
        </a>
        <a
          className="appBtn app-icon-geometry"
          id="app_geometry"
          href="example-geometry.html"
        >
          Geometry
        </a>
        <a
          className="appBtn app-icon-scientific"
          id="app_scientific"
          href="example-scientific.html"
        >
          Scientific
        </a>
        <a className="appBtn app-icon-cas" id="app_cas" href="example-cas.html">
          CAS
        </a>
        <a
          className="appBtn app-icon-3d active"
          id="app_3d"
          href="example-3d.html"
        >
          3D
        </a>
        <a
          className="appBtn app-icon-classic"
          id="app_classic"
          href="example-tools.html"
        >
          Classic
        </a>
        <br />
        <br />
        <a
          className="appBtn noimage"
          id="app_editor"
          href="example-editor.html"
        >
          Equation Editor
        </a>
      </p>

      <h5>3D Calculator</h5>
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
          href="https://www.geogebra.org/m/aWhYSpvy"
        >
          Learn 3D Calculator
        </a>
        .
      </p>

      <div id="applet_container"></div>

      <script
        type="text/javascript"
        src="https://www.geogebra.org/apps/deployggb.js"
      ></script>
      <script type="text/javascript">
        {`
          function perspective(p) {
            ggbApplet.setPerspective(p);
          }
          var parameters = {
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

          var applet = new GGBApplet(parameters, true);
          //  when used with Math Apps Bundle, uncomment this:
          //  applet.setHTML5Codebase('GeoGebra/HTML5/5.0/web3d/');

          window.onload = function () {
            applet.inject('applet_container');
          };
        `}
      </script>
    </div>
  );
}
