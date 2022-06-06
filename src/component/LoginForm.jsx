import { Formik,Form, Field } from "formik"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Mistake from "./Mistake";
import * as yup from 'yup';
import SendForm from "./SendForm";
import Spinner from "../paginas/Spinner";



const LoginForm = ({cliente,cargando}) => {




  
    const [enviarForm, setEnviarForm]=useState(false)
    const navigate =useNavigate()
    const validarFormulario = yup.object().shape({
        nombre: yup.string()
                   .min(3, "el nombre es muy corto")
                   .max(18, "este nombre es demasiado largo")
                   .required("el campo nombre es obligatorio"),
        empresa: yup.string()
                    .required("el campo de empresa es obligatorio"),
        email: yup.string()
                  .email("el correo no valido")
                  .required("el campo de email es obligatorio"),
                  
        telefono: yup.number().typeError("solo se permita numeros")
                    .positive("el numero no es valida")
                    .integer("no es valido el numero"),
        nota:   yup.string()
                    
                 
    })

    const handleSubmit = async (value)=>{
        
        
        try {
            let reponse
         if (cliente.id){
            const url=`http://localhost:3000/clientes/${cliente.id}` 
            reponse= await fetch(url,{
                method: 'PUT',
                body: JSON.stringify(value),
                headers: {
                    'Content-Type': 'application/json'
                }

            
            })
         }else{
            const url="http://localhost:3000/clientes" 
            reponse= await fetch(url,{
                method: 'POST',
                body: JSON.stringify(value),
                headers: {
                    'Content-Type': 'application/json'
                }

            
            })


         }
            const result =  await reponse.json() 
            setTimeout(() => {
                navigate("/clientes")
            }, 1600);

            
            
        } catch (error) {
            console.log(error)
        } 
        
        
        
        
        
    }
  return (
      
    <div>
        {cargando ? <Spinner/> : (
        <div className=' bg-white px-5 py-12 rounded-xl shadow-md  my-12 md:w-3/4 mx-auto'>
            <h1 className='text-3xl uppercase text-center'>{cliente?.nombre ?"editar cliente" : "agregar cliente" } </h1>
        
            <Formik 
                    initialValues={{
                        nombre: cliente?.nombre ?? "",
                        empresa: cliente?.empresa ??"",
                        email: cliente?.email ??"",
                        telefono: cliente?.telefono ??"",
                        nota: cliente?.nota ??"",
                    }}
                    enableReinitialize={true}
                
                    onSubmit={ async (value, {resetForm})=>{
                        await handleSubmit(value)
                        resetForm();
                        setEnviarForm(true)
                    }}
                    validationSchema={validarFormulario}
                    
            >
                {({errors,touched})=>{
                    //console.log(touched)
        
                    return (
        
                    <Form>
                        <div className="mt-10">
                                <label 
                                    className="text-gray-900 text-xl"
                                    htmlFor="nombre"
                                >Nombre:</label>
                                <Field
                                    type="text"
                                    className="block bg-gray-100 p-4 rounded-lg w-full mt-3 text-xl"
                                    placeholder ="Ingresa el nombre del cliente"
                                    name="nombre"
                                />
                                {errors.nombre && touched.nombre ? 
                                (<Mistake>{errors.nombre}</Mistake> ) : null}
                        </div>
        
                        <div className="mt-10">
                                <label 
                                    className="text-gray-900 text-xl"
                                    htmlFor="empresa"
                                >Empresa:</label>
                                <Field
                                    type="text"
                                    id=""
                                    className="block bg-gray-100 p-4 rounded-lg w-full mt-3 text-xl"
                                    placeholder ="Empresa"
                                    name="empresa"
                                    
        
                                />
                                {errors.empresa && touched.nombre ? 
                                (<Mistake>{errors.empresa}</Mistake> ) : null}
                        </div>
        
                        <div className="mt-10">
                                <label 
                                    className="text-gray-900 text-xl"
                                    htmlFor="email"
                                >E-mail:</label>
                                <Field
                                    type="email"                            
                                    className="block bg-gray-100 p-4 rounded-lg w-full mt-3 text-xl"
                                    placeholder ="Email"
                                    name="email"
        
                                />
                                {errors.email && touched.nombre ? 
                                (<Mistake>{errors.email}</Mistake> ) : null}
                        </div>
        
                        <div className="mt-10">
                                <label 
                                    className="text-gray-900 text-xl"
                                    htmlFor="telefono"
                                >Telefono:</label>
                                <Field
                                    type="phone"                            
                                    className="block bg-gray-100 p-4 rounded-lg w-full mt-3 text-xl"
                                    placeholder ="Telefono"
                                    name="telefono"
        
                                />
                                {errors.telefono && touched.nombre ? 
                                (<Mistake>{errors.telefono}</Mistake> ) : null}
                        </div>
        
                        <div className="mt-10">
                                <label 
                                    className="text-gray-900 text-xl"
                                    htmlFor="nota"
                                >Nota:</label>
                                <Field
                                    as="textarea"
                                    type="text"                            
                                    className="block bg-gray-100 p-4 rounded-lg w-full mt-3 text-xl h-40"
                                    placeholder ="Nota del cliente"
                                    name="nota"
                                />
                        </div>
        
                        <input 
                                type="submit"  
                                value={cliente?.nombre ? "update client" : "send Form"}
                                className="bg-blue-900 block w-full mt-5 p-5 rounded-md font-bold text-xl text-white uppercase "
                        />
                        {enviarForm && (<SendForm>tus datos fue enviado con exito</SendForm>) }
                    
                    </Form>
                    
                )}}
            
            </Formik>
        </div>
        )}
    </div>
  )
}

LoginForm.defaultProps ={
    cliente: {},
    cargando: false
}

export default LoginForm