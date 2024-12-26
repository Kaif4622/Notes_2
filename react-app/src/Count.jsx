import React, { useEffect, useState } from 'react'

function Count() {
    const [count, setCount] = useState(0);

      useEffect(()=> {
        
      },[count])
      
   
  return (
    <div className='mt-5 text-white flex justify-center'>
        <button className=' bg-black p-2 rounded-lg' onClick={()=>setCount(count+1)}>Count: {count}</button>
    </div>
  )
}

export default Count