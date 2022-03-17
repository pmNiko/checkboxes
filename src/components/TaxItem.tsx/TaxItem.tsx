import { Checkbox, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { useContext } from 'react'
import { TaxContext } from '../../context/TaxContext'
import { ItemTaxProps } from '../../hooks/useItemsToCheck'
import styles from './TaxItem.module.css'

interface Props {
    item: ItemTaxProps
    index: number
}

export const TaxItem = ({ item, index }: Props) => {
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
        <ListItem
            onClick={handleToggle}
            className={` 
            ${tax.checked && styles.itemCheckeado}
            ${!tax.checked && index % 2 === 0 && styles.itemPar}`}
        >
            <ListItemIcon>
                <Checkbox
                    onChange={handleToggle}
                    checked={tax.checked}
                    inputProps={{ 'aria-labelledby': 'checkbox' }}
                />
            </ListItemIcon>
            <ListItemText id={'periodo1'} primary={`${tax.periodo}`} />
            <ListItemText id={'numero-recibo1'} primary={`${tax.n_recibo}`} />
            <ListItemText id={'vencimiento1'} primary={`${tax.date}`} />
            <ListItemText
                className={styles.itemCustom}
                id={'importe1'}
                primary={`$ ${tax.amount}`}
            />
        </ListItem>
    )
}
