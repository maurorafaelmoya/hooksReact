import { useEffect, useState } from "react";
import { Message } from "./message";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHooks = () => {

    const {formState, onResetForm,onInputChange, user, email, password} = useForm({
        user:'',
        email:'',
        password:''

    })

    // const {user, email, password} = formState;

    useEffect(() => {
        // console.log('useEffect called!')
    }, [])

    useEffect(() => {
        // console.log('useEffect called!')
    }, [user])

    useEffect(() => {
        // console.log('useEffect called!')
    }, [email])

    return (
        <>
            <h1>Formulario with Custom Hooks </h1>
            <hr/>

            <input 
                className="form-control"
                type="text"
                placeholder="Username"
                value={user}
                name="user"
                onChange={onInputChange}
                />
            <br/>
            <br/>
            <input 
                className="form-control mt-2"
                type="email"
                placeholder="correo@mail.com"
                name="email"
                value={email}
                onChange={onInputChange}
                />
            <br/>
            <br/>
            <input 
                className="form-control"
                type="password"
                placeholder="password"
                value={password}
                name="password"
                onChange={onInputChange}
                />

            <br/>
            <br/>
            <button className="btn btn-primary mt-2" onClick={onResetForm}> Borrar </button>

            {
                (user==='moya' && <Message/> )

            }
        </>
    )
}
