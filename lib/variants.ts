export function getOptionValue(
  variant: any,
  optionName: string
) {

  return (
    variant?.selectedOptions?.find(
      (option: any) =>
        option.name === optionName
    )?.value || ""
  )
}

export function getUniqueOptions(
  variants: any[],
  optionName: string
) {

  return Array.from(
    new Set(
      variants
        .map(({ node }: any) =>
          getOptionValue(
            node,
            optionName
          )
        )
        .filter(
          (value: string) =>
            value !== ""
        )
    )
  )
}

export function findVariant(
  variants: any[],
  selections: Record<
    string,
    string
  >
) {

  return variants.find(
    ({ node }: any) => {

      return Object.entries(
        selections
      ).every(
        ([optionName, value]) =>

          getOptionValue(
            node,
            optionName
          ) === value
      )
    }
  )
}

export function isOptionAvailable(
  variants: any[],
  optionName: string,
  value: string
) {

  return variants.some(
    ({ node }: any) => {

      return (
        getOptionValue(
          node,
          optionName
        ) === value &&
        node.availableForSale
      )
    }
  )
}