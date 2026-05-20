import "@/styles/globals.css"

import type { AppProps } from "next/app"

import { CartProvider }
from "@/context/CartContext"

import {
  WholesaleProvider,
} from "@/context/WholesaleContext"

export default function App({
  Component,
  pageProps,
}: AppProps) {
  return (
    <WholesaleProvider>

      <CartProvider>

        <Component {...pageProps} />

      </CartProvider>

    </WholesaleProvider>
  )
}