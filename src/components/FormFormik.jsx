import { Formik,Form,Field,ErrorMessage } from "formik";
import { useEffect,useState } from "react";
import validator from 'validator';


export  const FormFormik = () => {

    const [submitValues,setSubmitValues]=useState({});

    const fetchLogin = async(data) => {
        const url = 'https://journal-app-xprs.herokuapp.com/api/auth';
        const resp = await fetch(url,{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        const body = await resp.json()
        return body;
    }

    useEffect(()=>{
        fetchLogin(submitValues)
        .then((resp)=>{
            console.log(resp);
        })
    },[submitValues])
    
    return(
        <>
            <Formik
                initialValues={{
                    email:'',
                    password:''
                }}

                onSubmit={(values)=>{
                    setSubmitValues(values);
                }}  

                validate={(values)=>{
                    const errors = {}
                    if(!validator.isEmail(values.email)){
                        errors.email='correo no valido'
                    }
                    if(values.password.length < 6){
                        errors.password = 'la contraseña debe tener al menos 6 caracteres'
                    }

                    return errors;

                }}
            >
                {({errors,touched}) => (
                    <>  
               
                        <Form>

                            <Field 
                                type="text"
                                name="email"
                                placeholder="email@algo.com"
                            />
                 
                            <ErrorMessage name="email" component={()=>(<p>{errors.email}</p>)}/>
                            <Field 
                                type="password"
                                name="password"
                            />
                            <ErrorMessage name="password" component={()=>(<p>{errors.password}</p>)}/>
                            <button type="submit">Submit</button>
                        </Form>
                    
                    </>
                )}
            </Formik>
        </>
    )
}