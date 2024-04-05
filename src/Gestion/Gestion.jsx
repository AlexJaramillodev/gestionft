import "./Gestion.css";
import "../Navbar/Navbar";

import {DatosJson} from "../utils/datosGestionFT1"
import { useRef, useState } from "react";

import { useLocation } from "react-router-dom";
import Swal from 'sweetalert2'


export function Gestion() {


  let location = useLocation() //activo el hook
  let usuario = location.state.usuario
  console.log(usuario)
  const formularioRef = useRef(null);


  const [verFecha, guardarFecha] = useState("");
  const [verTipoDocumento, guardarTipoDocumento] = useState("");
  const [verDocumento, guardarDocumento] = useState("");
  const [verPlan, guardarPlan] = useState("");
  const [verSede, guardarSede] = useState("");
  const [verNombre, guardarNombre] = useState("");
  const [verApellido, guardarApellido] = useState("");
  const [verGestion, guardarGestion] = useState("");
  const [verDiagnostico, guardarDiagnostico] = useState("");
  const [verMedicoRem, guardarMedicoRem] = useState("");
  const [verFiltro, modificarFiltro] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const [datosTabla, setDatosTabla] = useState(DatosJson);

  function procesarGestion(evento) {
    evento.preventDefault();

    if (!isNaN(verDocumento)) {
      let NewObject = {
              fecha_gestion: verFecha,
              tipo_documento: verTipoDocumento,
              numero_documento: verDocumento,
              tipo_plan: verPlan,
              sede: verSede,
              nombre: verNombre,
              apellido: verApellido,
              tipo_gestion: verGestion,
              diagnostico: verDiagnostico,
              medico_remitente: verMedicoRem
          }
      DatosJson.push(NewObject)
      setDatosTabla([...DatosJson]);
               
      const swalWithBootstrapButtons = Swal.mixin({
          customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger"
          },
          buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
          title: "¿Estás seguro de que los datos son correctos?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, Estoy seguro",
          cancelButtonText: "No, cancelar!",
          reverseButtons: true
        }).then((result) => {
          if (result.isConfirmed) {
            swalWithBootstrapButtons.fire({
              title: "Guardado!",
              text: "Tú información ha sido guardada.",
              icon: "success"
            });
            formularioRef.current.reset(); //Limpia el formulario
          } else if (
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire({
              title: "Cancelada",
              text: "El proceso de ingresar datos fue cancelado",
              icon: "error"
            });
          }
      });      

    }else{
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Ingresa sólo números en el campo N° Documento",
          });
   }
    
}

let itemSelected

if (selectedOption == "numero_documento" || selectedOption == "diagnostico") {
    itemSelected = selectedOption
}else{
    itemSelected = selectedOption.toLowerCase()
}
  
const filtrarPorPalabra = selectedOption !== '' ? datosTabla.filter(datos =>
  datos[itemSelected].toLowerCase().includes(verFiltro.toLowerCase())
) : datosTabla;



  return (
    <>
       <nav className="navbar shadow-sm border-bottom-3 nav-color" >
                <div className="container-fluid">
                    <div className='portal-header'>
                        <figure className='figura'>
                            <img 
                                src="../../src/assets/images/logoBlanco.svg"
                                alt="Bootstrap"
                                className="img-logo"/>
                        </figure>
                        <div _ngcontent-ng-c1972906931="" className="portal-header-title">
                            <h1 _ngcontent-ng-c1972906931="">Gestion Virtual</h1>
                        </div>
                    </div>
                    <p className='navusuario me-2'>Usuario: {usuario.usuario}</p>
                </div>
            </nav>


      <section className="container my-5 p-5">
        <div>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              className="nav-link active"
              id="nav-home-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-home"
              type="button"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              Ingresar Gestion
            </button>

            <button
              className="nav-link"
              id="nav-profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-profile"
              type="button"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
            >
              Gestionado
            </button>
          </div>
        </div>
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active border border-top-0 rounded-bottom shadow-sm"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
            tabIndex="0"
          >
            <div className="container-fluid col-12 mx-1 p-5">
              <form
                onSubmit={procesarGestion}
                className="container-fluid border rounded mt-5"
              >
                <div className="container-fluid">
                  <div className="row container-fluid my-3 d-flex flex-column justify-content-start flex-md-row justify-content-md-between ">
                    <div className="col-4">
                      <label className=" me-1" htmlFor="fecha">
                        Fecha Gestion
                      </label>
                      <input
                        className="my-1 border rounded p-1"
                        type="date"
                        name="fecha"
                        required
                        onChange={function(evento){guardarFecha(evento.target.value)}}
                      />
                    </div>

                    <div className="col-3">
                      <label className="mt-1 me-1" htmlFor="inputGroupSelect01">
                        Tipo Documento
                      </label>
                      <select
                        className="mt-1 py-1 border rounded"
                        id="inputGroupSelect01"
                        name="tipodocumento"
                        required
                        onChange={function(evento){guardarTipoDocumento(evento.target.value)}}
                      >
                        <option value="">---</option>
                        <option value="CC">CC</option>
                        <option value="TI">TI</option>
                        <option value="RC">RC</option>
                        <option value="CE">CE</option>
                        <option value="PE">PE</option>
                        <option value="PT">PT</option>
                      </select>
                    </div>

                    <div className="col-5">
                      <label className="mt-2 me-1" htmlFor="numdocumento">
                        N° Documento
                      </label>
                      <input
                        className="border rounded"
                        type="text"
                        id="num-documento"
                        required
                        name="numdocumento"
                        onChange={function (evento){guardarDocumento(evento.target.value)}}
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-6">
                      <label className="mt-1 me-3" htmlFor="inputGroupSelect02">
                        Tipo Plan
                      </label>
                      <select
                        className="mt-1 py-1 border rounded"
                        id="inputGroupSelect02"
                        name="tipoplan"
                        required
                        onChange={function(evento){guardarPlan(evento.target.value)}}
                      >
                        <option value="">---</option>
                        <option value="Poliza">Poliza</option>
                        <option value="PBS">PBS</option>
                        <option value="Particular">Particular</option>
                      </select>
                    </div>

                    <div className="col-6">
                      <label className="mt-1 me-3" htmlFor="inputGroupSelect03">
                        Sede
                      </label>
                      <select
                        className="mt-1 py-1 border rounded"
                        id="inputGroupSelect03"
                        name="sede"
                        required
                        onChange={function(evento){guardarSede(evento.target.value)}}
                      >
                        <option value="">---</option>
                        <option value="Industriales">Industriales</option>
                        <option value="Calle 100">Calle 100</option>
                        <option value="Chipichape">Chipichape</option>
                      </select>
                    </div>
                  </div>

                  <div className="row my-2">
                    <div className="container input-group col-12 p-2 mb-2 d-flex">
                      <div className="col input-group mb-1">
                        <span className="input-group-text" id="basic-addon1">
                          Nombres
                        </span>
                        <input
                          type="text"
                          className="form-control me-2"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          name="nombres"
                          required
                          onChange={function(evento){guardarNombre(evento.target.value)}}
                        />
                      </div>
                      <div className="col input-group mb-1">
                        <span className="input-group-text" id="basic-addon1">
                          Apellidos
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          name="apellidos"
                          required
                          onChange={function(evento){guardarApellido(evento.target.value)}}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row my-2 px-1">
                  <div className="input-group mb-3">
                    <label
                      className="input-group-text"
                      htmlFor="inputGroupSelect04"
                    >
                      Tipo Gestion
                    </label>
                    <select
                      className="form-select"
                      id="inputGroupSelect04"
                      name="tipogestion"
                      required
                      onChange={function(evento){guardarGestion(evento.target.value)}}
                    >
                      <option value="">---</option>
                      <option value="Acondicionamiento Fisico">Acondicionamiento Fisco</option>
                      <option value="Evaluacion Hidroterapia">Evaluacion Hidroterapia</option>
                      <option value="Evaluacion Miembro Superior">Evaluacion miembro superior</option>
                      <option value="Evaluacion Miembro Inferior">Evaluacion miembro inferior</option>
                      <option value="Evaluacion Columna">Evaluacion Columna </option>
                    </select>
                  </div>
                </div>

                <div className="row my-2">
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      Diagnostico
                    </span>
                    <input
                      className="form-control search border"
                      aria-label="Diagnostico"
                      aria-describedby="basic-addon1"
                      required
                      id="autoComplete-input"
                      type="text"
                      //dir="ltr"
                    //   autoCorrect="off"
                    //   autoComplete="off"
                    //   autoCapitalize="off"
                    //   maxLength="2048"
                    //   tabIndex="1"
                    //   spellCheck="false"
                      name="diagnostico"                       
                      onChange={function(evento){guardarDiagnostico(evento.target.value)}}
                    />
                  </div>
                </div>

                <div className="row my-2">
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      Medico Remitente
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      aria-label="Nombre de usuario"
                      aria-describedby="basic-addon1"
                      required
                      name="medicoremitente"
                      onChange={function(evento){guardarMedicoRem(evento.target.value)}}  
                    />
                  </div>
                </div>
                <div className="row my-4">
                  <div className="col-12">
                    <button className="btn btn-primary" type="submit">
                      Crear Gestion
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>




          <div
                className="tab-pane fade border border-top-0"
                id="nav-profile"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
                tabIndex="0"
                >
                <div className='contain-Filter'>
                            <select 
                            className='ContainerLista m-3'
                            value={selectedOption} 
                            onChange={function(evento){setSelectedOption(evento.target.value)}}
                            >
                                <option value="">Seleccione la opción de filtro</option>
                                <option value="fecha_gestion">Fecha Gestión</option>
                                <option value="tipo_documento">Tipo documento</option>
                                <option value="numero_documento">N° Documento</option>
                                <option value="tipo_plan">Tipo plan</option>
                                <option value="sede">Sede</option>
                                <option value="nombre">Nombre</option>
                                <option value="apellido">Apellido</option>
                                <option value="tipo_gestion">Tipo gestión</option>
                                <option value="diagnostico">Diagnóstico</option>
                                <option value="medico_remitente">Médico remitente</option>
                            </select>
                            <input 
                                type='text'
                                id='search'
                                className='form-control col-md-1 formTamano' 
                                placeholder='Ingrese filtro'
                                value={verFiltro}
                                onChange={function(evento){modificarFiltro(evento.target.value)}}
                            />
                        </div>

                        <table className='table table-responsive table-hover table-striped'>
                            <thead>
                                <tr>
                                    <th>Fecha Gestion</th>
                                    <th>Tipo Documento</th>
                                    <th>N° Documento</th>
                                    <th>Tipo pLan</th>
                                    <th>Sede</th>
                                    <th>Nombres</th>
                                    <th>Apellido</th>
                                    <th>Tipo Gestion</th>
                                    <th>Diagnostico</th>
                                    <th>Medico Remitente</th>
                                </tr>
                            </thead>
                            <tbody>
                                {   
                                    /*
                                    basedatos.map(function(info){
                                        return(
                                            <tr>
                                                <td>{info.fecha_gestion}</td>
                                                <td>{info.tipo_documento}</td>
                                                <td>{info.numero_documento}</td>
                                                <td>{info.tipo_plan}</td>
                                                <td>{info.sede}</td>
                                                <td>{info.nombre}</td>
                                                <td>{info.apellido}</td>
                                                <td>{info.tipo_gestion}</td>
                                                <td>{info.diagnostico}</td>
                                                <td>{info.medico_remitente}</td>
                                            </tr>
                                        )

                                    })
                                    */
                                    filtrarPorPalabra.map((info, index) => (
                                        <tr key={index}>
                                            <td>{info.fecha_gestion}</td>
                                            <td>{info.tipo_documento}</td>
                                            <td>{info.numero_documento}</td>
                                            <td>{info.tipo_plan}</td>
                                            <td>{info.sede}</td>
                                            <td>{info.nombre}</td>
                                            <td>{info.apellido}</td>
                                            <td>{info.tipo_gestion}</td>
                                            <td>{info.diagnostico}</td>
                                            <td>{info.medico_remitente}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>     
          
          
          
          
          
          
          
          </div>


        </div>



      </section>
    </>
  );
}
