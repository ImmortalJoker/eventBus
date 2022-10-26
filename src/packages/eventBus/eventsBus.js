const subscribtions = {};

const subscribe = (eventName, callback) => {
  if (!subscribtions[eventName]) {
    subscribtions[eventName] = new Set();
  }

  const callbacks = subscribtions[eventName];

  callbacks.add(callback);

  return () => {
    callbacks.delete(callback);

    if (callbacks.size === 0) {
      delete subscribtions[eventName];
    }
  };
};

const broadcast = (eventName, ...args) => {
  if (!subscribtions[eventName]) {
    return;
  }

  const callbacks = subscribtions[eventName];

  for (const callback of callbacks) {
    callback(...args);
  }
};

export default {
  broadcast,
  subscribe
};
