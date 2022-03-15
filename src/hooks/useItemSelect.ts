import { useEffect, useState } from "react"
import { TaxProps } from "../interfaces/interfaces"
import { formatter } from '../utils/utils';

export interface ItemsSelected {
    items: TaxAmountProps[]
    totalAmount: number
    count: number
}

interface TaxAmountProps extends TaxProps {
    amount: number
}


export const useItemSelect = () => {
    const [itemsSelected, setItemsSelected] = useState<ItemsSelected>({
        items: [],
        totalAmount: 0,
        count: 0,
    })

    const addItem = (item: TaxAmountProps) => {
        setItemsSelected({
            ...itemsSelected,
            items: [...itemsSelected.items, item],
            count: itemsSelected.count + 1,
            totalAmount: itemsSelected.totalAmount += Number(item.amount)
        })
    }


    const deleteItem = (item_n_recibo: string) => {
        const itemDelete = itemsSelected.items.filter(item => item.n_recibo === item_n_recibo).pop()

        setItemsSelected({
            ...itemsSelected,
            items: [...itemsSelected.items.filter(item => item !== itemDelete)],
            count: itemsSelected.count - 1,
            totalAmount: itemsSelected.totalAmount -= Number(itemDelete!.amount)
        })
    }





    return {
        itemsSelected,
        addItem,
        deleteItem
    }
}
