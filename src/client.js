import firebase from 'firebase';

export const getTimers = (getData) => {
  const timersRef = firebase.database().ref('timers/');
  timersRef.on('value', (snapshot) => {
    return getData(snapshot.val());
  });
};

export const saveTimer = (data) => {
  return firebase.database().ref(`timers/${data.id}`).set(data);
};

export const updateTimer = (attr) => {
  const { id, title, project } = attr;
  const updates = {
    [`timers/${id}/title`]: title,
    [`timers/${id}/project`]: project
  };
  return firebase.database().ref().update(updates);
};

export const startTimer = (attr) => {
  const { id, start } = attr;
  const updates = { [`timers/${id}/runningSince`]: start };

  return firebase.database().ref().update(updates);
};

export const stopTimer = (attr) => {
  const { id, elapsed } = attr;
  const updates = {
    [`timers/${id}/runningSince`]: null,
    [`timers/${id}/elapsed`]: elapsed
  };

  return firebase.database().ref().update(updates);
};

export const deleteTimer = (uid) => {
  return firebase.database().ref(`timers/${uid}`).remove();
};
