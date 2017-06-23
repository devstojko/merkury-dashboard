import React, { Component } from 'react';
import './App.css';

import SideMenu from '../SideMenu/SideMenu'
import TopMenu from '../TopMenu/TopMenu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideMenu />
        <div className="App__content">
          <TopMenu />

          <div className="MainContent">
            <div className="MainContent__inner">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur est cum, quasi debitis nobis earum. Ad nostrum quidem modi natus expedita eaque rerum reprehenderit, qui libero ut. Ipsam, adipisci facilis.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur est cum, quasi debitis nobis earum. Ad nostrum quidem modi natus expedita eaque rerum reprehenderit, qui libero ut. Ipsam, adipisci facilis.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur est cum, quasi debitis nobis earum. Ad nostrum quidem modi natus expedita eaque rerum reprehenderit, qui libero ut. Ipsam, adipisci facilis.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur est cum, quasi debitis nobis earum. Ad nostrum quidem modi natus expedit eaque rerum reprehenderit, qui libero ut. Ipsam, adipisci facilis.
              </p>
            </div>
          </div>
          {/* MainContent */}
        </div>
      </div>
    );
  }
}

export default App;
