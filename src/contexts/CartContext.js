import { createContext, useState } from 'react'
import Cookies from 'js-cookie'

export const CartContext = createContext()

const CartContextProvider = ({ children }) => {
  const cartBaseUrl = "https://aspnet2-grupp1-backend.azurewebsites.net/api/Cart/"
  const apiKey = 'f77ca749-67f4-4c22-9039-137272442ea0'

  const [cart, setCart] = useState([])

  const fetchCart = async () => {
    const response = await fetch(cartBaseUrl, {
      headers: {
        'API-KEY': apiKey,
        'Authorization': 'Bearer ' + Cookies.get("maneroToken")
      },
    })

    if (response.ok) {
      const data = await response.json()
      setCart(data)
    } else {
      throw new Error('Error fetching cart')
    }
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        fetchCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
