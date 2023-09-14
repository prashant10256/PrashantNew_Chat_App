import { createContext, useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { baseUrl, getRequest, postRequest } from "../utils/services";
import NavBar from "../components/NavBar";
import Register from "../pages/Register";
import Login from "../pages/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Chat from "../pages/Chat";


export const ChatContext = createContext();

export const ChatContextProvider = ({user,children})=>{
    const [userChats, setUserChats] = useState(null);
  const [isUserChatsLoading, setIsUserChatsLoading] = useState(null);
  const [userChatsError, setUserChatsError] = useState(null);
  

  useEffect(() => {
    const getUserChats = async () => {
      if (user?._id) {
        setIsUserChatsLoading(true);
        setUserChatsError(null);

        const response = await getRequest(`${baseUrl}/chats/${user?._id}`);

        setIsUserChatsLoading(false);

        if (response.error) {
          return setUserChatsError(response);
        }

        setUserChats(response);
      }
    };

    getUserChats();
  }, [user]);

  
return (


    <ChatContext.Provider  value={{
              userChats,
              isUserChatsLoading,
              userChatsError,
            }}>{children}</ChatContext.Provider>
)
}

