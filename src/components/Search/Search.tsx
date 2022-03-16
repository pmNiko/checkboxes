import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send'
import { ChangeEvent, useState } from 'react'

import './styles.css'
import { ButtonSubmit } from '../Button/ButtonSubmit'

interface Props {
    className: string
}

export const Search = ({ className }: Props) => {
    console.log(className)

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
