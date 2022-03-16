import { Body } from '../components/Body/Body'
import Footer from '../components/Footer/Footer'
import { NavBar } from '../components/NavBar/NavBar'
import { TableItems } from '../components/TableItems/TableItems'

export const BasicLayout = () => {
    return (
        <>
            <NavBar />
            <Body />
            <Footer />
        </>
    )
}
