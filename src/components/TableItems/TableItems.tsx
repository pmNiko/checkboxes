import { Checkbox, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { useState } from 'react'
import { jsonTax } from '../../database/database'
import { useItemSelect } from '../../hooks/useItemSelect'
import { TaxItem } from '../TaxItem.tsx/TaxItem'
import Badge, { BadgeProps } from '@mui/material/Badge'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Button from '@mui/material/Button'
import './styles.css'
import { ButtonSubmit } from '../Button/ButtonSubmit'

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
    const [checkedAll, setCheckedAll] = useState(false)
    const { itemsToCheck, selectItem, unselectItem, checkedAllItems, uncheckedAllItems } =
        useItemSelect(jsonTax)

    const { count, totalAmount } = itemsToCheck

    const toggleCheckedAll = () => {
        setCheckedAll(!checkedAll)
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
                {itemsToCheck.items.map((item, i) => (
                    <TaxItem key={i} item={item} addItem={selectItem} deleteItem={unselectItem} />
                ))}
            </div>
            <div className="resume">
                <span style={{ paddingTop: '0.1em' }}>
                    <IconButton aria-label="cart">
                        <StyledBadge badgeContent={count} color="secondary">
                            <ShoppingCartIcon />
                        </StyledBadge>
                    </IconButton>
                </span>
                <span style={{ paddingTop: '0.3em' }}>Total a pagar:</span>
                <span style={{ paddingTop: '0.3em' }}> $ {totalAmount} </span>
                <span style={{ marginLeft: '2em' }}>
                    <ButtonSubmit />
                </span>
            </div>
        </div>
    )
}
