import React, { useEffect, useRef } from 'react'

function Ref() {
    const inputRef = useRef(null);
    useEffect(()=> {
        if(inputRef.current){
            inputRef.current.focus()
            setTimeout(()=> {
                inputRef.current.style.background = 'red'
            },2000)
        }
    },[])

  return (
    <div>
        <input className='bg-black text-white' type="text" ref={inputRef}/>

    </div>
  )
}

export default Ref