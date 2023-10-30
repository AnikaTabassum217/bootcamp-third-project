import React from "react";
import { Link } from "react-router-dom";

const StudentCard =(props)=>{
    return(
        <Link 
        to={"student-details/"+props.roll+"/"+props.xyz}
        >
        <div>
           <p>My Name is {props.xyz}</p>
           <p>University Id {props.roll}</p>
           <p>Present Address {props.add}</p>
           <p>Qualification {props.qua}</p>
        </div>
         </Link>
    )
}
export default StudentCard;