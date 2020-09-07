import React, { useContext } from 'react';
import alertContext from '../../context/alertContext';
import './index.css';

const Alert = () => {
  const { alert } = useContext(alertContext);

  return alert && <div className="alert">You just saved {alert}</div>;
};

export default Alert;
