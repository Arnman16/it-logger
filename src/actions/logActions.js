import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  UPDATE_LOG,
  // SEARCH_LOGS,
  SET_CURRENT,
  CLEAR_CURRENT,
} from './types';

export const getLogs = () => async (dispatch) => {
  setLoading();
  try {
    const res = await fetch('logs');
    const data = await res.json();
    dispatch({
      type: GET_LOGS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data,
    });
  }
};

export const addLog = (log) => async (dispatch) => {
  setLoading();
  try {
    const res = await fetch('logs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(log),
    });
    const data = await res.json();
    console.log('DATA!', data);
    dispatch({
      type: ADD_LOG,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data,
    });
  }
};
export const updateLog = (log) => async (dispatch) => {
  setLoading();
  try {
    const res = await fetch(`logs/${log.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(log),
    });
    const data = await res.json();
    console.log('DATA!', data);
    dispatch({
      type: UPDATE_LOG,
      payload: log,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data,
    });
  }
};

export const deleteLog = (id) => async (dispatch) => {
  setLoading();
  try {
    await fetch(`logs/${id}`, {
      method: 'DELETE',
    });
    dispatch({
      type: DELETE_LOG,
      payload: id,
    });
  } catch (err) {
    console.error(err.message);
  }
};

export const setCurrent = (log) => (dispatch) => {
  dispatch({
    type: SET_CURRENT,
    payload: log,
  });
};
export const clearCurrent = () => (dispatch) => {
  dispatch({
    type: CLEAR_CURRENT,
  });
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
