import { useState } from "react"

import { useCart } from "@/context/CartContext"

export default function BuyNowButton({
  variantId,
}: {
  variantId: string
}) {
  const { addItem, checkout } = useCart()

  const [loading, setLoading] = useState(false)

  async function handleBuyNow() {
    try {
      setLoading(true)

      await addItem(variantId)

      setTimeout(() => {
        checkout()
      }, 300)
    } catch (err) {
      console.error(err)
      alert("Failed to start checkout")
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      onClick={handleBuyNow}
      disabled={loading}
      className="
        border border-black/10 hover:border-black transition
        py-4 uppercase tracking-[3px] text-[12px]
        font-black text-center rounded-full text-black
        disabled:opacity-50
      "
    >
      {loading ? "LOADING..." : "BUY NOW"}
    </button>
  )
}