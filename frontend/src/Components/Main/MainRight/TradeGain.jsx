import React from 'react'

const TradeGain = () => {
  return (
      <div className='trade_gain'>
          <div className='title'>
              <p>Trade Gain</p>
          </div>

          <div className='item'>
              <p>This Year</p>
              <span>3.05%</span>
          </div>

          <div className='item'>
              <p>This Month</p>
              <span>2.86%</span>
          </div>

          <div className='item'>
              <p>Today</p>
              <span>0.05%</span>
          </div>
    </div>
  )
}

export default TradeGain