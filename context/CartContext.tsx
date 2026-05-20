"use client"

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react"

import {
  addToCart,
  createCart,
  getCart,
  removeFromCart,
  updateCartItem,
} from "@/lib/shopify"

type CartAttribute = {
  key: string
  value: string
}

type CartContextType = {
  cart: any

  addItem: (
    merchandiseId: string,
    quantity?: number,
    attributes?: CartAttribute[]
  ) => Promise<void>

  removeItem: (
    lineId: string
  ) => Promise<void>

  updateQuantity: (
    lineId: string,
    quantity: number
  ) => Promise<void>

  checkout: () => void
}

const CartContext =
  createContext<CartContextType | null>(
    null
  )

export function CartProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [cart, setCart] =
    useState<any>(null)

  /* ------------------------------------------ */
  /* -------- INITIALIZE CART ----------------- */
  /* ------------------------------------------ */

  useEffect(() => {
    initializeCart()
  }, [])

  async function initializeCart() {
  try {

    const existingCartId =
      localStorage.getItem("cartId")

    if (existingCartId) {

      try {

        const existingCart =
          await getCart(existingCartId)

        if (
          existingCart?.id
        ) {

          setCart(existingCart)

          return
        }

      } catch (err) {

        console.log(
          "OLD CART INVALID — CREATING NEW CART"
        )

        localStorage.removeItem(
          "cartId"
        )
      }
    }

    const newCart =
      await createCart()

    console.log(
      "NEW CART CREATED:",
      newCart
    )

    localStorage.setItem(
      "cartId",
      newCart.id
    )

    setCart(newCart)

  } catch (err) {

    console.error(
      "Cart init error:",
      err
    )
  }
}

  /* ------------------------------------------ */
  /* ------------ ADD ITEM -------------------- */
  /* ------------------------------------------ */

  async function addItem(
    merchandiseId: string,
    quantity = 1,
    attributes: CartAttribute[] = []
  ) {
    if (!cart?.id) return

    try {
      const updatedCart =
        await addToCart(
          cart.id,
          merchandiseId,
          quantity,
          attributes
        )

      setCart(updatedCart)
    } catch (err) {
      console.error(
        "Add to cart error:",
        err
      )
    }
  }

  /* ------------------------------------------ */
  /* ----------- REMOVE ITEM ------------------ */
  /* ------------------------------------------ */

  async function removeItem(
    lineId: string
  ) {
    if (!cart?.id) return

    try {
      const updatedCart =
        await removeFromCart(
          cart.id,
          lineId
        )

      setCart(updatedCart)
    } catch (err) {
      console.error(
        "Remove item error:",
        err
      )
    }
  }

  /* ------------------------------------------ */
  /* -------- UPDATE QUANTITY ----------------- */
  /* ------------------------------------------ */

  async function updateQuantity(
    lineId: string,
    quantity: number
  ) {
    if (!cart?.id) return

    try {
      const updatedCart =
        await updateCartItem(
          cart.id,
          lineId,
          quantity
        )

      setCart(updatedCart)
    } catch (err) {
      console.error(
        "Quantity update error:",
        err
      )
    }
  }

  /* ------------------------------------------ */
  /* -------------- CHECKOUT ------------------ */
  /* ------------------------------------------ */

  function checkout() {

  if (!cart?.checkoutUrl) return

  console.log(
    "CHECKOUT URL:",
    cart.checkoutUrl
  )

  const fixedCheckoutUrl =
    cart.checkoutUrl
      .replace(
        "https://www.precisioncues.com",
        "https://70m4ur-ty.myshopify.com"
      )
      .replace(
        "https://precisioncues.com",
        "https://70m4ur-ty.myshopify.com"
      )

  console.log(
    "FIXED URL:",
    fixedCheckoutUrl
  )

  window.location.href =
    fixedCheckoutUrl
}

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        updateQuantity,
        checkout,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context =
    useContext(CartContext)

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider"
    )
  }

  return context
}