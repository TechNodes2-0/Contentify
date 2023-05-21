import React, { useEffect } from 'react';

const GeoGebraApp = () => {
  useEffect(() => {
    function perspective(p, id) {
      window.ggbApplet.setPerspective(p);
      for (let i = 1; i < 7; i++) {
        if (i === id) {
          document.getElementById(i).classList.add('active');
        } else {
          document.getElementById(i).classList.remove('active');
        }
      }
    }

    const parameters = {
      id: 'ggbApplet',
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
      perspective: 'AG',
    };

    const loadGeoGebraScript = () => {
      const script = document.createElement('script');
      script.src = 'https://www.geogebra.org/apps/deployggb.js';
      script.onload = () => {
        const applet = new window.GGBApplet(parameters, true);
        // when used with Math Apps Bundle, uncomment this:
        // applet.setHTML5Codebase('GeoGebra/HTML5/5.0/web3d/');
        applet.inject('applet_container');
      };
      document.body.appendChild(script);
    };

    loadGeoGebraScript();
  }, []);


  return (
    <div className="contentBox bg-gray-500 text-white py-4" id="contentBox" style={{
      backgroundImage: "linear-gradient(to bottom, #2c3e50, #3498db)",
    }}>
      <div className="contentBox" id="contentBox">
        <h1 className="text-2xl font-bold text-center">CalcXpert</h1>

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
              href="/Classic"
            >
              Classic
            </a>
          </div>
        </div>

        <div className="mt-8 text-center">
          <h5 className="text-xl font-bold">3D Calculator</h5>
          <p className="text-lg">
            GeoGebra CAS Calculator can be embedded as an app. Preloading
            resources is optional.
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
        </div>
      </div>
      <p>
        <br />
        <div className="flex gap-4 flex-col">
        <a className="appBtn app-icon-graphing bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor:pointer w-40" href="example-graphing.html">
          Graphing
        </a>
        <a className="appBtn app-icon-geometry bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor:pointer w-40" href="example-geometry.html">
          Geometry
        </a>
        <a
          className="appBtn app-icon-scientific bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor:pointer w-40"
          id="app_scientific"
          href="example-scientific.html"
        >
          Scientific
        </a>
        <a className="appBtn app-icon-cas bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor:pointer w-40" id="app_cas" href="example-cas.html">
          CAS
        </a>
        <a className="appBtn app-icon-3d bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor:pointer w-40" id="app_3d" href="example-3d.html">
          3D
        </a>
        <a
          className="appBtn app-icon-classic active bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor:pointer w-40"
          id="app_classic"
          href="example-tools.html"
        >
          Classic
        </a>
        </div>
        <br />
        <br />
        <a className="appBtn noimage bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor:pointer w-40" id="app_editor" href="example-editor.html">
          Equation Editor
        </a>
      </p>

      <h5 className="text-2xl font-bold text-center">GeoGebra Classic</h5>
      <p className="text">
        GeoGebra Classic can be embedded as an app. Preloading a resource is
        optional. <br />
        For details about customization please refer to{' '}
        <a
          className="inlineLink"
          href="https://wiki.geogebra.org/en/Reference:Applet_Parameters"
        >
          Documentation
        </a>
        .<br />
        For details about the app have a look at{' '}
        <a
          className="inlineLink"
          target="_blank"
          href="https://www.geogebra.org/m/XUv5mXTm"
        >
          Learn GeoGebra Classic
        </a>
        .
      </p>
      <br />
      <p className="text">
        GeoGebra Classic provides several perspectives, you can choose which one
        to use at start and change it later via API.
      </p>
      <p>
        <a
          className="appBtn app-icon-graphing narrow active"
          id="1"
          onClick={() => perspective('AG', 1)}
        >
          Graphing
        </a>
        <a
          className="appBtn app-icon-geometry narrow"
          id="2"
          onClick={() => perspective('2', 2)}
        >
          Geometry
        </a>
        <a
          className="appBtn app-icon-spreadsheet narrow"
          id="3"
          onClick={() => perspective('3', 3)}
        >
          Spreadsheet
        </a>
        <a
          className="appBtn app-icon-cas narrow"
          id="4"
          onClick={() => perspective('4', 4)}
        >
          CAS
        </a>
        <a
          className="appBtn app-icon-3d narrow"
          id="5"
          onClick={() => perspective('5', 5)}
        >
          3D Geometry
        </a>
        <a
          className="appBtn app-icon-probability narrow"
          id="6"
          onClick={() => perspective('6', 6)}
        >
          Probability
        </a>
      </p>

      <div id="applet_container"></div>
    </div>
  );
};

export default GeoGebraApp;
