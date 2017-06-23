import React from 'react';
import './App.css';

import SideMenu from '../SideMenu/SideMenu'
import TopMenu from '../TopMenu/TopMenu';


const App = (props) => {
    return (
      <div className="App">
        <SideMenu />
        <div className="App__content">
          <TopMenu />

          <div className="MainContent">
            <div className="MainContent__inner">
              {props.children}
            </div>
          </div>
          {/* MainContent */}
        </div>
      </div>
    );
  }


export default App;
