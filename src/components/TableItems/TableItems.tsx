import { Checkbox, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { useState } from 'react'
import { jsonTax } from '../../database/database'
import { useItemSelect } from '../../hooks/useItemSelect'
import { TaxItem } from '../TaxItem.tsx/TaxItem'
import './styles.css'

export const TableItems = () => {
    const [checkedAll, setCheckedAll] = useState(false)
    const { itemsToCheck, selectItem, unselectItem, checkedAllItems, uncheckedAllItems } =
        useItemSelect(jsonTax)

    const toggleCheckedAll = () => {
        setCheckedAll(!checkedAll)
        !checkedAll ? checkedAllItems() : uncheckedAllItems()
    }

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
