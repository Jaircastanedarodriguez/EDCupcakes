import "../styles/styles.scss"
import Header from "./sections/Header"
import Home from "./pages/home"
import Cupcakes from "./pages/cupcakes"
import AbautUs from "./pages/abautUs"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


const App = () => (
  <BrowserRouter>
    <Header/>
    <Routes>  
      <Route path="/cupcakes" element={<Cupcakes title peticion="cupcakes"/>}></Route>
      <Route path="/abautUs" element={<AbautUs/>}></Route>
      <Route path="/" element={<Home/>}></Route>
    </Routes>
  </BrowserRouter>
)

export default App;
