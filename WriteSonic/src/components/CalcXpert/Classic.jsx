import React from 'react';

class App extends React.Component {
  componentDidMount() {
    const script = document.createElement('script');
    script.src = 'https://www.geogebra.org/apps/deployggb.js';
    script.async = true;
    document.body.appendChild(script);
  }

  perspective = (p, id) => {
    window.ggbApplet.setPerspective(p);
    for (let i = 1; i < 7; i++) {
      if (i === id) {
        document.getElementById(i).classList.add('active');
      } else {
        document.getElementById(i).classList.remove('active');
      }
    }
  };

  render() {
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
          <a className="appBtn app-icon-scientific" id="app_scientific" href="example-scientific.html">
            Scientific
          </a>
          <a className="appBtn app-icon-cas" id="app_cas" href="example-cas.html">
            CAS
          </a>
          <a className="appBtn app-icon-3d" id="app_3d" href="example-3d.html">
            3D
          </a>
          <a className="appBtn app-icon-classic active" id="app_classic" href="example-tools.html">
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
          GeoGebra Classic can be embedded as an app. Preloading a resource is optional. <br />
          For details about customization please refer to{' '}
          <a className="inlineLink" href="https://wiki.geogebra.org/en/Reference:Applet_Parameters">
            Documentation
          </a>
          .<br />
          For details about the app have a look at{' '}
          <a className="inlineLink" target="_blank" href="https://www.geogebra.org/m/XUv5mXTm">
            Learn GeoGebra Classic
          </a>
          .
        </p>
        <br />
        <div id="applet_container"></div>
        <p className="text">
          GeoGebra Classic provides several perspectives, you can choose which one to use at the start and change it later via API.
        </p>
        <p>
          <a className="appBtn app-icon-graphing narrow active" id="1" onClick={() => this.perspective('AG', 1)}>
            Graphing
          </a>
          <a className="appBtn app-icon-geometry narrow" id="2" onClick={() => this.perspective('2', 2)}>
            Geometry
          </a>
          <a className="appBtn app-icon-spreadsheet narrow" id="3" onClick={() => this.perspective('3', 3)}>
            Spreadsheet
          </a>
          <a className="appBtn app-icon-cas narrow" id="4" onClick={() => this.perspective('4', 4)}>
            CAS
          </a>
          <a className="appBtn app-icon-3d narrow" id="5" onClick={() => this.perspective('5', 5)}>
            3D Geometry
          </a>
          <a className="appBtn app-icon-probability narrow" id="6" onClick={() => this.perspective('6', 6)}>
            Probability
          </a>
        </p>
      </div>
    );
  }
}

export default App;
