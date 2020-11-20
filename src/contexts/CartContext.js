import React, { useReducer } from "react"

export const actionTypes = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
}

export const initialState = []

export const CartContext = React.createContext(initialState)

export const cartReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      action.payload.id = Date.now()
      // in case of adding to cart the same product more than once,
      // id will allow to distinguish them
      return [...state, { ...action.payload }]
    case actionTypes.REMOVE_FROM_CART:
      return [...state.filter((product) => product.id !== action.payload)]
    default:
      return state
  }
}

export const CartProvider = ({ children }) => {
  const [products, dispatch] = useReducer(cartReducer, initialState)

  return (
    <CartContext.Provider value={{ products, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}
