// // Login .Js

// import  { useState } from 'react';
// import React  from 'react';
// import { useNavigate } from 'react-router-dom';
// import Validation from'./LoginValidation';
// import axios from 'axios';


// function Login() {
    
//     const [values, setValues] = useState({
//         email:'',
//         password:''
//     })
//     const navigate = useNavigate();
//     const [errors,setErrors]= useState({})
//     const handleInput = (event) => {
//         setValues(prev => ({...prev,[event.target.name]:[event.target.value]}))
//     }
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         setErrors(Validation(values));
//         if( errors.email===""&& errors.password === "") {
//           axios.post('http://localhost:8081/login', values)
//           .then(res=> {
//             if(res.data === "success"){
//               navigate('/home');
//             }else{
//               alert("No record Found");
//             }
//           })
//           .catch(err => console.log(err));
      
//       }
//     }

//   return (
//     <div className="flex justify-center items-center bg-blue-500 h-screen">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-80">
//         <h2 className='text-2xl font-bold'>Sign-in</h2>
//         <form action='' onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               placeholder="Enter Email"
//               onChange={handleInput}
//               className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             {errors.email && <span className='text-red-500 text-sm'>{errors.email}</span>}
//           </div>
//           <div className="mb-4">
//             <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               name='password'
//               placeholder="Enter Password"
//               onChange={handleInput}
//               className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             {errors.password && <span className='text-red-500 text-sm'>{errors.password}</span>}
//           </div>
//           <button 
//           type='submit'
//           className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded mb-3 transition duration-300">
//             Log in
//           </button>
//           <button
//       className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 rounded border transition duration-300"
//       onClick={() => navigate('/signup')}
//     >
//       Create Account
//     </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;
 


// //Login Validation


// function Validation(values) {
//     let error = {};
//     const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

//     if (values.email === "") {
//         error.email = "Name should not be empty";
//     } else if (!email_pattern.test(values.email)) {
//         error.email = "Email Didn't match";
//     } else {
//         error.email = "";
//     }  

//     if (values.password === "") {
//         error.password = "Password should not be empty";
//     } else if (!password_pattern.test(values.password)) {
//         error.password = "Password didn't match";
//     } else {
//         error.password = "";
//     }

//     return error;
// }

// export default Validation;

// //Signup

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Validation from './SignupValidation';
// import axios from 'axios';

// function Signup() {
//   const [values, setValues] = useState({
//     name: '',
//     email: '',
//     password: '',
//   });
  
//   const navigate = useNavigate();
//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // Handle input change
//   const handleInput = (event) => {
//     setValues((prev) => ({
//       ...prev,
//       [event.target.name]: event.target.value, // Corrected value assignment
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const validationErrors = Validation(values);
//     setErrors(validationErrors);
//     setIsSubmitting(true);
//   };

//   // Effect to handle form submission if there are no validation errors
//   const handleFormSubmit = async () => {
//     if (isSubmitting && Object.keys(errors).length === 0) {
//       try {
//         const res = await axios.post('http://localhost:8081/signup', values);
//         navigate('/');
//       } catch (err) {
//         console.log(err);
//       }
//     }
//   };
  

//   return (
//     <div className="flex justify-center items-center bg-blue-500 h-screen">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-80">
//         <h2 className="text-2xl font-bold mb-4">Sign-up</h2>
//         <form onSubmit={handleSubmit}>
//           {/* Name Field */}
//           <div className="mb-4">
//             <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               placeholder="Enter Name"
//               name="name"
//               value={values.name}
//               onChange={handleInput}
//               className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
//           </div>

//           {/* Email Field */}
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               placeholder="Enter Email"
//               name="email"
//               value={values.email}
//               onChange={handleInput}
//               className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
//           </div>

//           {/* Password Field */}
//           <div className="mb-4">
//             <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               placeholder="Enter Password"
//               name="password"
//               value={values.password}
//               onChange={handleInput}
//               className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
//           </div>

//           {/* Sign up Button */}
//           <button
//             type="submit"
//             className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded mb-3 transition duration-300"
//           >
//             Sign up
//           </button>

//           {/* Login Button */}
//           <button
//             type="button"
//             className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 rounded border transition duration-300"
//             onClick={() => navigate('/')}
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Signup;


// //Signup Validation

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Validation from './SignupValidation';
// import axios from 'axios';

// function Signup() {
  
//   const [values, setValues] = useState({
//     name: '',
//     email: '',
//     password: '',
//   });
//   const navigate = useNavigate();
//   const [errors, setErrors] = useState({});
  
//   // Handle input change
//   const handleInput = (event) => {
//     setValues((prev) => ({
//       ...prev,
//       [event.target.name]: [event.target.value] // Corrected value assignment
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setErrors(Validation(values));
//     if(errors.name === "" && errors.email===""&& errors.password === "") {
//         axios.post('http://localhost:8081/signup', values)
//         .then(res=> {
//           navigate('/');
//         })
//         .catch(err => console.log(err));
    
//     }
//   };

//   return (
//     <div className="flex justify-center items-center bg-blue-500 h-screen">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-80">
//         <h2 className="text-2xl font-bold mb-4">Sign-up</h2>
//         <form onSubmit={handleSubmit}>
//           {/* Name Field */}
//           <div className="mb-4">
//             <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               placeholder="Enter Name"
//               name="name"
//               value={values.name}
//               onChange={handleInput}
//               className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
//           </div>

//           {/* Email Field */}
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               placeholder="Enter Email"
//               name="email"
//               value={values.email}
//               onChange={handleInput}
//               className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
//           </div>

//           {/* Password Field */}
//           <div className="mb-4">
//             <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               placeholder="Enter Password"
//               name="password"
//               value={values.password}
//               onChange={handleInput}
//               className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
//           </div>

//           {/* Sign up Button */}
//           <button
//             type="submit"
//             className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded mb-3 transition duration-300"
//           >
//             Sign up
//           </button>

//           {/* Login Button */}
//           <button
//             type="button"
//             className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 rounded border transition duration-300"
//             onClick={() => navigate('/')}
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Signup;
