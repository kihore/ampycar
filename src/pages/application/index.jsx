import React from 'react'
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import AuthenticationLayout from "layouts/authentication/AuthenticationLayout";
import SignIn from "pages/application/auth/signin";



const ApplicationRoute = ({
    component:Component,
    layout:Layout,
    ...rest  })=>{
    return (
        <Route
          {...rest}
          render={(props) => (
            <Layout>
              <Component />
            </Layout>
          )}
        />
      );
}

export default function ApplicationPage() {
    return (
       <>
       <Router>
           <Routes>
           <ApplicationRoute
            path="/signin"
            component={SignIn}
            layout={AuthenticationLayout}
          />
           </Routes>
       </Router>
       </>
    )
}
