// // import React from "react";
// import { Link } from "react-router-dom";
// // import "../asstes/css/navbar.css"
// // import Logo from "../asstes/images/Logo.png"

// const Navbar=()=>{
//     return(
//         <>
//         <header> 
//             <nav className="">
//                 <ul className="flex flex-wrap bg-gray-300 flex justify-center p-6">
//                     <li className="float-left ">
//                         {/* <img className="w-16 h-14 -mt-4 mr-80  lg:block  md:block hidden"src={Logo} alt="" /> */}
//                     </li>
//                     <li className="mx-2 font-bold" >
//                         <Link className={window.location.pathname == "/" ? "text-green-500" : " "} to={'/'}>Home</Link>
//                     </li>
//                     <li className="mx-2 font-bold" >
//                         <Link className={window.location.pathname == "/about-us" ? "text-green-500": " "} to={"/about-us"}>About us</Link>
//                     </li>
//                     <li className="mx-2 font-bold" >
//                         <Link className={window.location.pathname == "/product" ? "text-green-500": " "} to={"/product"}>Product</Link>
//                     </li>
//                     <li>
//                     <input class="pl-2 border-2 border-orange-300 hover:border-orange-700 focus:border-orange-900" type="text" placeholder="Search..." />
//                     </li>
//                 </ul>
//             </nav>
//         </header>
//         </>
//     )
// }
// export default Navbar;