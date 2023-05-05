import React, { useContext } from "react";
import Cards from "../../components/dashboard-cards";
import Header from "../../layout/header";
import { Context } from "../../middleware/auth";
import { Navigate } from 'react-router-dom'

const Dashboard = () => {
     //   AUTHENTICATING USER 
     const { loggedInUser } = useContext(Context);

     //  NAVIGATING IF NO USER
     if (loggedInUser.login === false) {
          return <Navigate to="/" replace={true} />
     }
     return (
          <>
               <Header />
               <div className="comp-container">
                    <div className="comp-title">
                         <h1>Dashboard</h1>
                    </div>
                    <section className="module-sec">
                         <Cards />
                    </section>
               </div>
          </>
     )
}

export default Dashboard;