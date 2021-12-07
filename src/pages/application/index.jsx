import React from 'react'
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

// import AuthenticationLayout from '../../Layouts/authentication/AuthenticationLayout';

import SignIn from './auth/signin';
import Signup from './auth/signup';


// const ApplicationRoute = ({
//     component:Component,
//     layout:Layout,
//     ...rest  })=>{
//     return (
//         <Route
//           {...rest}
//           render={(props) => (
//             <Layout>
//               <Component />
//             </Layout>
//           )}
//         />
//       );
// }

export default function ApplicationPage() {
    return (
       <>
       <Router>
          <div>
        <Routes>
          <Route 
          path='/signin' 
          element={<SignIn />} 
          />
          <Route 
          path='/signup' 
          element={<Signup />} 
          />
          <Route 
          path='/' 
          // element={<Transaction />} 
          />
        </Routes>
      </div>
       </Router>
       </>
    )
}
