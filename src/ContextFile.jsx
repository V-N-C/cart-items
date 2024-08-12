import { createContext } from "react";
import { useState } from "react";
import PropTypes from "prop-types";

//Context
const CounterContext = createContext();
const CounterProvider = ({ children }) => {
  
  const [count, setCount] = useState(1);
  
  const addItem = (inStock) => {
    if (count >= inStock) {
      alert("Out of Stock");
    } else {
      setCount((prev) => prev + 1);
    }
  };
  
  const deleteItem = () => {
    if (count === 1) {
      alert("No Items to remove");
    } else {
      setCount((prev) => prev - 1);
    }
  };
  return (
    <>
      <CounterContext.Provider value={{ count, addItem, deleteItem }}>
        {children}
      </CounterContext.Provider>
    </>
  );
};

export { CounterProvider, CounterContext };
CounterProvider.propTypes = {
  children: PropTypes.object,
};