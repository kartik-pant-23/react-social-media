import _map from "lodash.map";

const handleSendMessage = (state = [], action) => {
  switch (action.type) {
    case "SEND_MESSAGE":
      return [...state, action.payload];

    case "SEEN_MESSAGE":
      return _map(state, (message) => {
        if (
          message.senderId === action.receiverId &&
          message.receiverId === action.senderId &&
          !message.seen
        )
          return {
            ...message,
            seen: true,
          };
        else return message;
      });

    default:
      return state;
  }
};

export default handleSendMessage;
