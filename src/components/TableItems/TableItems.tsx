import { Checkbox, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { jsonTax, toArray } from '../../database/database'
import { TaxItem } from '../TaxItem.tsx/TaxItem'
import './styles.css'
import { useEffect, useState } from 'react'
import { ItemsSelect, useItemSelect } from '../../hooks/useItemSelect'
import { useDateMatchAmount } from '../../hooks/useDateMatchAmount'

const itemsTax = jsonTax.map((tax: any) => {
    const { amount } = useDateMatchAmount(tax)
    return Object.assign(tax, { amount: amount, checked: false })
})

export const TableItems = () => {
    const [checkedAll, setCheckedAll] = useState(false)
    const { selectItem, unselectItem, itemsToCheck } = useItemSelect(itemsTax)

    const toggleCheckedAll = () => {
        setCheckedAll(!checkedAll)
        // !checkedAll ? checkedAllItems(jsonTax) : uncheckAll()
    }

    useEffect(() => {
        console.log('Items listos: ', itemsToCheck)
    }, [itemsToCheck])

    return (
        <div className="detail">
            <ListItem>
                <ListItemIcon>
                    <Checkbox
                        onChange={toggleCheckedAll}
                        checked={checkedAll}
                        inputProps={{ 'aria-labelledby': 'primary' }}
                    />
                </ListItemIcon>
                <ListItemText id={'periodo'} primary={`Periodo`} />
                <ListItemText id={'numero-recibo'} primary={`Número Recibo`} />
                <ListItemText id={'vencimiento'} primary={`Vencimiento Original`} />
                <ListItemText id={'importe'} primary={`Importe`} />
            </ListItem>

            {itemsToCheck.items.map((item, i) => (
                <TaxItem key={i} item={item} addItem={selectItem} deleteItem={unselectItem} />
            ))}
        </div>
    )
}
