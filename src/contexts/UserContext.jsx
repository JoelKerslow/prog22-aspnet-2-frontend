import Cookies from "js-cookie";
import { useState, createContext } from "react";

export const UserContext = createContext()
const UserContextProvider = ({children}) => {
    const userBaseUrl = "https://aspnet2-grupp1-backend.azurewebsites.net/api/Users/";
    const apiKey = 'f77ca749-67f4-4c22-9039-137272442ea0';

    const [currentUser, setCurrentUser] = useState({})

    const getLoggedinUser = async () => {
        const res = await fetch(userBaseUrl + "CustomerProfile", {
            headers: {
                "API-KEY": apiKey,
                "Authorization": "Bearer " + Cookies.get("maneroToken")
            }
        })
        const data = await res.json()

        if(data !== null){
            setCurrentUser(data);
            return true;
        }
        return false;
    }

    return(
        <UserContext.Provider value={{
            getLoggedinUser,
            currentUser,
        }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;