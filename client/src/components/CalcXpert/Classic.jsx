import React, { useEffect } from 'react';
import GeoGraphNav from './GeoGraphNav'
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
    <GeoGraphNav />
      <p>
        <br />
        
        <br />
        <br />
        
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
