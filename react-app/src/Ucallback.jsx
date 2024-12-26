import React, { useCallback, useState } from 'react'

function Ucallback() {
    const [count, setCount] = useState(0)
    const increament = useCallback(()=> {
        console.log("usecallback")
        setCount((prev)=> prev+1)
    },[])

  return (
    <div>
        <p>count: {count}</p>
        <button onClick={increament}>Increament</button>
    </div>
  )
}

export default Ucallback