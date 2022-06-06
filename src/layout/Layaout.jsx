import { Outlet,Link, useLocation } from "react-router-dom"

const Layaout = () => {

  const location = useLocation()
  const urlActual = location.pathname
  //console.log(urlActual)

  return (
    <div className=" md:flex md:min-h-screen">

        <div className="md:w-1/5 h-full bg-blue-700 md:min-h-screen">
          <h2 className="text-5xl text-center text-white font-bold my-3 p-10">CRM-Clientes</h2>

          <nav>
            
            <Link
                className={` block text-2xl mx-10 mt-2 hover:text-blue-200  ${urlActual==="/clientes" ? "text-blue-200" : "text-white "}`}
                to="/clientes">Clientes
            </Link>

            <Link 
                 className={` block text-2xl mx-10 mt-2 hover:text-blue-200  ${urlActual==="/clientes/nuevo" ? "text-blue-200" : "text-white "}`}
                to="/clientes/nuevo">Nuevo Clientes
            
            </Link>
            
          </nav>
        </div>

        <div className="md:w-3/4 p-10 md:h-screen overflow-scroll">
          {<Outlet/>}
        </div>
    </div>
    
  )
}

export default Layaout