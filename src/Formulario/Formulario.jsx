import "./Formulario.css"
import { Navbar } from "../Navbar/Navbar"

import { useState } from "react"
import { useNavigate } from "react-router-dom"


export function Formulario (){

    const [verCedula, guardarCedula] = useState("")
    const [verUsuario, guardarcarUsuario] = useState("")
    const [verContraseña, guardarContraseña] = useState("")







    let enrutador = useNavigate()

    function procesarFormulario (evento){
        evento.preventDefault()

        enrutador("/gestion")

    }


    return(
        <>
        <Navbar></Navbar>
            <section className="container ">
                 <div className="row justify-content-center text-center">
                    <div className="col-12 col-md-6">
                        <img className="img-fluid" src="../../src/assets/images/tigresolo.jpg" alt="logo sura" />
                        <form onSubmit={procesarFormulario} className="border rounded p-4 mb-5">
                            <h2>Iniciar sesion</h2>
                                <div className="input-group mb-3 mt-5">
                                    <span className="input-group-text" id="basic-addon1"><i className="bi bi-person-vcard-fill"></i></span>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Numero de Cedula"
                                        id="identificacion"
                                        onChange={function(evento){guardarCedula(evento.target.value)}}
                                        />
                                </div>
                                <div className="input-group mb-3 mt-2">
                                    <span className="input-group-text" id="basic-addon1">
                                    <i className="bi bi-person-circle"></i>
                                    </span>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Usuario"
                                        id="usuario"
                                        onChange={function(evento){guardarcarUsuario(evento.target.value)}}
                                        />
                                </div>

                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon1"><i className="bi bi-lock-fill"></i></span>
                                        <input 
                                        type="password" 
                                        className="form-control" 
                                        placeholder="Contraseña"
                                        id="contraseña"
                                        onChange={function(evento){guardarContraseña(evento.target.value)}}
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