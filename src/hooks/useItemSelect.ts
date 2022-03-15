import { useEffect, useState } from "react"
import { TaxProps } from "../interfaces/interfaces"
import { formatter } from '../utils/utils';
import { useDateMatchAmount } from "./useDateMatchAmount";
import { jsonTax } from '../database/database';

interface TaxAmountProps extends TaxProps {
    amount: number,
    checked: boolean
}

export interface ItemsSelect {
    items: TaxAmountProps[]
    totalAmount: number
    count: number
}



export const useItemSelect = (jsonTax: any) => {

    const [itemsSelected, setItemsSelected] = useState<ItemsSelect>({
        items: [],
        totalAmount: 0,
        count: 0,
    })

    const selectItem = (item_n_recibo: string) => {

        const itemToChek = itemsSelected.items.filter(item => item.n_recibo === item_n_recibo).pop()

        setItemsSelected({
            ...itemsSelected,
            items: [...itemsSelected.items.map(item => {
                if (item.n_recibo === item_n_recibo) {
                    item.checked = true
                }
                return item
            })],
            count: itemsSelected.count + 1,
            totalAmount: itemsSelected.totalAmount += Number(itemToChek?.amount)
        })
    }


    const unselectItem = (item_n_recibo: string) => {
        const itemDelete = itemsSelected.items.filter(item => item.n_recibo === item_n_recibo).pop()

        setItemsSelected({
            ...itemsSelected,
            items: [...itemsSelected.items.map(item => {
                if (item.n_recibo === item_n_recibo) {
                    item.checked = false
                }
                return item
            })],
            count: itemsSelected.count - 1,
            totalAmount: itemsSelected.totalAmount -= Number(itemDelete!.amount)
        })
    }

    const checkedAllItems = () => {
        setItemsSelected({
            ...itemsSelected,
            items: [...itemsSelected.items.map(item => {
                item.checked = true
                return item
            })],
            count: itemsSelected.items.length,
            totalAmount: itemsSelected.items.reduce((acum, item) => acum + item.amount, 0)
        })
    }

    const uncheckedAllItems = () => {
        setItemsSelected({
            ...itemsSelected,
            items: [...itemsSelected.items.map(item => {
                item.checked = false
                return item
            })],
            count: 0,
            totalAmount: 0
        })
    }

    useEffect(() => {
        const itemsTax = jsonTax.map((tax: any) => {
            const { amount } = useDateMatchAmount(tax)
            return Object.assign(tax, { amount: amount, checked: false })
        })
        setItemsSelected({
            ...itemsSelected,
            items: [...itemsTax]
        })

    }, [jsonTax])



    return {
        itemsToCheck: itemsSelected,
        selectItem,
        unselectItem,
        checkedAllItems,
        uncheckedAllItems
    }
}
