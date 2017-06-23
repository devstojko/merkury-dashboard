import React, { Component } from 'react';
import './TopMenu.css';

// Font-awesome icons
import FaBars from 'react-icons/lib/fa/bars';
import FaEnvelope from 'react-icons/lib/fa/envelope';
import FaBell from 'react-icons/lib/fa/bell';
import FaPlus from 'react-icons/lib/fa/plus';

class TopMenu extends Component {
  render() {
    return (
      <div className="TopMenu">
        <ul className="TopMenu__list">
          <li className="TopMenu__listItem">
            <button className="IconButton">
              <FaBars size={24}/>
            </button>
          </li>
          <li className="TopMenu__listItem">
            <input type="search"/>
          </li>
        </ul>
        <ul className="TopMenu__list">
          <li className="TopMenu__listItem">
            <button className="Button">
              <FaPlus className="Button__icon"/>
              Add Project
            </button>
          </li>
          <li className="TopMenu__listItem">
            <button className="IconButton">
              <FaEnvelope size={24}/>
            </button>
          </li>
          <li className="TopMenu__listItem">
            <button className="IconButton">
              <FaBell size={24}/>
            </button>
          </li>
          <li className="TopMenu__listItem">
            <a href="">User</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default TopMenu;
