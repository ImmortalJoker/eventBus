import { useEffect, useState } from "react";

import eventBus from "./packages/eventBus";

const VoiceMessage = () => {
  const [isVoiceRecording, setVoiceRecording] = useState(false);

  const handleVoiceRecording = () => {
    setVoiceRecording(true);
    eventBus.startVoiceRecord.broadcast(isVoiceRecording);
  };

  useEffect(() => {
    const stopVoiceRecording = () => setVoiceRecording(false);
    const unsubscribe = eventBus.startCall.subscribe(stopVoiceRecording);

    return () => unsubscribe();
  }, []);

  console.log("VoiceMessage:", "rerender");

  return (
    <div>
      {`VoiceRecording: ${isVoiceRecording}`}
      <button onClick={handleVoiceRecording}>start</button>
    </div>
  );
};

export default VoiceMessage;
