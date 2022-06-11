import useFetch from "../../hooks/useFetch"
import Cupcake from "../cards/Cupcake"

const Cupcakes = ({ peticion, title }) => {
    
    const [cupcakes, error] = useFetch(peticion)

    return (
        <div className="ed-grid">
            {title && <h1>Página de Cupcakes</h1>}
            {
                cupcakes ? (
                    <section className="ed-grid s-grid-2 m-grid-3 lg-grid-4 row-gap">
                        {
                            cupcakes.map(({
                                id,
                                Descripcion,
                                Imagen,
                                Sabor,
                                Color,
                                Precio
                            }) => (
                            <Cupcake
                                key={id}
                                Imagen={Imagen}
                                Descripcion={Descripcion}
                                Sabor={Sabor}
                                Color={Color}
                                Precio={Precio}
                            />
                            ))
                        }
                    </section>
                ) : (
                    <span>Cargando ...</span>
                )
            }
        </div>
    )
}

export default Cupcakes