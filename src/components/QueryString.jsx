
import {Formik,Form,Field,ErrorMessage} from 'formik'
import validator from 'validator';
import queryString from 'query-string';

export const QueryString = ({location,history}) => {
    
    const params = queryString.parse(location.search)
    

    return (
        <div>
            <Formik
                initialValues={{
                    email:'',
                    password:''
                }}

                validate={(values) => {
                    const errors = {}
                   if(!validator.isEmail(values.email)){
                        errors.email = 'Email no valido';
                   }

                   if(values.password.length < 6){
                        errors.password = 'La password debe tener al menos 6 caracteres';
                   }

                   return errors;
                }}

                onSubmit={(values) => {
                    console.log(values);

                    history.push(`?email=${values.email}`)
                }}
            >

                {({errors}) => (
                    <Form>
                
                        <Field 
                            type="text"
                            name="email"
                            placeholder="email@algo.com"/>
                        <ErrorMessage name="email" component="p"/>

                        <Field 
                            type="password"
                            name="password"/>
                        <ErrorMessage name="password" component="p"/>

                        <button 
                            type="submit"
                            disabled={errors.email || errors.password}> Submit </button>
                    </Form>
                )}

            </Formik>
        </div>
    )
}
