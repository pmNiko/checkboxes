
import moment from 'moment'
import { TaxProps } from '../interfaces/interfaces'

interface MatchDate {
    id: string
    date: string
}

interface ImportsProps {
    [key: string]: any
}

/**
 * Custom Hook para el manejo de atributos segun la fecha del tributo
 * @param TaxProps
 * @returns ReturnProps
 */
export const useDateMatchAmount = () => {
    /** Asigna el formato año-mes-dia */
    const format = (date: string) => {
        return moment(date).format('YYYY-MM-DD')
    }

    /** Devuelve el identificador y la fecha con la que hace match su vencimiento */
    const dateMatch = (tax: TaxProps): MatchDate => {
        const current = moment().format('YYYY-MM-DD')

        if (current <= format(tax.f_vto)) return { id: 'Primer', date: tax.f_vto }

        if (current > format(tax.f_vto) && current <= format(tax.f_vto1)) {
            return { id: 'Segundo', date: tax.f_vto1 }
        }

        if (current > format(tax.f_vto1)) return { id: 'Vencido', date: tax.f_vto1 }

        return {
            id: 'vencido',
            date: current,
        }
    }

    /** Retorna el importe acorde a la fecha de vencimiento */
    const importByDate = (tax: TaxProps) => {
        const imports: ImportsProps = {
            Primer: tax.importe,
            Segundo: tax.importe1,
            Vencido: tax.importeinteres,
        }
        const { id } = dateMatch(tax)

        return imports[id]
    }

    // const { id, date } = dateMatch()

    // const amount = importByDate()

    return {
        dateMatch,
        importByDate,
    }
}