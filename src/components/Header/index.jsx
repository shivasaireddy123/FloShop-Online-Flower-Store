import {useContext, useState} from 'react'
import './index.css'
import {Link, useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie'
import {CartContext} from '../../Context'

const Header = () => {
  const navigate = useNavigate()
  const {cartItems, removeFromCart} = useContext(CartContext)
  const [isCartOpen, setIsCartOpen] = useState(false)

  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    navigate('/login', {replace: true})
  }

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0)
  const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

  return (
    <>
      <div className="main-div">
        <h1 className="head1">Flo<span className="head">Shop</span></h1>
        <ul className="unorder">
          <li><Link to="/" className="home">Home</Link></li>
          <li><Link to="/about" className="about">About</Link></li>
          <li><Link to="/shop" className="shop">Shop</Link></li>
          <li><Link to="/contact" className="contact">Contact</Link></li>
        </ul>
        <div className="div">
          <button
            type="button"
            className="cart-button"
            aria-label={`Shopping cart, ${cartCount} items`}
            onClick={() => setIsCartOpen(true)}
          >
            <span id="icon" className="material-symbols-outlined">shopping_cart</span>
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </button>
          <div className="Btn">
            <button type="button" className="btn1" onClick={onClickLogout}>Logout</button>
          </div>
        </div>
      </div>

      {isCartOpen && (
        <div className="cart-overlay" onClick={() => setIsCartOpen(false)}>
          <aside className="cart-panel" onClick={event => event.stopPropagation()} aria-label="Shopping cart">
            <div className="cart-header">
              <h2>Your Cart</h2>
              <button type="button" className="cart-close" onClick={() => setIsCartOpen(false)} aria-label="Close cart">×</button>
            </div>

            {cartItems.length === 0 ? (
              <p className="empty-cart">Your cart is empty.</p>
            ) : (
              <>
                <div className="cart-items">
                  {cartItems.map(item => (
                    <div className="cart-item" key={item.id}>
                      <img src={item.imageUrl} alt={item.name} />
                      <div className="cart-item-details">
                        <h3>{item.name}</h3>
                        <p>₹{item.price} × {item.quantity}</p>
                        <button type="button" onClick={() => removeFromCart(item.id)}>Remove</button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="cart-total">Total: ₹{cartTotal}</div>
              </>
            )}
          </aside>
        </div>
      )}
    </>
  )
}

export default Header
