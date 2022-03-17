import { createContext } from 'react'
import { ItemsToCheck, ItemTaxProps } from '../hooks/useItemsToCheck'

interface Props {
    loadItems: (json: any) => void
    itemsToCheck: ItemsToCheck
    selectItem: (item_n_recibo: string) => void
    unselectItem: (item_n_recibo: string) => void
    checkedAllItems: () => void
    uncheckedAllItems: () => void
    itemsChecked: () => ItemTaxProps[]
    checkedAll: boolean
    loaded: boolean
}

export const TaxContext = createContext({} as Props)

export const { Provider } = TaxContext
