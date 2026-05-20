import "@/styles/globals.css"

import type { AppProps } from "next/app"

import { CartProvider }
from "@/context/CartContext"

import {
  WholesaleProvider,
} from "@/context/WholesaleContext"

import EmailPopup
from "@/components/EmailPopup"

export default function App({
  Component,
  pageProps,
}: AppProps) {
  return (
    <WholesaleProvider>

      <CartProvider>

        <Component {...pageProps} />

        <EmailPopup />

      </CartProvider>

    </WholesaleProvider>
  )
}