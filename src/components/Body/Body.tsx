import { Search } from '../Search/Search'
import { TableItems } from '../TableItems/TableItems'
import './styles.css'

export const Body = () => {
    return (
        <div className="container">
            <Search className="search-container" />
            <TableItems className="table-items" />
        </div>
    )
}
