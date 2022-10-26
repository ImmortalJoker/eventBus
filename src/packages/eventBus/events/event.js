import eventsBus from "../eventsBus";

const event = (eventName) => {
  const subscribe = (callback) => {
    return eventsBus.subscribe(eventName, callback);
  };

  const broadcast = (data) => {
    eventsBus.broadcast(eventName, data);
  };

  return {
    broadcast,
    subscribe
  };
};

export default event;
