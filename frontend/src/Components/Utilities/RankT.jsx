import React from 'react'

const RankT = ({ rank }) => {
  return (
    rank ? <div className='rank_t'>T</div> : null
  )
}

export default RankT