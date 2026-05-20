import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react"

type WholesaleCustomer = {
  email: string
  firstName: string
  tags: string[]
  tier: string
  discount: number
}

type WholesaleContextType = {
  wholesaleCustomer:
    WholesaleCustomer | null

  isWholesale: boolean

  discount: number

  tier: string | null

  getWholesalePrice: (
    price: number
  ) => number

  logoutWholesale: () => void
}

const WholesaleContext =
  createContext<
    WholesaleContextType
  >({
    wholesaleCustomer: null,

    isWholesale: false,

    discount: 0,

    tier: null,

    getWholesalePrice:
      (price) => price,

    logoutWholesale: () => {},
  })

export function WholesaleProvider({
  children,
}: {
  children: React.ReactNode
}) {

  const [
    wholesaleCustomer,
    setWholesaleCustomer,
  ] = useState<
    WholesaleCustomer | null
  >(null)

  useEffect(() => {

    const storedCustomer =
      localStorage.getItem(
        "wholesaleCustomer"
      )

    if (storedCustomer) {

      try {

        setWholesaleCustomer(
          JSON.parse(
            storedCustomer
          )
        )

      } catch (error) {

        console.error(
          "WHOLESALE PARSE ERROR:",
          error
        )
      }
    }

  }, [])

  const isWholesale =
    !!wholesaleCustomer

  const discount =
    wholesaleCustomer?.discount || 0

  const tier =
    wholesaleCustomer?.tier || null

  const getWholesalePrice = (
    price: number
  ) => {

    if (!discount) {
      return price
    }

    const discountedPrice =
      price *
      (1 - discount / 100)

    return Number(
      discountedPrice.toFixed(2)
    )
  }

  const logoutWholesale =
    () => {

      localStorage.removeItem(
        "wholesaleCustomer"
      )

      setWholesaleCustomer(null)
    }

  return (
    <WholesaleContext.Provider
      value={{
        wholesaleCustomer,

        isWholesale,

        discount,

        tier,

        getWholesalePrice,

        logoutWholesale,
      }}
    >
      {children}
    </WholesaleContext.Provider>
  )
}

export function useWholesale() {
  return useContext(
    WholesaleContext
  )
}