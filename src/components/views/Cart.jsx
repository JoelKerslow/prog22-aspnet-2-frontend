import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import BackArrow from '../partials/generalPartials/BackArrow'
import Navbar from '../partials/Navbar'
import { CartContext } from '../../contexts/CartContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import { placeholderImage } from '../../contexts/ProductContext'

const Cart = () => {
  const {
    cart,
    code,
    setCode,
    deleteItem,
    updateQuantity,
    applyPromoCode,
    addCartItem,
  } = useContext(CartContext)

  const navigate = useNavigate()

  const handleIncrement = (productId, quantity) => {
    const newQuantity = quantity + 1
    updateQuantity(productId, newQuantity)
  }

  const handleDecrement = (productId, quantity) => {
    if (quantity > 1) {
      const newQuantity = quantity - 1
      updateQuantity(productId, newQuantity)
    }
  }

  const handleDeleteItem = (productId) => {
    deleteItem(productId)
  }

  const handleAddToCart = (productId, quantity) => {
    const updatedQuantity =
      quantity === 0 ? quantity + 1 : quantity /*  For adding to cart */
    addCartItem(productId, updatedQuantity)
  }

  const handlePromoCode = (e) => {
    setCode(e.target.value)
    applyPromoCode(code)
  }

  const handleGoBack = () => {
    navigate(-1)
  }

  return (
    <>
      <div className="RegHeader">
        <BackArrow clickEvent={handleGoBack} />
        <h3>Cart</h3>
        <div className="cart-container">
          <div className="total-container">{cart.totalAmountWithDiscount}</div>
          <div className="fa-thin fa-bag-shopping"></div>
        </div>
      </div>
      <div className="cart-list-container">
        {cart?.cartItems?.map((item) => (
          <div key={item.product.id} className="cart-container">
            <div className="cart-item-section">
              <div className="cart-image-section">
                <img
                  className="cart-image"
                  src={
                    item.product.imageUrl !== null
                      ? item.product.imageUrl
                      : placeholderImage
                  }
                  alt=""
                />
                {cart.promoCode && <div className="sale-badge">SALE</div>}
              </div>
              <div className="item-info">
                <p>{item.product.name}</p>
                <div className="item-price">
                  <p>${item.product.price}</p>
                  {cart.promoCode && (
                    <p style={{ color: 'red' }}>
                      $
                      {(item.product.price *
                        item.quantity *
                        (100 - cart.promoCode.discount)) /
                        100}
                    </p>
                  )}
                </div>
                <p>Size: {item.product.size}</p>
                <p>Color: {item.product.color}</p>
              </div>
              <div className="counter">
                <div
                  className="counter-top"
                  onClick={() =>
                    handleIncrement(item.product.id, item.quantity)
                  }
                >
                  +
                </div>
                <div className="counter-middle">{item.quantity}</div>
                <div
                  className="counter-bottom"
                  onClick={() =>
                    handleDecrement(item.product.id, item.quantity)
                  }
                >
                  -
                </div>
              </div>
              <div
                className="delete"
                onClick={() => handleDeleteItem(item.product.id)}
              >
                <FontAwesomeIcon
                  icon={faTrash}
                  style={{ color: 'lightgray' }}
                />
              </div>
            </div>
          </div>
        ))}
        <hr />
        <div className="promo-code-section">
          <input
            type="text"
            placeholder="Promocode"
            value={code}
            onChange={handlePromoCode}
            disabled={false}
            className="code-input"
          />
          <p>
            {cart.promoCode ? (
              <>
                Promocode applied
                <span>
                  <FontAwesomeIcon icon={faCheck} className="green-icon" />
                </span>
              </>
            ) : (
              <>
                Promocode not applied
                <span>
                  <FontAwesomeIcon icon={faTimes} className="red-icon" />
                </span>
              </>
            )}
          </p>
        </div>
        <div className="price-section">
          <table className="table">
            <tbody>
              <tr>
                <td className="title" style={{ fontWeight: 'bold' }}>
                  Subtotal
                </td>
                <td className="value" style={{ fontWeight: 'bold' }}>
                  ${cart.totalAmountWithoutDiscount}
                </td>
              </tr>
              <tr>
                <td className="title">Discount</td>
                <td className="value">-{cart.discountAmount}</td>
              </tr>
              <tr>
                <td className="title">Delivery</td>
                <td className="value" style={{ color: 'green' }}>
                  Free
                </td>
              </tr>
              <tr>
                <td className="title" style={{ fontWeight: 'bold' }}>
                  Total
                </td>
                <td className="value" style={{ fontWeight: 'bold' }}>
                  ${cart.totalAmountWithDiscount}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="button-section">
          <button className="BigBlackButton">PROCEED TO CHECKOUT</button>
        </div>
        {/*      {<button onClick={() => handleAddToCart(7, 4)}>AddProduct</button>}{" "} */}
        {/*  Test  for adding to cart */}
      </div>
      <div className="profile-navbar">
        <Navbar />
      </div>
    </>
  )
}

export default Cart
