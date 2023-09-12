import{ useCallback, useEffect } from "react"
import {createContext, useState} from "react";
import { baseUrl, postRequest } from "../utils/services";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) =>{
    // const [user,setUser] = useState({name:"Prashant"});
    const [user,setUser] = useState(null);
    const [registerError, setRegisterError] = useState(null);
    const [isRegisterLoading, setIsRegisterLoading] = useState(false);
    const [registerInfo, setRegisterInfo] =  useState({
        name: "",
        email: "",
        password: ""
    }); 

    console.log("User", user)

    useEffect(()=>{
      const user = localStorage.getItem("User");

      setUser(JSON.parse(user))
    },[]);


    const updateRegisterInfo = useCallback((info) => {
        setRegisterInfo(info)
    }, []);

    const registerUser = useCallback(async(e)=> {
        e.preventDefault();
        setIsRegisterLoading(true);
        setRegisterError(null);

        const response = await postRequest(
            `${baseUrl}/users/register`,
             JSON.stringify(registerInfo));
             setRegisterInfo(false); 

             
        if(response.error){
            // console.log(response.error)
            return setRegisterError(response);
        }

        localStorage.setItem("User", JSON.stringify(response))
         setUser(JSON.stringify(response))
    }, 
    [registerInfo]);

    // useEffect(()=>{
    //     setUser({name:"Prashant"})
    // },[])

    return ( 
    <AuthContext.Provider 
    value={{
            user,
            registerInfo,
            updateRegisterInfo,
            registerUser,
            registerError,
            isRegisterLoading,
        }}
    >
       {children}
    </AuthContext.Provider>
    );
};