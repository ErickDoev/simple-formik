import { Formik, Form, ErrorMessage, Field} from "formik";
import {Link} from 'react-router-dom';
import validator from "validator";

export const RegisterScreen = () => {
    
    return (
        <>
            <h1>register screen</h1>
            <Formik
                initialValues={{
                    name:'',
                    lastName:'',
                    email:'',
                    password:''
                }}

                validate={(values) => {
                    const errors = {}
                    if(!values.name){   
                        errors.name='Porfavor ingrese su nombre'
                    }

                    if(!values.lastName){
                        errors.lastName = 'Porfavor ingrese su apellido'
                    }

                    if(!validator.isEmail(values.email)){
                        errors.email='Correo no valido'
                    }

                    if(values.password.length < 6){
                        errors.password='La contraseña debe ser de almenos 6 caracteres'
                    }

                    return errors;
                }}

                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {({errors}) => (
                    <>

                        <Form>

                            <div>
                                <Field 
                                    type="text"
                                    name="name"
                                    placeholder="Erick"
                                />
                                <ErrorMessage name="name" component={() => (<p>{errors.name}</p>)}/>
                            </div>
                            <div>
                                <Field 
                                    type="text"
                                    name="lastName"
                                    placeholder="Cruz"
                                />
                                <ErrorMessage name="lastName" component={() => (<p>{errors.lastName}</p>)}/>
                            </div>
                           <div>
                                <Field 
                                    type="email"
                                    name="email"
                                    placeholder="mail@mail.com"
                                />
                                <ErrorMessage name="email" component={() => (<p>{errors.email}</p>)}/>
                           </div>
                           <div>
                                <Field 
                                    type="password"
                                    name="password"
                                    placeholder=""
                                />
                                <ErrorMessage name="password" component={() => (<p>{errors.password}</p>)}/>
                           </div>
                            <button type="submit">Subir</button>
                        </Form>
                        
                    </>
                )}
                
            </Formik>
            <Link to='/login'>Login</Link>
        </>
    )
}