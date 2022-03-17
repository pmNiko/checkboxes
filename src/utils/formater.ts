export const formatter = new Intl.NumberFormat('es-AR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
})

export const roundNumber = (number: number) => {
    const n = Math.round(number * 100) / 100
    return n

}