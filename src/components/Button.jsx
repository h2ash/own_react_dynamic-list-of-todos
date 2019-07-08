import React from 'react'

const Button = ({ isLoading, getData }) => (
  <div>
    
    <button onClick={getData}>
      {
        isLoading
          ? 'Loding...'
          : 'Load'
      }
    </button>
  </div>
)

export default Button