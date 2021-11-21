import React from "react";
import { useParams } from "react-router-dom";

const StudentDetail=()=>{

    const {id} =useParams();
    return(
        <h1>This is Student Details of {id}</h1>
    )
}
export default StudentDetail;