import { useEffect, useState } from "react";
import { Message } from "./message";

export const SimpleForm = () => {

    const [formState, setformState] = useState({
        user:'',
        email:''
    })

    const {user, email} = formState;

    const onInputChange = ({target}) =>{
        const {name, value} = target; 
        setformState({
            ...formState, 
            [name]: value 
        })
    }

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
            <h1>Formulario</h1>
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

            {
                (user==='moya' && <Message/> )

            }
        </>
    )
}
