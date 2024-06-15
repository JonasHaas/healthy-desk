let timeRemaining;
let intervalId;

self.onmessage = (event) => {
  const { command, time } = event.data;

  if (command === 'start') {
    timeRemaining = time;
    intervalId = setInterval(() => {
      timeRemaining--;
      self.postMessage({ timeRemaining });
      if (timeRemaining <= 0) {
        clearInterval(intervalId);
      }
    }, 1000);
  } else if (command === 'stop') {
    clearInterval(intervalId);
  } else if (command === 'reset') {
    clearInterval(intervalId);
    timeRemaining = time;
    self.postMessage({ timeRemaining });
  }
};
