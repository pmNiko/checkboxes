
import { useEffect, useState } from 'react'
import { TribuProps } from '../interfaces/interfaces'
import { useDateMatchAmount } from './useDateMatchAmount'
import { formatter, roundNumber } from '../utils/formater';

export interface ItemTaxProps extends TribuProps {
    amount: number
    date: string
    id: string
    checked: boolean
}

export interface ItemsToCheck {
    items: ItemTaxProps[]
    totalAmount: number
    count: number
}

export const useItemsToCheck = () => {
    const { dateMatch, importByDate } = useDateMatchAmount()
    const [checkedAll, setCheckedAll] = useState(false)
    const [itemsToCheck, setItemsToCheck] = useState<ItemsToCheck>({
        items: [],
        count: 0,
        totalAmount: 0,
    })

    const loadItems = (jsonTax: any) => {
        const itemsTax = jsonTax.map((tax: any) => {
            const { id, date } = dateMatch(tax)
            const amount = importByDate(tax)
            return Object.assign(tax, { amount, date, id, checked: false })
        })

        setItemsToCheck({
            ...itemsToCheck,
            items: [...itemsTax],
        })
    }

    const selectItem = (item_n_recibo: string) => {
        const itemToChek = itemsToCheck.items
            .filter((item) => item.n_recibo === item_n_recibo)
            .pop()

        setItemsToCheck({
            ...itemsToCheck,
            items: [
                ...itemsToCheck.items.map((item) => {
                    if (item.n_recibo === item_n_recibo) {
                        item.checked = true
                    }
                    return item
                }),
            ],
            count: itemsToCheck.count + 1,
            totalAmount: itemsToCheck.totalAmount + Number(itemToChek!.amount)
        })
    }

    const unselectItem = (item_n_recibo: string) => {
        const itemDelete = itemsToCheck.items
            .filter((item) => item.n_recibo === item_n_recibo)
            .pop()

        setItemsToCheck({
            ...itemsToCheck,
            items: [
                ...itemsToCheck.items.map((item) => {
                    if (item.n_recibo === item_n_recibo) {
                        item.checked = false
                    }
                    return item
                }),
            ],
            count: itemsToCheck.count - 1,
            totalAmount: Math.max(itemsToCheck.totalAmount - itemDelete!.amount, 0),
        })
    }

    const checkedAllItems = () => {
        setItemsToCheck({
            ...itemsToCheck,
            items: [
                ...itemsToCheck.items.map((item) => {
                    item.checked = true
                    return item
                }),
            ],
            count: itemsToCheck.items.length,
            totalAmount: itemsToCheck.items.reduce((acum, item) => acum + Number(item.amount), 0),
        })
        setCheckedAll(true)
    }

    const uncheckedAllItems = () => {
        setItemsToCheck({
            ...itemsToCheck,
            items: [
                ...itemsToCheck.items.map((item) => {
                    item.checked = false
                    return item
                }),
            ],
            count: 0,
            totalAmount: 0,
        })
        setCheckedAll(false)
    }

    const itemsChecked = () => {
        return itemsToCheck.items.filter((item) => item.checked)
    }

    useEffect(() => {
        if (itemsToCheck.items.length === itemsToCheck.count && itemsToCheck.count > 0) {
            setCheckedAll(true)
        } else {
            setCheckedAll(false)
        }
    }, [itemsToCheck])

    return {
        loadItems,
        itemsToCheck,
        selectItem,
        unselectItem,
        checkedAllItems,
        uncheckedAllItems,
        itemsChecked,
        checkedAll,
    }
}