import { Body } from '../components/Body/Body'
import Footer from '../components/Footer/Footer'
import { NavBar } from '../components/NavBar/NavBar'
import { ToastNotifications } from '../components/Notify/ToastNotifications'
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
        loaded,
        resetItems,
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
                loaded,
                resetItems,
            }}
        >
            <ToastNotifications />
            <NavBar />
            <Body />
            <Footer />
        </Provider>
    )
}
