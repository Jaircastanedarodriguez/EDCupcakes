import { NavLink } from "react-router-dom"
import Servicios from "../sections/Servicios"
import Cupcakes from "./cupcakes"

const Home = () => (
    <>
    <div className="main-banner img-container second-color">
        <div className="ed-grid lg-grid-6">
            <div className="lg-cols-4 lg-x-2">
                <img 
                className="main-banner__img" 
                src="https://saboryestilo.com.mx/wp-content/uploads/elementor/thumbs/Cupcakes-Decorados-Amor-p1dlq1bkhs6sul711553gw3khrymu9g6lfqxavfqkg.jpg"
                />
                <div className="main-banner__data s-center">
                    <p className="s-mb-0 t2">Bienvenido a EDCupcakes</p>
                    <p>Un sitio lleno de sabor!!</p>
                    <NavLink to="/cupcakes" className="button">Ver Cupcakes</NavLink>
                </div>
            </div>
        </div>
    </div>
    <Cupcakes peticion="cupcakes?Sabor_like=Fresa"/>
    <Servicios peticion="servicios"/>
    </>
    
)

export default Home