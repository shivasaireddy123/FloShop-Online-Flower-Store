import {createContext, useState} from 'react'

export const CartContext = createContext()

const CartProvider = ({children}) => {
  const [cartItems, setCartItems] = useState([])

  const addToCart = product => {
    const existingItem = cartItems.find(
      eachItem => eachItem.id === product.id
    )

    if (existingItem) {
      setCartItems(
        cartItems.map(eachItem =>
          eachItem.id === product.id
            ? {...eachItem, quantity: eachItem.quantity + 1}
            : eachItem
        )
      )
    } else {
      setCartItems([...cartItems, {...product, quantity: 1}])
    }
  }

  const removeFromCart = id => {
    setCartItems(cartItems.filter(eachItem => eachItem.id !== id))
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider