import React from 'react'

// Add Css File
import './MainLeft/mainLeft.css'

// Add main left components
import Activity from './MainLeft/Activity'
import Portfolio from './MainLeft/Portfolio'
import ProFile from './MainLeft/ProFile'
import TeamMembers from './MainLeft/TeamMembers'

const MainLeft = () => {
  return (
    <div className='main_left'>
      <ProFile />
      <Portfolio />
      <Activity />
      <TeamMembers />
    </div>
  )
}

export default MainLeft