import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../layouts/Navbar";
import Layout from "../layouts/Layout";


const About=()=>{
    return(
        <div>
            <Layout>
             <h3>This is About Page</h3>
             <Link to = '/'>Home</Link>
             </Layout>
        </div>
    )
}

export default About;