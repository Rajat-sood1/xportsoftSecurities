import React, { useContext } from "react";
import Cards from "../../components/dashboard-cards";
import Modules from "../../data/Modules";
import Header from "../../layout/header";
import { Context } from "../../middleware/auth";
import {  Navigate } from 'react-router'

const Dashboard = () =>{
     const {loggedInUser}=useContext(Context)
     let moduleList = Modules;
     if(loggedInUser.login===false){
          return <Navigate to="/" replace={true}/>
      }
     console.log(loggedInUser);
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