const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    throw new Error(`SHIT IS FUCKED ${response.status}: ${response.statusText}`);
  }
};

export const getTimers = (success) => {
  return fetch('http://localhost:9000/api/timers', {
    headers: {
      Accept: 'application/json',
    }
  }).then(checkStatus)
    .then((response) => response.json())
    .then(success)
    .catch((error) => console.log(error));
};

export const createTimer = (data) => {
  return fetch('http://localhost:9000/api/timers', {
    method: 'post',
    body: JSON.stringify(data),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(checkStatus);
};

export const updateTimer = (data) => {
  return fetch('http://localhost:9000/api/timers', {
    method: 'put',
    body: JSON.stringify(data),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(checkStatus)
    .catch((error) => console.log(error));
};

export const deleteTimer = (data) => {
  return fetch('http://localhost:9000/api/timers', {
    method: 'delete',
    body: JSON.stringify(data),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(checkStatus)
    .catch((error) => console.log(error));
};

export const startTimer = (data) => {
  return fetch('http://localhost:9000/api/timers/start', {
    method: 'post',
    body: JSON.stringify(data),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(checkStatus)
    .catch((error) => console.log(error));
};

export const stopTimer = (data) => {
  return fetch('http://localhost:9000/api/timers/stop', {
    method: 'post',
    body: JSON.stringify(data),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(checkStatus)
    .catch((error) => console.log(error));
};
