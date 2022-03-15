import { Checkbox, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { useState } from 'react'
import { useItemSelect } from '../../hooks/useItemSelect'
import { useDateMatchAmount } from '../../hooks/useDateMatchAmount'

export const TaxItem = ({ item, addItem, deleteItem }: any) => {
    const [checked, setChecked] = useState(false)
    const { amount, date, id } = useDateMatchAmount(item)
    const {
        colgroup,
        tribu,
        n_serie,
        id_fcobr,
        idorigenconsulta,
        tribudescr,
        t_cuot,
        t_cuotdescr,
        enlegales,
        ...tax
    } = item

    const toggle = () => {
        setChecked(!checked)
        !checked ? addItem(item.n_recibo) : deleteItem(tax.n_recibo)
    }

    return (
        <ListItem className="item-description">
            <ListItemIcon>
                <Checkbox
                    onChange={toggle}
                    checked={checked}
                    inputProps={{ 'aria-labelledby': 'checkbox' }}
                />
            </ListItemIcon>
            <ListItemText id={'periodo'} primary={`${tax.periodo}`} />
            <ListItemText id={'numero-recibo'} primary={`${tax.n_recibo}`} />
            <ListItemText id={'vencimiento'} primary={`${date}`} />
            <ListItemText id={'importe'} primary={`${amount}`} />
        </ListItem>
    )
}
