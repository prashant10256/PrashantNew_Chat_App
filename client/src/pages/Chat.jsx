import { useContext } from "react";
import { ChatContext } from "../context/chatContext";

const Chat = () => {
  const { userChats, isUserChatsLoading, userChatsError } =
    useContext(ChatContext);

  console.log("UserChats", userChats);

  return <>Chat</>;
};

export default Chat;
