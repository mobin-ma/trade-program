import React from 'react'
import MainCoinWorth from './MainCoinWorth'

// Add Css File
import './footer.css'
import RecentOrders from './RecentOrders'

const Footer = () => {
    return (
        <footer>
            <MainCoinWorth />
            <RecentOrders />
        </footer>
    )
}

export default Footer