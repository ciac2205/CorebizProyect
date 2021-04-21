import React, {useState} from "react";
import { useForm } from 'react-hook-form';
import { postForm } from '../Helpers/Fetchs'
import styled from 'styled-components';
import palette from '../Styles/Variables';

// STYLED
const FormSection = styled.section`
width:100%;
min-width:320px;
height:150px;
background-color:${palette.intenseWhite};
margin-top:60px;
@media (max-width:450px){
    height:auto;
}
@media (max-width:599px){
    height:auto;

}
@media (max-width:740px){
    height:auto;
    
}

h1{
    justify-content:center;
    padding:10px;
    color:${palette.grayBlack};
    font-family:'Nunito', sans-serif;
    font-size:2.2rem;
    font-weight:bold;
    @media (max-width:450px){
    text-align:left;
    margin-left:10px;
}
  
}
`;
const FormContainer = styled.div`
display:inline-block;
form{
 
    input{
  width:280px;
  height: 48px;
  margin-left:15px;
  outline: none;
  padding-left:20px;
    border-style: none;
    border-radius:5px;
    @media (max-width:450px){
    margin-bottom:15px;
    margin-left:0px;
  
}
@media (max-width:599px){
   margin-top:10px;
    display:flex;
    flex-wrap:wrap;
    
}
    
        ::placeholder{
          font-size:1.2rem;
          font-family: 'Lato', sans-serif;
          color:${palette.gray};
          font-weight:bold;
        
        }
    }
  
}
button {
    width: 140px;
height: 48px; 
background-color:${palette.secundaryColor};
color:${palette.primaryColor};
font-size:1.4rem;
font-family: 'Lato', sans-serif;
margin-left:10px;
border:none;
border-radius:5px;
@media (max-width:450px){
    width:280px;
    margin-bottom:15px;
    margin-left:0px;
  
}
@media (max-width:599px){
   margin-top:10px;
   margin-bottom:15px;
    
    
}
@media (max-width:740px){
   margin-top:10px;
   margin-bottom:25px;
    
    
}
}
`;

const Form = () => {
    
    const { register, handleSubmit, formState: { errors } } = useForm();
    //envio de la información del formulario

    const onsubmit = async (data, e)  => {
        console.log(data);
        e.preventDefault();
      
        //para limpiar el input
        e.target.reset();

    }

    const [datos, setDatos] = useState({
        name: '',
        email: ''
    });
// const handleInputChange = (event) => {
//     console.log(event.target.value)
// setDatos({
//     ...datos,
//     [event.target.name] : event.target.value
// })
// }
    return (
        <>
            <FormSection>
                <h1>¡Únete a nuestras novedades y promociones!</h1>
                <FormContainer>
                    {/* envio del formulario */}
                    <form onSubmit={handleSubmit(onsubmit)}>
                        <label htmlFor="name"></label>
                        <input type="text"
                            name="name"
                            placeholder="Ingresa tu nombre"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is required'
                                }
                            })}
                        />
                        <span className="text-danger text-small d-block mb-2">
                            {errors.name && errors.name.message}
                        </span>
                        <label htmlFor="email"></label>
                        <input type="email"

                            name="email"
                            placeholder="Ingresa tu email"
                            // Validaciones
                         
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is required'
                                },

                            })}

                        />
                        {/* aca se muestran los errores  */}
                        <span className="">
                            {errors.email && errors.email.message}
                        </span>
                        <button type="submit" className="">Suscribirme</button>
                    </form>
                </FormContainer>
            </FormSection>
        </>
    )
}
export default Form;
