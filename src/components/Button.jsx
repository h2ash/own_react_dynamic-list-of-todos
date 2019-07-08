import React from 'react'

const Button = ({ isLoading, getData, todosWithUsers }) => (
  
  <div>
    {/* {console.log(todosWithUsers.length);} */}
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