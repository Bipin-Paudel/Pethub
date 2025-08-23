import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar/navbar'
import Footer from './Components/Footer/Footer'

function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout