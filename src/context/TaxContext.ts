import { ItemsToCheck, ItemTaxProps } from 'hooks/useItemsToCheck'
import { createContext } from 'react'

interface Props {
    loadItems: (json: any) => void
    itemsToCheck: ItemsToCheck
    selectItem: (item_n_recibo: string) => void
    unselectItem: (item_n_recibo: string) => void
    checkedAllItems: () => void
    uncheckedAllItems: () => void
    itemsChecked: () => ItemTaxProps[]
    checkedAll: boolean
}

export const TaxContext = createContext({} as Props)

export const { Provider } = TaxContext
