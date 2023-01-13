import React from 'react'

// Add Utilities Copmonents
import Btn from '../../Utilities/Btn'
import BtnOutline from '../../Utilities/BtnOutline'

const Setting = () => {
    return (
        <div className='setting'>
            <div className="btns">
                <Btn value={<i className="bx bx-bar-chart">Analyst Setting</i>} />
                <BtnOutline value={<i className='bx bx-pulse'>Trade Setting</i>} />
            </div>
            <div className="body">
                <ul>
                    <li>
                        <p>Indicators</p>
                        <p>Weight</p>
                    </li>
                    <li>
                        <p>Relative Strength Index (RSI)</p>
                        <p>50%</p>
                    </li>
                    <li>
                        <p>Relative Strength Index (RSI)</p>
                        <p>40%</p>
                    </li>
                    <li>
                        <p>Relative Strength Index (RSI)</p>
                        <p>30%</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Setting