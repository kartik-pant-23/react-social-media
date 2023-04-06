export const sendMessage = (messageData) => {
  return {
    type: "SEND_MESSAGE",
    payload: messageData,
  };
};

export const seenMessage = (senderId, receiverId) => {
  return {
    type: "SEEN_MESSAGE",
    senderId: senderId,
    receiverId: receiverId,
  };
};
