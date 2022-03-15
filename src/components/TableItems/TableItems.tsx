import { Checkbox, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { jsonTax, toArray } from '../../database/database'
import { TaxItem } from '../TaxItem.tsx/TaxItem'
import './styles.css'
import { useEffect, useState } from 'react'
import { ItemsSelected, useItemSelect } from '../../hooks/useItemSelect'

export const TableItems = () => {
    const [checkedAll, setCheckedAll] = useState(false)
    const { addItem, deleteItem, itemsSelected } = useItemSelect()

    const toggleCheckedAll = () => {
        setCheckedAll(!checkedAll)
    }

    useEffect(() => {
        itemsSelected.count !== 0 && console.log(itemsSelected)
    }, [itemsSelected])

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

            {jsonTax.map((item, i) => (
                <TaxItem key={i} item={item} addItem={addItem} deleteItem={deleteItem} />
            ))}
        </div>
    )
}
