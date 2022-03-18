import { TextField } from '@mui/material'
import Box from '@mui/material/Box'
import { ChangeEvent, useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { TaxContext } from '../../context/TaxContext'
import { jsonTax } from '../../database/database'
import { ButtonSubmit } from '../Button/ButtonSubmit'
import './styles.css'

interface Props {
    className: string
}

const initValues = {
    name: '',
    surname: '',
    dni: '',
}

const toastLoading = () => toast.loading('Validando datos...')
const toastSuccess = () => toast.success('Busqueda exitosa!')

export const Search = ({ className }: Props) => {
    const { loadItems } = useContext(TaxContext)

    const [value, setValue] = useState(initValues)

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        setValue({ ...value, [target.name]: target.value })
    }

    const loadItemsForm = () => {
        toastLoading()
        setTimeout(() => {
            toast.dismiss(toastLoading())
            loadItems(jsonTax)
            toastSuccess()
        }, 3000)
    }

    const handlerForm = () => {
        if (value.name !== '' && value.surname !== '' && value.dni !== '') {
            loadItemsForm()
        } else {
            toast.error('Complete el formulario.')
        }
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
                        label="Nombre"
                        name="name"
                        multiline
                        maxRows={4}
                        value={value.name}
                        onChange={handleChange}
                        variant="standard"
                    />
                </div>
                <div>
                    <TextField
                        id="standard-multiline-flexible"
                        label="Apellido"
                        name="surname"
                        multiline
                        maxRows={4}
                        value={value.surname}
                        onChange={handleChange}
                        variant="standard"
                    />
                </div>
                <div>
                    <TextField
                        id="standard-multiline-flexible"
                        label="DNI"
                        name="dni"
                        multiline
                        maxRows={4}
                        value={value.dni}
                        onChange={handleChange}
                        variant="standard"
                    />
                </div>
            </div>
            <ButtonSubmit handlerForm={handlerForm} />
        </Box>
    )
}
