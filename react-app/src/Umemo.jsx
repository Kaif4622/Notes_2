import React, { useState, useMemo } from "react";

function Umemo() {
  const [count, setCount] = useState(0);

  // Using useMemo to memoize the expensive calculation
  const expensiveCalculation = useMemo(() => {
    console.log("Expensive calculation running...");
    return count * 1000;
  }, [count]); // Only recompute when 'count' changes

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Count Display */}
      <h2 className="text-4xl font-bold mb-4 text-gray-800">Count: {count}</h2>
      
      {/* Expensive Calculation Result */}
      <p className="text-lg font-medium text-gray-700 bg-white p-4 rounded-lg shadow-md mb-4">
        Expensive calculation result: {expensiveCalculation}
      </p>
      
      {/* Buttons */}
      <button 
        onClick={() => setCount(count + 1)}
        className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 shadow-lg transition"
      >
        Increment
      </button>
    </div>
  );
}

export default Umemo;
