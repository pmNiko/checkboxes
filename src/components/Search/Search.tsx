import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { ChangeEvent, useContext, useEffect, useState } from 'react'
import { TaxContext } from '../../context/TaxContext'
import { jsonTax } from '../../database/database'
import { ButtonSubmit } from '../Button/ButtonSubmit'
import './styles.css'

interface Props {
    className: string
}

export const Search = ({ className }: Props) => {
    const { loadItems } = useContext(TaxContext)

    useEffect(() => {
        loadItems(jsonTax)
    }, [])

    const [value, setValue] = useState('Controlled')

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    return (
        <Box
            className={className}
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div className="input-container">
                <div>
                    <TextField
                        id="standard-multiline-flexible"
                        label="Multiline"
                        multiline
                        maxRows={4}
                        value={value}
                        onChange={handleChange}
                        variant="standard"
                    />
                </div>
                <div>
                    <TextField
                        id="standard-multiline-flexible"
                        label="Multiline"
                        multiline
                        maxRows={4}
                        value={value}
                        onChange={handleChange}
                        variant="standard"
                    />
                </div>
                <div>
                    <TextField
                        id="standard-multiline-flexible"
                        label="Multiline"
                        multiline
                        maxRows={4}
                        value={value}
                        onChange={handleChange}
                        variant="standard"
                    />
                </div>
            </div>
            <ButtonSubmit />
        </Box>
    )
}
