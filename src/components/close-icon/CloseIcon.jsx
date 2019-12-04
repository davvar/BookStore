import React from 'react';
import './close-icon.css'

const CloseIcon = ({ close }) => {
  
    return (
      <div onClick={close} className="close-icon">
        <div className="line left"></div>
        <div className="line right"></div>
      </div>
    );
}
 
export default CloseIcon;