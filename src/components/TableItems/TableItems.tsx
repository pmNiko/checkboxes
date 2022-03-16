import { Checkbox, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Badge, { BadgeProps } from '@mui/material/Badge'
import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'
import { useContext } from 'react'
import { TaxContext } from '../../context/TaxContext'
import { ItemTaxProps } from '../../hooks/useItemsToCheck'
import { ButtonSubmit } from '../Button/ButtonSubmit'
import { TaxItem } from '../TaxItem.tsx/TaxItem'
import './styles.css'
import { formatter } from '../../utils/formater'

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}))

interface Props {
    className: string
}

export const TableItems = ({ className }: Props) => {
    const {
        itemsToCheck: { items, count, totalAmount },
        checkedAllItems,
        uncheckedAllItems,
        checkedAll,
    } = useContext(TaxContext)

    console.log(formatter.format(totalAmount))

    const toggleCheckedAll = () => {
        !checkedAll ? checkedAllItems() : uncheckedAllItems()
    }

    return (
        <div className={className}>
            <div className="header-items">
                <span>Facturación número xxx</span>
            </div>
            <ListItem className="header-table">
                <ListItemIcon>
                    <Checkbox
                        onChange={toggleCheckedAll}
                        checked={checkedAll}
                        inputProps={{ 'aria-labelledby': 'primary' }}
                    />
                </ListItemIcon>
                <ListItemText id={'periodo'} primary={`Periodo`} />
                <ListItemText id={'numero-recibo'} primary={`Número de Recibo`} />
                <ListItemText id={'vencimiento'} primary={`Vencimiento Original`} />
                <ListItemText id={'importe'} primary={`Importe`} />
            </ListItem>
            <div className="list-item-container">
                {items.map((item: ItemTaxProps, i: number) => (
                    <TaxItem key={item.n_recibo} item={item} index={i} />
                ))}
            </div>
            <div className="resume">
                <span style={{ paddingTop: '0.1em', marginRight: '2em' }}>
                    <IconButton aria-label="cart">
                        <StyledBadge badgeContent={count} color="secondary">
                            <ShoppingCartIcon />
                        </StyledBadge>
                    </IconButton>
                </span>
                <span style={{ paddingTop: '0.3em' }}>Total a pagar:</span>
                <span style={{ paddingTop: '0.3em', marginRight: '2em' }}>
                    $ {formatter.format(totalAmount)}
                </span>
                <span style={{ marginLeft: '2em' }}>
                    <ButtonSubmit />
                </span>
            </div>
        </div>
    )
}
