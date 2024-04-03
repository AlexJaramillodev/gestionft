import "./Formulario.css"
import { Navbar } from "../Navbar/Navbar"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'

import basedatosusuariossura from "../utils/basedatosusuariossura.json"


export function Formulario (){

    const [verCedula, guardarCedula] = useState("")
    const [verUsuario, guardarcarUsuario] = useState("")
    const [verContraseña, guardarContraseña] = useState("")

    let enrutador = useNavigate()

    function procesarFormulario (evento){
        evento.preventDefault()
        //Buscamos coincidencia entre lo que escribe el usuario
        //en el formulario y el json de la BD
        let busqueda = basedatosusuariossura.find(function(usuariosura){
            return(
                usuariosura.cedula==verCedula && usuariosura.usuario==verUsuario && usuariosura.contraseña==verContraseña
            )
        })

        console.log(busqueda)
        if(busqueda == undefined){
            Swal.fire({
                icon: "error",
                title: "Usuario o clave inválida",
                text: "Algo salió mal",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
        }else{
            //Voy a enrutar otro componente(¿Como lanzo un componente desde cero?)
            enrutador("/gestion",{state:{usuario:busqueda}})
        }
    }

    return(
        <>
        <Navbar></Navbar>
            <section className="container ">
                 <div className="row justify-content-center text-center">
                    <div className="col-12 col-md-6">
                        <img className="img-fluid  mt-5" src="../../src/assets/images/tigresolo.jpg" alt="logo sura" />
                        <form onSubmit={procesarFormulario} className="border p-4 mb-5">
                            <h2 className="titleContain">Iniciar sesion</h2>
                            <h2 className='lbltitleContain'><span >Sucursal virtual</span></h2>
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

                                <button type="submit" className="btn btn-primary btn-lg btnColor">Ingresar</button>
                        </form>
                    </div>
                </div>
            </section>
        
        </>



    )
}