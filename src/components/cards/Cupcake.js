import {number, string} from "prop-types"

const Cupcake = ({ Descripcion,
    Imagen,
    Sabor,
    Color,
    Precio
    }) => {
    return (
        <div className="s-radius-1 s-shadow-bottom background s-shadow-card-micro white-color s-pxy-2">
            <img src= {Imagen} alt={ Sabor }/>
            <p>{Descripcion}</p>
            <span>Color: {Color} </span>
            <p>Precio: {Precio} </p>
        </div>
    )
}

Cupcake.propTypes = {
    Precio: number,
    Sabor: string.isRequired,
    Color: string.isRequired,
    Descripcion: string.isRequired 

}

Cupcake.defaultProps = {
    Imagen: "https://thumbs.dreamstime.com/b/ilustraci%C3%B3n-vectorial-en-blanco-y-negro-de-cupcake-158247637.jpg",
    Precio: 0
}

export default Cupcake