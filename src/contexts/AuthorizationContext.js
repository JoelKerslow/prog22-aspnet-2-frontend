import React, { createContext, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import Cookies from "js-cookie"
import { UserContext } from "./UserContext"

export const AuthorizationContext = createContext()

const AuthorizationContextProvider = ({ children }) => {
  const navigate = useNavigate()
  const authBaseUrl = "https://aspnet2-grupp1-backend.azurewebsites.net/api/Authentication/"
  const apiKey = "f77ca749-67f4-4c22-9039-137272442ea0"
  const { getLoggedinUser } = useContext(UserContext)

  const googleLogin = async (token) => {
    // ...Here you would handle the received Google token...
    console.log('Received Google token:', token);

    // Save the token to cookies
    Cookies.set("googleToken", token, {
      expires: 7, // expires after 7 days. Change this according to your requirement
      secure: true, // ensures the cookie is only sent over HTTPS. Set this to false if you're not using HTTPS
    });
};

  const registerUser = async (fullName, email, password) => {
    let nameArr = fullName.split(" ", 2)
    let firstName = nameArr[0]
    let lastName = nameArr[1]

    const newUser = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    }

    const result = await fetch(authBaseUrl + "Register", {
      method: "POST",
      headers: {
        "API-KEY": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })

    return await result.status
  }

  const loginUser = async (email, password) => {
    const user = {
      email: email,
      password: password,
    }

    const res = await fetch(authBaseUrl + "Login", {
      method: "POST",
      headers: {
        "API-KEY": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })

    if (res.status === 200) {
      const token = await res.text()

      const expirationDate = new Date()
      Cookies.set("maneroToken", token, {
        expires: expirationDate.getDate() + 1,
      })
      return true
    }
    return false
  }

  const logoutUser = async () => {
    Cookies.remove("maneroToken")
  }

  const authorize = async () => {
    try {
      const response = await fetch(authBaseUrl + 'Authorize', {
        headers: {
          'API-KEY': apiKey,
          Authorization: 'Bearer ' + Cookies.get('maneroToken'),
        },
      })

      return response.status === 200
    } catch (err) {
      console.error('Authorization request failed:', err)
      return false
    }
  }

  const useAuthorization = () => {
    useEffect(() => {
      const checkAuthorization = async () => {
        if (!(await authorize())) {
          navigate("/Signin")
          return
        }

        await getLoggedinUser()
      }

      checkAuthorization()
    }, [])
  }

  return (
    <AuthorizationContext.Provider
      value={{
        loginUser,
        registerUser,
        logoutUser,
        authorize,
        useAuthorization,
        googleLogin,  // Added googleLogin here
      }}
    >
      {children}
    </AuthorizationContext.Provider>
  )
}

export default AuthorizationContextProvider
