import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import Spinner from "./Spinner";

const NewClient = () => {
    
    const [cliente, setCliente]= useState({})
    const [cargando, setCargando]=useState(true)


    const { id }=useParams();
    

    useEffect (()=>{
        
        const consultarAPI = async ()=> {
         
            const url2  = `http://localhost:3000/clientes/${id}`
            const petition = await fetch (url2)
            const reponse = await petition.json()
            setCliente(reponse)

           setCargando(!cargando) 
        }
        
        consultarAPI()
    }, [])

    
  return (

    <>
        {cargando ? (<Spinner/>)
        : (
        <div>
            {cliente.nombre ? (
                <div className="md:w-4/5 bg-slate-100 shadow-md rounded-md mx-auto pt-10 pb-5 ">
                <h2 className="text-center text-2xl text-blue-700 uppercase font-black">nombre del cliente: <span className="text-3xl">{cliente.nombre}</span> </h2>
                <div className="mx-5 py-10 ">
                    <p className="text-xl py-5 font-bold">Informacion del cliente </p>
                    <p className="text-xl mt-2 uppercase font-bold">Empresa: <span className="text-xl font-normal lowercase">{cliente.empresa}</span></p>
                    <p className="text-xl mt-2 uppercase font-bold">email: <span className="text-xl font-normal lowercase">{cliente.email}</span></p>
                    <p className="text-xl mt-2 uppercase font-bold">telefono: <span className="text-xl font-normal lowercase">{cliente.telefono}</span></p>
                    {cliente.nota ? (<p className="text-xl mt-2 uppercase font-bold">nota: <span className="text-xl font-normal lowercase">{cliente.nota}</span></p>) 
                    : ""}
                    
                </div>
            </div>
            ) : (
                <h2 className="text-center text-3xl text-blue-700 uppercase font-black">cliente no existe:  </h2>  
            )}
        </div>
        )}
    </>
  )
}

export default NewClient