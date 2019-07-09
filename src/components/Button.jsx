import React from 'react'

const Button = ({ isLoading, getData }) => (
  <div>
    
    <button onClick={getData} disabled={isLoading}>
      {
        isLoading
          ? 'Loading...'
          : 'Load'
      }
    </button>
  </div>
)

export default Button