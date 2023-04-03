export const sendMessage = (messageData) => {
  return {
    type: "SEND_MESSAGE",
    payload: messageData,
  };
};
