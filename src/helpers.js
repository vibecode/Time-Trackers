import uuid from 'uuid';

const pad = (numberString, size) => {
  let padded = numberString;
  while (padded.length < size) padded = `0${padded}`;
  return padded;
};

const millisecondsToHuman = (ms) => {
  const seconds = Math.floor((ms / 1000) % 60);
  const minutes = Math.floor((ms / 1000 / 60) % 60);
  const hours = Math.floor(ms / 1000 / 60 / 60);

  return [
    pad(hours.toString(), 2),
    pad(minutes.toString(), 2),
    pad(seconds.toString(), 2),
  ].join(':');
};

export const newTimer = (attrs = {}) => {
  return {
    title: attrs.title || 'Title',
    project: attrs.project || 'Project',
    id: uuid.v4(),
    elapsed: 0,
  };
};

export const renderElapsedTime = (elapsed, runningSince) => {
  let totalElapsed = elapsed;
  if (runningSince) {
    totalElapsed += Date.now() - runningSince;
  }
  return millisecondsToHuman(totalElapsed);
};

// function findById(array, id, cb) {
//   array.forEach((el) => {
//     if (el.id === id) {
//       cb(el);
//     }
//   });
// }