import { createContext, useContext, useReducer, useEffect } from 'react'

const CartContext = createContext()

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const existingItem = state.items.find(item => 
        item.id === action.payload.id && 
        item.selectedSize === action.payload.selectedSize
      )
      
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id && item.selectedSize === action.payload.selectedSize
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          )
        }
      } else {
        return {
          ...state,
          items: [...state.items, action.payload]
        }
      }

    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => 
          !(item.id === action.payload.id && item.selectedSize === action.payload.selectedSize)
        )
      }

    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id && item.selectedSize === action.payload.selectedSize
            ? { ...item, quantity: action.payload.quantity }
            : item
        ).filter(item => item.quantity > 0)
      }

    case 'CLEAR_CART':
      return {
        ...state,
        items: []
      }

    case 'LOAD_CART':
      return {
        ...state,
        items: action.payload
      }

    default:
      return state
  }
}

const initialState = {
  items: []
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  // Carregar carrinho do localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('trekko-cart')
    if (savedCart) {
      dispatch({ type: 'LOAD_CART', payload: JSON.parse(savedCart) })
    }
  }, [])

  // Salvar carrinho no localStorage
  useEffect(() => {
    localStorage.setItem('trekko-cart', JSON.stringify(state.items))
  }, [state.items])

  const addItem = (product, quantity = 1, selectedSize = '') => {
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
      quantity,
      selectedSize
    }
    dispatch({ type: 'ADD_ITEM', payload: cartItem })
  }

  const removeItem = (id, selectedSize = '') => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id, selectedSize } })
  }

  const updateQuantity = (id, quantity, selectedSize = '') => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity, selectedSize } })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  const getItemCount = () => {
    return state.items.reduce((total, item) => total + item.quantity, 0)
  }

  const getSubtotal = () => {
    return state.items.reduce((total, item) => {
      const price = parseFloat(item.price.replace('R$ ', '').replace(',', '.'))
      return total + (price * item.quantity)
    }, 0)
  }

  const getShipping = () => {
    const subtotal = getSubtotal()
    return subtotal >= 199 ? 0 : 29.90
  }

  const getTotal = () => {
    return getSubtotal() + getShipping()
  }

  const value = {
    items: state.items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    getItemCount,
    getSubtotal,
    getShipping,
    getTotal
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

