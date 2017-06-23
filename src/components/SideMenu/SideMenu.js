import React, { Component } from 'react';
import './SideMenu.css';
import logo from '../../media/logo.png';

// Font-awesome icons
import FaHome from 'react-icons/lib/fa/home';
import FaTask from 'react-icons/lib/fa/tasks';
import FaLineChart from 'react-icons/lib/fa/line-chart';
import FaCalendar from 'react-icons/lib/fa/calendar';
import FaUser from 'react-icons/lib/fa/user';
import FaCog from 'react-icons/lib/fa/cog';

class SideMenu extends Component {
  render() {
    return (
      <div className="SideMenu">
        <div className="SideMenu__brand">
          <img src={logo} alt="Logo" className="SideMenu__logo"/>
        </div>
        <ul className="SideMenu__list">
          <li className="SideMenu__listItem">
            <a href="" className="SideMenu__link SideMenu__link_active">
              <FaHome size={24} className="FaIcon FaIcon_infoColor"/>
              Home
            </a>
          </li>
          <li className="SideMenu__listItem">
            <a href="" className="SideMenu__link">
              <FaTask size={24} className="FaIcon FaIcon_infoColor"/>
              Workflow
            </a>
          </li>
          <li className="SideMenu__listItem">
            <a href="" className="SideMenu__link">
              <FaLineChart size={24} className="FaIcon FaIcon_infoColor"/>
              Statistics
            </a>
          </li>
          <li className="SideMenu__listItem">
            <a href="" className="SideMenu__link">
              <FaCalendar size={24} className="FaIcon FaIcon_infoColor"/>
              Calendar
            </a>
          </li>
          <li className="SideMenu__listItem">
            <a href="" className="SideMenu__link">
              <FaUser size={24} className="FaIcon FaIcon_infoColor"/>
              Users
            </a>
          </li>
          <li className="SideMenu__listItem">
            <a href="" className="SideMenu__link">
              <FaCog size={24} className="FaIcon FaIcon_infoColor"/>
              Settings
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default SideMenu;
