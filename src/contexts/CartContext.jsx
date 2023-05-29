import Cookies from "js-cookie";
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();
export const CartContextProvider = ({ children }) => {
  const cartBaseUrl =
    "https://aspnet2-grupp1-backend.azurewebsites.net/api/Cart";
  const apiKey = "f77ca749-67f4-4c22-9039-137272442ea0";

  const [cart, setCart] = useState({});
  const [cartItem, setCartItem] = useState("");
  const [code, setCode] = useState("");

  const getUserCart = async () => {
    const res = await fetch(cartBaseUrl, {
      headers: {
        "API-KEY": apiKey,
        Authorization: "Bearer " + Cookies.get("maneroToken"),
      },
    });
    const data = await res.json();

    if (data !== null) {
      setCart(data);
      return true;
    }
    return false;
  };

  const deleteItem = async (productId) => {
    const res = await fetch(
      `${cartBaseUrl}/Item/Delete?productId=${productId}`,
      {
        method: "DELETE",
        headers: {
          "API-KEY": apiKey,
          Authorization: "Bearer " + Cookies.get("maneroToken"),
        },
      }
    );
    if (res.ok) {
      const updatedCart = { ...cart };
      const updatedCartItems = updatedCart.cartItems.filter(
        (item) => item.product.id !== productId
      );
      updatedCart.cartItems = updatedCartItems;
      setCart(updatedCart);
      console.log("Cart item deleted successfully");
      return true;
    } else {
      console.log("Failed to delete cart item");
      return false;
    }
  };

  const updateQuantity = async (productId, quantity) => {
    const item = {
      productId: productId,
      quantity: quantity,
    };
    try {
      const res = await fetch(`${cartBaseUrl}/Item/Update`, {
        method: "PUT",
        headers: {
          "API-KEY": apiKey,
          Authorization: "Bearer " + Cookies.get("maneroToken"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      });

      if (!res.ok) {
        const error = await res.text();
        throw new Error(error || res.status);
      }
      setCartItem(item);
    } catch (error) {
      console.log("Failed to update quantity:", error);
    }
  };

  const applyPromoCode = async (promoCode) => {
    try {
      const res = await fetch(
        `${cartBaseUrl}/Apply/PromoCode?promoCode=${promoCode}`,
        {
          method: "PUT",
          headers: {
            "API-KEY": apiKey,
            Authorization: "Bearer " + Cookies.get("maneroToken"),
          },
          body: JSON.stringify({ promoCode }),
        }
      );

      if (!res.ok) {
        const error = await res.text();
        throw new Error(error || res.status);
      }
      setCode(promoCode);
    } catch (error) {
      console.log("Failed to apply promo code:", error);
    }
  };

  const addCartItem = async (productId, quantity) => {
    const item = {
      productId: productId,
      quantity: quantity,
    };

    try {
      const res = await fetch(`${cartBaseUrl}/Item/Create`, {
        method: "POST",
        headers: {
          "API-KEY": apiKey,
          Authorization: "Bearer " + Cookies.get("maneroToken"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      });

      if (!res.ok) {
        const error = await res.text();
        throw new Error(error || res.status);
      }
      setCartItem(productId);
      const cartItem = await res.json();
      console.log("Added cart item:", cartItem);
    } catch (error) {
      console.log("Failed to add cart item:", error);
    }
  };

  useEffect(() => {
    getUserCart();
  }, [cart]);

  useEffect(() => {
    applyPromoCode(code);
  }, [code]);

  return (
    <CartContext.Provider
      value={{
        cart,
        code,
        cartItem,
        setCode,
        deleteItem,
        updateQuantity,
        applyPromoCode,
        addCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
