import { useState } from "react"

export const useCounter = (initialValue  ) => {

    const [counter, setCounter] = useState(initialValue)    

    const increment = ()=>{
        setCounter(counter +1)
    }

    const minus = ()=>{
        setCounter(counter -1)
    }

    const reset = ()=>{
        setCounter(0)
    }

    return {
        counter,
        increment,
        minus,
        reset
    }
}