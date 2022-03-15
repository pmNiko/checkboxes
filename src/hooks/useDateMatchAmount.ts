import moment from "moment"
import { TaxProps } from "../interfaces/interfaces"

interface MatchDate {
    id: string
    date: string
}

interface ImportsProps {
    [key: string]: any
}

type ReturnProps = {
    id: string
    date: string
    amount: number
}

/**
 * Custom Hook para el manejo de atributos segun la fecha del tributo
 * @param TaxProps
 * @returns ReturnProps
 */
export const useDateMatchAmount = ({
    f_vto,
    f_vto1,
    importe,
    importe1,
    importeinteres,
}: TaxProps): ReturnProps => {
    /** Asigna el formato año-mes-dia */
    const format = (date: string) => {
        return moment(date).format('YYYY-MM-DD')
    }

    /** Devuelve el identificador y la fecha con la que hace match su vencimiento */
    const dateMatch = (): MatchDate => {
        const current = moment().format('YYYY-MM-DD')

        if (current <= format(f_vto)) return { id: 'Primer', date: f_vto }

        if (current > format(f_vto) && current <= format(f_vto1)) {
            return { id: 'Segundo', date: f_vto1 }
        }

        if (current > format(f_vto1)) return { id: 'Vencido', date: f_vto1 }

        return {
            id: 'vencido',
            date: current,
        }
    }

    /** Retorna el importe acorde a la fecha de vencimiento */
    const importByDate = () => {
        const imports: ImportsProps = {
            Primer: importe,
            Segundo: importe1,
            Vencido: importeinteres,
        }
        const { id } = dateMatch()

        return imports[id]
    }

    const { id, date } = dateMatch()

    const amount = importByDate()

    return {
        id,
        date,
        amount,
    }
}