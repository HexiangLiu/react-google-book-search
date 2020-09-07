import React, { useReducer } from 'react';
import alertContext from './alertContext';
import alertReducer from './alertReducer';
import { SET_ALERT, REMOVE_ALERT } from './types';

const AlertState = (props) => {
  const [state, dispatch] = useReducer(alertReducer, null);

  const setAlert = (title) => {
    dispatch({ type: SET_ALERT, payload: title });

    setTimeout(() => {
      dispatch({ type: REMOVE_ALERT });
    }, 3000);
  };
  return (
    <alertContext.Provider value={{ alert: state, setAlert }}>
      {props.children}
    </alertContext.Provider>
  );
};

export default AlertState;
