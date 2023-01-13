import React from 'react'
import Btn from '../../Utilities/Btn'

const Portfolio = () => {
    return (
        <div className='portfolio'>
            <h4>Portfolio</h4>
            <img src="/images/vector-2.png" alt="vector" />
            <p>You dont have a wallet yet!</p>
            <span>Connect to wallet and See your Portfolio</span>
            <Btn value={'Connect to Wallet'} />
        </div>
    )
}

export default Portfolio