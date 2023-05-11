import React, {useState, createContext} from 'react';

export const AuthorizationContext = createContext();

const AuthorizationContextProvider = ({children}) => {
    
    const authBaseUrl = 'https://aspnet2-grupp1-backend.azurewebsites.net/api/Authentication/';
    const apiKey = "f77ca749-67f4-4c22-9039-137272442ea0";

    const [userLoggedin, setUserLoggedin] = useState(false);

    const registerUser = async (fullName, email, password) => {
        let nameArr = fullname.split(' ', 2);
        let firstName = nameArr[0];
        let lastName = nameArr[1];

        const newUser = {
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "password": password
        }

        const result = await fetch(authBaseUrl + 'register',{
            headers: {
                "API-KEY": apiKey,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        });

        return await result.status;
    }

    const loginUser = async (email, password) => {
        
    }





    return(
        <AuthorizationContext.Provider>
            {children}
        </AuthorizationContext.Provider>
    );
};

export default AuthorizationContextProvider;