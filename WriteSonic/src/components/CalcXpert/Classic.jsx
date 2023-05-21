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
    <div className="contentBox" id="contentBox">
      <h1>CalcXpert</h1>
      <p>
        <br />
        <a className="appBtn app-icon-graphing" href="example-graphing.html">
          Graphing
        </a>
        <a className="appBtn app-icon-geometry" href="example-geometry.html">
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
        <a className="appBtn app-icon-3d" id="app_3d" href="example-3d.html">
          3D
        </a>
        <a
          className="appBtn app-icon-classic active"
          id="app_classic"
          href="example-tools.html"
        >
          Classic
        </a>
        <br />
        <br />
        <a className="appBtn noimage" id="app_editor" href="example-editor.html">
          Equation Editor
        </a>
      </p>

      <h5>GeoGebra Classic</h5>
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
