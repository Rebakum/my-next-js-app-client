"use client";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((count) => count + 1);
  };

  const handleDecrement = () => {
    setCount((count) => count - 1);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Counter Page</h1>
      <div className="bg-white p-8 rounded-xl shadow-md text-center">
        <p className="text-2xl font-semibold mb-6">Count: {count}</p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={handleDecrement}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg"
          >
            Decrement
          </button>
          <button
            onClick={handleIncrement}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-lg"
          >
            Increment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
