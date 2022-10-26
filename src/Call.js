import { useEffect, useState } from "react";

import eventBus from "./packages/eventBus";

const Call = () => {
  const [isStartCall, setStartCall] = useState(false);

  const handleCallStart = () => {
    setStartCall(true);
    eventBus.startCall.broadcast(isStartCall);
  };

  useEffect(() => {
    const stopCall = () => setStartCall(false);
    const unsubscribe = eventBus.startVoiceRecord.subscribe(stopCall);

    return () => unsubscribe();
  }, []);

  console.log("Call:", "rerender");

  return (
    <div>
      {`Call: ${isStartCall ? "in progress" : "off"}`}
      <button onClick={handleCallStart}>call</button>
    </div>
  );
};

export default Call;
