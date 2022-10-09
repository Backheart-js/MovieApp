import { useState, useEffect } from "react";

function useDebounce(value, delay) {
    const [valueDebounce, setValueDebounce] = useState(value);

    useEffect(() => {
      const handleTimeout = setTimeout(() => setValueDebounce(value), delay)
    
      return () => {
        clearTimeout(handleTimeout)
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])
    
    return valueDebounce
}

export default useDebounce;