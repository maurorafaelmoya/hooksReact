import React, { useRef } from 'react'

export const FocusScreen = () => {

    const ref = useRef()
    console.log(ref)


    const onClick = () =>{
        // document.querySelector('input').focus();
        useRef()

    }

    return (
        <>
            <h1> FocusScreen</h1>
            <hr/>

            <input
                type='text'
                placeholder='Ingrese su nombre'
                className='form-control'
                />
            <input
                type='text'
                placeholder='Ingrese su nombre'
                className='form-control'
                />


            <button className='btn btn-primary mt-2' onClick={onClick}>
                setFocus
            </button>
        </>
    )
}
