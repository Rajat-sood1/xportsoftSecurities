import React, { useContext } from "react";
import Cards from "../../components/dashboard-cards";
import Modules from "../../data/Modules";
import Header from "../../layout/header";
import { Context } from "../../middleware/auth";
import {  Navigate } from 'react-router-dom'

let moduleList = Modules;

const Dashboard = () =>{
     //   AUTHENTICATING USER 
     const {loggedInUser}=useContext(Context);

     //  NAVIGATING IF NO USER
     if(loggedInUser.login===false){
          return <Navigate to="/" replace={true}/>
      }
     return(
          <>
          <Header />
          <div className="comp-container">
               <div className="comp-title">
                    <h1>Dashboard</h1>
               </div>
               <section className="module-sec">
                    <Cards duration={new Date().getDate()} progress={moduleList[0].progress} status={'Not-Started'}/>
               </section>
          </div>
          </>
     )
}

export default Dashboard;