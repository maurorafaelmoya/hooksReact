import React, { useEffect, useState } from 'react'
import { ShowIncrement } from './ShowIncrement'
import { useCallback } from "react"

export const CallbackHook = () => {

    const [counter, setCounter] = useState(0)

    const increment = useCallback(
        (value) => {
            setCounter((index) => index + value)
        },
        [],
    )

    return (
        <>
            <h1>CallbackHook: {counter} </h1>
            <hr/>

            <ShowIncrement increment={increment}/>
            
        </>
    )
}
