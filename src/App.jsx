import React from 'react';
import {FormFormik} from './components/FormFormik';

export const App = () => {
  return (
    <div>
      <h1>App Screen</h1>
      <FormFormik />
    </div>
  )
}

// export const FormFormik2 = () => {

//   const [inputValues,setInputValues] = useState({
//     name:'',
//     email:''
//   });
//   const {name,email} = inputValues;

//   const handleChange =(e) => {
//     setInputValues(state=>{
//       return {
//         ...state,
//         [e.target.name]:[e.target.value]
//       }
//     })
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(inputValues);
//   }



//   return (
//     <>
//       <h1>Formik</h1>
//       <form onSubmit={handleSubmit}>
//         <input 
//           onChange={handleChange}
//           name="name"
//           value={name}
//           className=""/>
//         <input 
//           onChange={handleChange}
//           name="email"
//           value={email}
//           className=""/>
//         <button>Submit</button>
//       </form>
//     </>
//   )
// }
