
export const PokemonCard = ({id,name, sprites=[]}) => {

    return (
        <section>
            <h2 className="text-capitalize">  #{id} - {name} </h2>


            <div>
                {sprites.map(index=>(
                    <img key={index} src={index} alt={name} />
                ))}
            </div>


        </section>

    )
}
