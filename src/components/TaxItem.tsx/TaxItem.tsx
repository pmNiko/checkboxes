import { Checkbox, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { useDateMatchAmount } from '../../hooks/useDateMatchAmount'
import './styles.css'

export const TaxItem = ({ item, addItem, deleteItem }: any) => {
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
        !tax.checked ? addItem(item.n_recibo) : deleteItem(tax.n_recibo)
    }

    return (
        <ListItem className="item-container">
            <ListItemIcon>
                <Checkbox
                    onChange={toggle}
                    checked={tax.checked}
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
