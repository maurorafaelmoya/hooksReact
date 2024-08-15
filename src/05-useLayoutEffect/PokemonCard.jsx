import { useLayoutEffect, useRef, useState } from "react"

export const PokemonCard04 = ({id,name, sprites=[], abilities}) => {

    const pRef = useRef();
    const [boxSize, setBoxSize] = useState({width:0, height:0 })

    useLayoutEffect(() => {

        console.log(pRef.current.getBoundingClientRect())
        const {width, height} = pRef.current.getBoundingClientRect()
        setBoxSize({width, height})

    }, [])

    return (
        <section>
            <h2 className="text-capitalize" >  #{id} - {name} </h2>

            <div >
                <ol ref={pRef}>
                    {abilities.map(index => (
                        <li> {index.ability.name}</li>  
                    ))}
                </ol>
            </div>


            <div>
                {sprites.map(index=>(
                    <img key={index} src={index} alt={name} />
                ))}
            </div>

            <h4 style={{color:'red'}}> {JSON.stringify(boxSize)} </h4>


        </section>

    )
}
