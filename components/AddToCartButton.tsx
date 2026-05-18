"use client"

import { useState } from "react"

import { useCart }
from "@/context/CartContext"

export default function AddToCartButton({
  variantId,
}: {
  variantId: string
}) {
  const { addItem } = useCart()

  const [loading, setLoading] =
    useState(false)

  async function handleAddToCart() {
    try {
      setLoading(true)

      await addItem(variantId)

      alert("Added to cart")
    } catch (err) {
      console.error(err)

      alert("Failed to add to cart")
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      onClick={handleAddToCart}
      disabled={loading}
      className="
        bg-[#D97732]
        hover:bg-[#c96d2d]
        transition
        text-white
        font-bold
        uppercase
        tracking-[2px]
        px-8
        py-4
        rounded-full
        disabled:opacity-50
      "
    >
      {loading
        ? "ADDING..."
        : "ADD TO CART"}
    </button>
  )
}