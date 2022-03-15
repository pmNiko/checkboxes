import { useEffect, useState } from "react"
import { TaxProps } from "../interfaces/interfaces"
import { formatter } from '../utils/utils';
import { useDateMatchAmount } from "./useDateMatchAmount";

export interface ItemsSelected {
    items: TaxAmountProps[]
    totalAmount: number
    count: number
}

interface TaxAmountProps extends TaxProps {
    amount: number
}

const initialValues: ItemsSelected = {
    items: [],
    totalAmount: 0,
    count: 0,
}


export const useItemSelect = () => {
    const [itemsSelected, setItemsSelected] = useState<ItemsSelected>(initialValues)

    const addItem = (tax: TaxProps) => {
        const { amount } = useDateMatchAmount(tax)

        const item = { ...tax, amount }

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


    const checkedAllItems = (items: TaxProps[]) => {
        items.map(item => {
            addItem(item)
        })
    }

    const uncheckAll = () => {
        setItemsSelected(initialValues)
    }


    return {
        itemsSelected,
        addItem,
        deleteItem,
        checkedAllItems,
        uncheckAll
    }
}
