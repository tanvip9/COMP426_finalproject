import logo from "./logo.svg";
import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    // alert("submit clicked");
    e.preventDefault();
    // console.log("pre-axios");
    // axios({
    //   method: "post",
    //   url: "http://localhost:3001/api/registration",
    //   data: formData
    // });
    // console.log("post-axios");
    try {
      const response = await fetch("http://localhost:3001/api/registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      //console.log("after try");
      if (response.ok) {
        //console.log("in first if");
        const data = await response.json();
        console.log(data); // Log server response
        // Reset form after successful submission
        setFormData({
          email: "",
          firstName: "",
          lastName: "",
        });
      } else {
        console.error("Failed to submit form:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="App">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;
// //import logo from './logo.svg';
// import React, { useState } from 'react';
// import axios from 'axios'; 
// import './App.css';

// function App() {
//   const [formData, setFormData] = useState({
//     email: '',
//     firstName: '',
//     lastName: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     //alert("submit clicked");
//     e.preventDefault();
//     //console.log("pre-axios");
//     //const response = await fetch("http://localhost:3001/api/registration")
//     // axios({
//     //   method: "post",
//     //   url: "http://localhost:3001/api/registration",
//     //   data: formData
//     // });
//     //console.log("post-axios");
//     try {
//       //const response = axios('/registration', {
//       const response = await fetch("http://localhost:3001/api/registration"),
//         method: "POST",
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)});
//         //console.log("after try");
//       if (response.ok) {
//         //console.log("in first if");
//         const data = await response.json();
//         console.log(data); // Log server response
//         // Reset form after successful submission
//         setFormData({
//           email: '',
//           firstName: '',
//           lastName: '',
//         });
//       } else {
//         console.error('Failed to submit form:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error submitting form:', error);
//     }
//   };

//   return (
//     <div className="App">
//       <h2>Registration Form</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>First Name:</label>
//           <input
//             type="text"
//             name="firstName"
//             value={formData.firstName}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>Last Name:</label>
//           <input
//             type="text"
//             name="lastName"
//             value={formData.lastName}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//         </div>
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   )
// }

// export default App;