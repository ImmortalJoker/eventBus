import eventBus from "./packages/eventBus";

const SendMessage = () => {
  const handleSend = () => {
    eventBus.sendMessage.broadcast(true);
  };

  console.log("SendMessage:", "rerender");

  return (
    <div>
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default SendMessage;
