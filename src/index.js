import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import './components/App/App.css';

import PagesContainer from './containers/PagesContainer/PagesContainer';
import HomePage from './containers/HomePage/HomePage';
import AboutPage from './containers/AboutPage/AboutPage';

// import App from './components/App/App';
import SideMenu from './components/SideMenu/SideMenu'
import TopMenu from './components/TopMenu/TopMenu';

ReactDOM.render(
  <HashRouter hashType="slash">
    <div className="App">
      <SideMenu />
      <div className="App__content">
        <TopMenu />

        <PagesContainer>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/about" component={AboutPage}/>
          </Switch>
        </PagesContainer>

      </div>
    </div>
  </HashRouter>, document.getElementById('root'));
registerServiceWorker();
