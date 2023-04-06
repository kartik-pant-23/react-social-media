import _findLastIndex from "lodash.findlastindex";

export const getRecentMessage = (senderId, receiverId, messages) => {
  let lastIndexMessage = _findLastIndex(messages, (message) => {
    return (
      (message.senderId === senderId && message.receiverId === receiverId) ||
      (message.senderId === receiverId && message.receiverId === senderId)
    );
  });
  if (lastIndexMessage === -1)
    return {
      seen: true,
      message: "Nothing Here !! Tap to chat ",
    };
  if (
    messages[lastIndexMessage].senderId === senderId &&
    messages[lastIndexMessage].receiverId === receiverId
  )
    return {
      seen: true,
      message: "You: " + messages[lastIndexMessage].message,
    };
  else
    return {
      seen: messages[lastIndexMessage].seen,
      message: "Them: " + messages[lastIndexMessage].message,
    };
};
