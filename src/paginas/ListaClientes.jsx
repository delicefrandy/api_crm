import { useNavigate } from "react-router-dom"

const ListaClientes = ({cliente,handleDelete}) => {

    const {
        nombre,
        empresa,
        email,
        telefono, 
        nota,
        id
    }=cliente

    

    const navigate =useNavigate()

  return (
    <div className='bg-gray-100 md:w-4/5 m-auto text-gray-700 capitalize rounded-md px-5 h-64 shadow-md hover:bg-slate-200'>
        <div>
            
          
            
          <div className='flex justify-around text-xl py-10'>
                <div>
                    <p>{nombre}</p>
                </div>
                <div>
                    <p>Phone: <span>{telefono}</span></p>
                    <p>Email: <span>{email}</span></p>
                </div>
                <div>
                  <p>Empresa: <span>{empresa}</span></p>  
                </div>
          </div>
            
            
            
            
        </div>
        <div className='flex justify-around '>
            <button
                onClick={()=> navigate(`/clientes/editar/${id}`)}
                type='button'
                className='bg-blue-500 p-3 px-20 mt-3 rounded-md uppercase text-white font-black hover:bg-blue-800 cursor-pointer'
            >
                Update
            </button>

            <button
                onClick={()=>navigate(`/clientes/editar/${id}`)}
                type='button'
                className='bg-yellow-500 py-3 px-24 mt-3 rounded-md uppercase text-white font-black hover:bg-yellow-600 cursor-pointer'
            >
                VER
            </button>


            <button
                onClick={() => handleDelete(id)}
                type='button'
                className='bg-red-500 py-3 px-20 mt-3 rounded-md uppercase text-white font-black hover:bg-red-600 cursor-pointer'
            >
                Delete
            </button>

        </div>

        
    </div>
  )
}

export default ListaClientes