import React, { useContext } from "react";
import ThemeContext from "./ThemeContext"; // Import the context

function Ucontext() {
    const theme = useContext(ThemeContext); // Access context value

    return (
      <div className={`p-4 ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
        The current theme is: {theme}
      </div>
    );
}

export default Ucontext