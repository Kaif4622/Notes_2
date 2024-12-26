import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increament, decreament, reset } from './Action'

function Counter() {
    const count = useSelector((state) => state.count)
    const dispatch = useDispatch()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
       <h1 className="text-3xl font-semibold text-gray-800 mb-8">Count: {count}</h1>

      <div className="flex space-x-6">
        <button
          onClick={() => dispatch(increament())}
          className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:shadow-lg transform transition-all hover:scale-105"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decreament())}
          className="px-6 py-3 bg-red-500 text-white rounded-lg shadow-md hover:shadow-lg transform transition-all hover:scale-105"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch(reset())}
          className="px-6 py-3 bg-gray-500 text-white rounded-lg shadow-md hover:shadow-lg transform transition-all hover:scale-105"
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default Counter
