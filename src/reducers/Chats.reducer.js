const initialState = [
  {
    message: "Let's catch up on weekend ",
    receiverId: 1,
    senderId: 4,
  },
];

let tempListUsers = [
  {
    message: "How's the day ??",
    receiverId: 1,
    senderId: 4,
  },
  {
    message: "Seize the day ??",
    receiverId: 1,
    senderId: 4,
  },
  {
    message: "Having something special today !! Let's hang out together",
    receiverId: 2,
    senderId: 4,
  },
  {
    message: "How's the day ??",
    receiverId: 1,
    senderId: 4,
  },
];

const handleSendMessage = (state = initialState, action) => {
  switch (action.type) {
    case "SEND_MESSAGE":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default handleSendMessage;
