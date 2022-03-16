import { Checkbox, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { useContext } from 'react'
import { TaxContext } from '../../context/TaxContext'
import './styles.css'

export const TaxItem = ({ item, addItem, deleteItem }: any) => {
    const { selectItem, unselectItem } = useContext(TaxContext)
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

    const handleToggle = () => {
        !tax.checked ? selectItem(tax.n_recibo) : unselectItem(tax.n_recibo)
    }

    return (
        <ListItem className="item-container">
            <ListItemIcon>
                <Checkbox
                    onChange={handleToggle}
                    checked={tax.checked}
                    inputProps={{ 'aria-labelledby': 'checkbox' }}
                />
            </ListItemIcon>
            <ListItemText id={'periodo'} primary={`${tax.periodo}`} />
            <ListItemText id={'numero-recibo'} primary={`${tax.n_recibo}`} />
            <ListItemText id={'vencimiento'} primary={`${tax.date}`} />
            <ListItemText id={'importe'} primary={`${tax.amount}`} />
        </ListItem>
    )
}
