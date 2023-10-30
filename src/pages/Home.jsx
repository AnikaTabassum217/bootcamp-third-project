import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../layouts/Navbar";
import  Footer from "../layouts/Footer"
import StudentCard from "../components/StudentCard";
import Layout from "../layouts/Layout";
import CarCard from "../components/CarCard";

const Home=()=>{
    const[count,setCount] =useState(0);
    let name="Anika Tabassum";
    let id="1234";
    let address="Savar,Dhaka";
    let qualification="CSE";
    

    let student=[

        {
        name:"Ankita Tabassum",
        id:"1234",
        address:"Savar,Dhaka",
        qualification:"CSE",
        },

       {
        name:"Pushpa Datta",
        id:"9090",
        address:"Badda,Dhaka",
        qualification:"English",
        },

        {
            name:"Mila",
            id:"8997",
            address:"Savar,Dhaka",
            qualification:"BBA",
        },

    ]
    
        
    return(
        <div>
            
            <h1 className="text-red-600">This is home page</h1>
            <Link to ="/about-us">
                About us
            </Link>
           {
              student.map((item,index)=>{
    return(
        <div key={index}>
             <StudentCard xyz={item.name} roll={item.id} add={item.address} qua={item.qualification}/>
        </div>
    )
         })}
           {/* <CarCard xy={qualification}/>  */}
    
            
      
        </div>
    )

}
export default Home;

