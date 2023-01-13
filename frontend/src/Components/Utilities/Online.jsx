import React from 'react'

const Online = ({online}) => {
  return (
    <div className={`${online ? 'online' : 'offline'}`}></div>
  )
}

export default Online