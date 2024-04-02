import "./Formulario.css"

import { useState } from "react"


export function Formulario (){

    const [verCedula, modificarCedula] = useState("")
    const [verContraseña, modificarContraseña] = useState("")

    function procesarFormulario (){

        
    }


    return(
        <>
            <section className="container ">
                 <div className="row justify-content-center text-center">
                    <div className="col-12 col-md-6">
                        <img className="img-fluid" src="../../src/assets/sura.png" alt="logo sura" />
                        <form className="border rounded p-4 mb-5">
                            <h2>Iniciar sesion</h2>
                                <div className="input-group mb-3 mt-5">
                                    <span className="input-group-text" id="basic-addon1"><i className="bi bi-person-vcard-fill"></i></span>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Numero de Cedula"
                                        id="identificacion"
                                        />
                                </div>

                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon1"><i className="bi bi-lock-fill"></i></span>
                                        <input 
                                        type="password" 
                                        className="form-control" 
                                        placeholder="Contraseña"
                                        id="contraseña"
                                        />
                                </div>

                                <button type="submit" className="btn btn-primary btn-lg">Ingresar</button>
                        </form>
                    </div>
                </div>
            </section>
        
        </>



    )
}