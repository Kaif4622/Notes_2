import React from "react";
import { useReducer } from "react";

function Ureducer() {
  const initialState = { count: 0 };

  const reducer = (state, action) => {
    switch (action.type) {
      case "increament":
        return { count: state.count + 1 };
      case "decreament":
        return { count: state.count - 1 };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg shadow-md space-y-4 w-80 mx-auto">
      {/* Counter Display */}
      <div className="text-2xl font-bold text-gray-800 bg-white py-2 px-6 rounded-md shadow-sm">
        {state.count}
      </div>

      {/* Buttons */}
      <div className="flex space-x-4">
        <button
          onClick={() => dispatch({ type: "increament" })}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 shadow-md transition"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch({ type: "decreament" })}
          className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 shadow-md transition"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Ureducer;
