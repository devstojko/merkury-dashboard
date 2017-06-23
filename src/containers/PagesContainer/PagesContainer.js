import React from 'react';
import './PagesContainer.css';

const PagesContainer = (props) => {
    return (
      <div className="PagesContainer">
        <div className="PagesContainer__inner">
          {props.children}
        </div>
      </div>
    );
  }


export default PagesContainer;
