import { Body } from '../components/Body/Body'
import Footer from '../components/Footer/Footer'
import { NavBar } from '../components/NavBar/NavBar'
import { TableItems } from '../components/TableItems/TableItems'
import { Provider } from '../context/TaxContext'
import { useItemsToCheck } from '../hooks/useItemsToCheck'

export const BasicLayout = () => {
    const {
        loadItems,
        itemsToCheck,
        selectItem,
        unselectItem,
        checkedAllItems,
        uncheckedAllItems,
        itemsChecked,
        checkedAll,
    } = useItemsToCheck()

    return (
        <Provider
            value={{
                loadItems,
                itemsToCheck,
                selectItem,
                unselectItem,
                checkedAllItems,
                uncheckedAllItems,
                itemsChecked,
                checkedAll,
            }}
        >
            <NavBar />
            <Body />
            <Footer />
        </Provider>
    )
}
