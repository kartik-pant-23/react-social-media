import _sortBy from "lodash.sortby";
import { getRecentMessage } from "./components/userChatCard/userChatCard.utils";

export const getRecentUserList = (senderId, receiverId, messages, users) => {
  return _sortBy(users, (user) => {
    return getRecentMessage(senderId, user.id, messages).seen;
  });
};
