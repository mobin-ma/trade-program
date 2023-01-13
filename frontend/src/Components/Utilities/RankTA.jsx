import React from 'react'

const RankTA = ({ rank }) => {
  return (
    rank ? <div className='rank_td'>TA</div> : null
  )
}

export default RankTA