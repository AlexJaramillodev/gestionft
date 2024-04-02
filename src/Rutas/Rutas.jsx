import { Formulario } from "../Formulario/Formulario";
import { Gestion } from "../Gestion/Gestion";


import { Routes, Route } from "react-router-dom";


export function Rutas(){

    return(
        <>
            <Routes>
                <Route path="/" element={<Formulario></Formulario>}></Route>
                <Route path="/gestion" element={<Gestion></Gestion>}></Route>
                


            </Routes>
        
        
        
        </>


    )
}
