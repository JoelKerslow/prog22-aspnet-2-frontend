import React, { useState, createContext, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import Cookies from "js-cookie"
import { UserContext } from "./UserContext"

export const AuthorizationContext = createContext()

const AuthorizationContextProvider = ({ children }) => {
  const navigate = useNavigate()
  const authBaseUrl =
    "https://aspnet2-grupp1-backend.azurewebsites.net/api/Authentication/"
  const apiKey = "f77ca749-67f4-4c22-9039-137272442ea0"

  const { getLoggedinUser } = useContext(UserContext)

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

    console.log(user)

    const res = await fetch(authBaseUrl + "Login", {
      method: "POST",
      headers: {
        "API-KEY": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })

    console.log(res)

    if (res.status === 200) {
      console.log(res)
      const token = await res.text()
      console.log("token " + token)

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
    const res = await fetch(authBaseUrl + "Authorize", {
      headers: {
        "API-KEY": apiKey,
        Authorization: "Bearer " + Cookies.get("maneroToken"),
      },
    })

    if (res.status === 200) {
      return true
    }
    
    return false
  }

  const useAuthorization = async () => {
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
      }}
    >
      {children}
    </AuthorizationContext.Provider>
  )
}

export default AuthorizationContextProvider
