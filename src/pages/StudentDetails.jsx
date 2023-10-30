import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Car from '../assets/images/car1.webp'
import Lipstick1 from '../assets/images/lipstick1.webp'
import Lipstick2 from '../assets/images/lipstick2.jpg'

const StudentDetails=()=>{
    const {roll,xyz}= useParams();
    const[upozila,setUpozila]=useState();
    const[district,setDistrict]=useState();

   useEffect(()=>{

   },[district])
    
   

    return(
        <div>
            <h1>The name is: {roll}</h1>
            <h1>The ID is: {xyz}</h1>   
            <select value={district} onChange={(e)=>setDistrict(e.target.value)}>
                <option value="null">Select District</option>
                <option value='Dhaka'>Dhaka</option>
                <option value="Khulna">Khulna</option>
            </select>

            <select value={upozila} onChange={(e)=>setUpozila(e.target.value)}>
                <option value="null">Select upozila</option>
                {
                    district=="Dhaka" &&
                    <>
                    <option value="Savar">Savar</option>
                    <option value="Badda">Badda</option>
                    </>
                }
                {
                    district=="Khulna" &&
                    <>
                    
                        <option value="Jinaida">Jinaida</option>
                        <option value="Satkhira">Satkhira</option>
                        <option value="Jessor">Jessor</option>
                    </>
                }

            </select>
{/* 
            <div className="grid lg:grid-cols-4 gap-0 md:grid-cols-2 sm:grid-cols-2">
            
       <div className="bg-red-500 p-2 px-12 w-60 h-72 ml-20 rounded-lg mt-10 transform hover:scale-110">
         <div className="">
           <img className="w-40 h-30 rounded-lg" src={Car} alt="Car" />
         </div>
   
         <div className="mt-6 ml-8 font-bold">
           Audi A4
         </div>
   
         <div className="ml-6 mt-2 font-bold">
           Rs 2 core
         </div>
   
         <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded mt-8 ml-0 text-center">
           <button className="p-2">Buy Now</button>
         </div>
       </div>

       <div className="bg-red-500 p-2 px-12 w-60 h-72 ml-20 rounded-lg mt-10 transform hover:scale-110">
         <div className="">
           <img className="w-40 h-30 rounded-lg" src={Car} alt="Car" />
         </div>
   
         <div className="mt-6 ml-8 font-bold">
           Audi A4
         </div>
   
         <div className="ml-6 mt-2 font-bold">
           Rs 2 core
         </div>
   
         <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded mt-8 ml-0 text-center">
           <button className="p-2">Buy Now</button>
         </div>
       </div>

       <div className="bg-red-500 p-2 px-12 w-60 h-72 ml-20 rounded-lg mt-10 transform hover:scale-110">
         <div className="">
           <img className="w-40 h-30 rounded-lg" src={Car} alt="Car" />
         </div>
   
         <div className="mt-6 ml-8 font-bold">
           Audi A4
         </div>
   
         <div className="ml-6 mt-2 font-bold">
           Rs 2 core
         </div>
   
         <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded mt-8 ml-0 text-center">
           <button className="p-2">Buy Now</button>
         </div>
       </div>

       <div className="bg-red-500 p-2 px-12 w-60 h-72 ml-20 rounded-lg mt-10 transform hover:scale-110">
         <div className="">
           <img className="w-40 h-30 rounded-lg" src={Car} alt="Car" />
         </div>
   
         <div className="mt-6 ml-8 font-bold">
           Audi A4
         </div>
   
         <div className="ml-6 mt-2 font-bold">
           Rs 2 core
         </div>
   
         <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded mt-8 ml-0 text-center">
           <button className="p-2">Buy Now</button>
         </div>
       </div>
     
     
                    
            </div> */}

            <div className="grid lg:grid-cols-4 gap-10 ">
              <div className="bg-gray-300">
                Side Bar
                {/* <div class="opacity-100 hover:opacity-0">
                  hello
                </div> */}

{/* <div class="group relative w-48 h-48">
  <img src={Lipstick1} alt="Image 1" class="object-cover w-full h-full transition-transform transform scale-100 group-hover:scale-110" />
  <img src={Car} alt="Image 2" class="object-cover h-56 w-80 absolute inset-0 transition-transform transform scale-110 group-hover:scale-100 opacity-0 group-hover:opacity-100" />
</div> */}




              </div>
              <div className="bg-gray-300">
                    {/* <div>
                      <img className="h-56 w-80 mt-4 rounded-lg"src={Lipstick1} alt="" />
                    </div> */}

<div class="group relative">
  <img src={Lipstick1} alt="Image 1" class="object-cover h-56 w-80 transition-transform transform scale-100 group-hover:scale-100 duration-0 " />
  <img src={Lipstick2} alt="Image 2" class="object-cover h-56 w-80 absolute inset-0 transition-transform transform scale-100 group-hover:scale-100  opacity-0 group-hover:opacity-100 " />
</div>
                     <div className="text-center mt-8">
                     View All
                     </div>
                     <div className="text-center mt-12 mb-20">
                      ADD To Bag
                     </div>
              </div>
              <div className="bg-gray-300">
                     hello
              </div>
              <div className="bg-gray-300">
                     hello
              </div>

            </div>


        </div>
    )
}

export default StudentDetails;