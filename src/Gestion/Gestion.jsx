import './Gestion.css'
import '../Navbar/Navbar'

import { useState } from 'react'


export function Gestion (){

    let array = []

    const valorinicial = {
        fecha: "",
        tipodocumento: "",
        numdocumento: "",
        tipoplan: "",
        sede: "",
        apellidos: "",
        nombres: "",
        tipogestion: "",
        diagnostico: "",
        medicoremitente: "",
    }

    const [values, setValues] = useState(valorinicial)

    const handleInputChange = (event) =>{
        
        const {name, value} = event.target
        setValues({
            ...values,
            [name]: value,

        })     

    }

   
   

    const handleForm = (event) => {
        event.preventDefault()
        alert("Se Ha creado la gestion")
        console.log(values)
        setValues({...valorinicial})

        array.push(values)
        console.log(array)

    }


    return(
        <>
        <section className='container my-5 p-5'>
            
            <div>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Ingresar Gestion</button>

                    <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Gestionado</button>               
                </div>
            </div>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active border border-top-0 rounded-bottom shadow-sm" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex="0">


                  <div className="container-fluid col-12 mx-1 p-5"> 
                    <form onSubmit={handleForm} className='container-fluid border rounded mt-5'>


                        <div className="container-fluid">

                            <div className="row container-fluid my-3 d-flex flex-column justify-content-start flex-md-row justify-content-md-between ">

                                <div className='col-4'>
                                    <label  className=' me-1' htmlFor="fecha">Fecha Gestion</label>
                                    <input className='my-1 border rounded p-1' type="date" name='fecha' required onChange={handleInputChange} value={values.fecha} />
                                </div>

                                <div className="col-3">
                                     <label className="mt-1 me-1" htmlFor="inputGroupSelect01">Tipo Documento</label>
                                    <select className='mt-1 py-1 border rounded' id="inputGroupSelect01" name='tipodocumento' required onChange={handleInputChange} value={values.tipodocumento} >
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
                                    <label className='mt-2 me-1' htmlFor="numdocumento">N° Documento</label>
                                    <input  className='border rounded' type="text" required name='numdocumento' onChange={handleInputChange} value={values.numdocumento} />
                                     
                                </div>                        
                            </div>
                            <div className="row mb-3">
                                <div className="col-6">
                                    <label className="mt-1 me-3" htmlFor="inputGroupSelect02">Tipo Plan</label>
                                        <select className='mt-1 py-1 border rounded' id="inputGroupSelect02" name='tipoplan' required onChange={handleInputChange} value={values.tipoplan} >
                                            <option value="">---</option>
                                            <option value="Poliza">Poliza</option>
                                            <option value="PBS">PBS</option>
                                            <option value="Particular">Particular</option>
                                        </select>
                                </div>

                                <div className="col-6">
                                <label className="mt-1 me-3" htmlFor="inputGroupSelect03">Sede</label>
                                    <select className='mt-1 py-1 border rounded' id="inputGroupSelect03" name='sede' required onChange={handleInputChange} value={values.sede} >
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
                                        <span className="input-group-text" id="basic-addon1">Nombres</span>
                                        <input type="text" className="form-control me-2" aria-label="Username" aria-describedby="basic-addon1" name='nombres' required onChange={handleInputChange} value={values.nombres}/>
                                    </div>
                                    <div className="col input-group mb-1">
                                        <span className="input-group-text" id="basic-addon1">Apellidos</span>
                                        <input type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1" name='apellidos' required onChange={handleInputChange} value={values.apellidos} />
                                    </div>
                                </div>
                            </div>
                        </div>     

                        <div className="row my-2 px-1">
                            <div className="input-group mb-3">
                                <label className="input-group-text" htmlFor="inputGroupSelect04">Tipo Gestion</label>
                                    <select className="form-select" id="inputGroupSelect04" name='tipogestion' required onChange={handleInputChange} value={values.tipogestion} >
                                        <option value="">---</option>
                                        <option value="Acondicionamiento Fisico">Acondicionamiento Fisco</option>
                                        <option value="Evaluacion Hidroterapia">Evaluacion Hidroterapia</option>
                                        <option value="Evaluacion Miembro Superior">Evaluacion miembro superior</option>
                                    </select>
                            </div>
                        </div>

                        <div className="row my-2">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Diagnostico</span>
                                <input className="form-control search border"  aria-label="Diagnostico" aria-describedby="basic-addon1" required id="autoComplete-input" type="text" dir="ltr"  autoCorrect="off" autoComplete="off" autoCapitalize="off" maxLength="2048" tabIndex="1" spellCheck="false" name='diagnostico' onChange={handleInputChange} value={values.diagnostico} />
                            </div>
                        </div>

                        <div className="row my-2">
                        <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Medico Remitente</span>
                                <input type="text" className="form-control"  aria-label="Nombre de usuario" aria-describedby="basic-addon1" required name='medicoremitente' onChange={handleInputChange} value={values.medicoremitente} />
                            </div>
                        </div>
                        <div className="row my-4">
                            <div className="col-12">
                                <button className="btn btn-primary" type="submit">Crear Gestion</button>
                            </div>
                        </div>
                    </form>    

                    </div>                
                    
                </div>

                    <div className="tab-pane fade border border-top-0" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex="0">
                        
                        
                    <table className='table table-responsive table-hover'>

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
                            array.map((datos)=>{
                                return(
                                    <tr key={index}>
                                        <td>datos.fecha</td>



                                    </tr>


                                )
                            })                                
                            
                        }           
                        </tbody>
                    
                    </table>     
                        
                        
                        
                        
                        
                        </div>            
                </div>


        </section>
        
        
        
        </>




    )
}