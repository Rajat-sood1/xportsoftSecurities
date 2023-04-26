import React from "react";
import Cards from "../../components/dashboard-cards";
import modules from "../../utils/modules";
import Header from "../../layout/header";


const Dashboard = () =>{
     let moduleList = modules;
     return(
          <>
          <Header/>          
          
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