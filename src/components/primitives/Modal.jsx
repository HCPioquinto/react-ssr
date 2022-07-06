import React, { useState, useEffect } from 'react';

const Modal = ({ isShow, onClose, children }) => {
  return (
    <div className={`modal_background ${isShow ? '' : 'hidden'}`}>
      <div className="modal_container">
        <div className="modal_header">
          <h1 className="modal_close" onClick={() => onClose()}>
            &times;
          </h1>
        </div>
        <div className="modal_body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
