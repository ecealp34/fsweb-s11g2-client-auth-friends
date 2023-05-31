import { useState } from "react";

export default function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
  
    const localValue = JSON.parse(localStorage.getItem(key));
    if (localValue === null) {
     
      localStorage.setItem(key, JSON.stringify(defaultValue));
      console.log("local boş", defaultValue);
      return defaultValue;
    } else {
      
      console.log("local dolu", localValue);
      return localValue;
    }
  });
  const setLocalStorage = (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue));
    setValue(newValue);
  };

  return [value, setLocalStorage];
}
