import React from 'react'
import ChatSection from './MainRight/ChatSection'

// Add Css File
import './MainRight/mainRight.css'
import Setting from './MainRight/Setting'

// Add main right components
import Signals from './MainRight/Signals'
import TradeChart from './MainRight/TradeChart'
import TradeGain from './MainRight/TradeGain'

const MainRight = () => {
  return (
    <div className='main_right'>
      {/* trade section */}
      <div className='trade_info'>
        <TradeGain />
        <Signals />
      </div>

      {/* chart section */}
      <TradeChart />

      {/* chat and setting section */}
      <div className='chat_and_setting'>
        <ChatSection />
        <Setting />
      </div>
    </div>
  )
}

export default MainRight