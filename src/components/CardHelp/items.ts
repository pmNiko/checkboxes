import maps from './maps.jpg'
import shop from './shop.jpeg'
import car from './car.jpeg'

export interface ItemProps {
    id: string
    title: string
    img: string
    description: string
}

const nomenclatura: ItemProps = {
    id: '1',
    title: 'Nomenclatura',
    img: maps,
    description: `La busqueda de sus recibos por nomenclatura catastral se realiza mediante los siguientes formatos:`,
}

const comercio: ItemProps = {
    id: '2',
    title: 'Licencia comercial',
    img: shop,
    description: `La busqueda de sus recibos por licencia comercial se realiza mediante los siguientes formatos:`,
}

const patente: ItemProps = {
    id: '3',
    title: 'Patente',
    img: car,
    description: `La busqueda de sus recibos por patente se realiza mediante los siguientes formatos:`,
}

export const items: ItemProps[] = [nomenclatura, comercio, patente]
