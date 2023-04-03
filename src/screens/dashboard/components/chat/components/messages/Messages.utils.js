import _filter from "lodash.filter";

export const getMessages = (senderId, receiverId, messageList) => {
  return _filter(messageList, (message) => {
    return (
      (message.senderId === senderId && message.receiverId === receiverId) ||
      (message.senderId === receiverId && message.receiverId === senderId)
    );
  });
};
