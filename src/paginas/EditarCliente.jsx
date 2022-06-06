import LoginForm from "../component/LoginForm"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";



const EditarCliente = () => {
  const [cliente, setCliente]= useState({})
  const [cargando, setCargando]=useState(true)


  const { id }=useParams();
  //console.log(id)

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
    < >
    {cliente.nombre ?
    (
      <div>
       
          <p className='my-3 text-blue-900 text-5xl font-black'>Editar Cliente </p>
          <p className="text-2xl">Datos del cliente para ser modificado</p>
        
          <LoginForm
            cliente={cliente}
            cargando={cargando}
            setCargando={setCargando}
          />
          
      </div>
    )
    :
    (<p className='my-3 text-blue-900 text-5xl font-black'>Cliente no existe </p>)}
    </>
  )
}

export default EditarCliente