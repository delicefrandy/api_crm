import LoginForm from "../component/LoginForm"


const NuevoCliente = () => {
  return (
    <div >
      <p className='my-3 text-blue-900 text-5xl font-black'>Nuevo Cliente </p>
      <p className="text-2xl">Llena los siguientes campos para registrar un cliente</p>

      <LoginForm/>
      
    </div>
  )
}

export default NuevoCliente