import {Formik,Form,Field,ErrorMessage} from 'formik';
import queryString from 'query-string';

export const QueryString = ({location,history}) => {
    const queries = queryString.parse(location.search);
    console.log(queries);
   
    return (
        <>
            <Formik
                initialValues={{
                    query:''
                }}

                onSubmit={(values,{resetForm}) => {
                    history.push(`?q=${values.query}`);
                    resetForm();
                }}

                validate={(values) => {
                    const errors = {};
                    if(!values.query){
                        console.log('Porfavor inserte un valor');
                        errors.query = 'Porfavor inserte un valor';
                    }
                    return errors;
                }}
            >

                {() => (

                    <Form>

                        <div>
                            <Field name="query"/>
                            <ErrorMessage name="query" component="p"/>
                        </div>

                        <button type="submit">Subir</button>
                    </Form>

                )}
            </Formik>

        </>
    )
}