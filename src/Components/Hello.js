import React, { Component } from "react";
import Student from './Student';
import ShowMessage from "./ShowMessage";


const Hello = () => {
    return(
        <div>
                <ShowMessage />
                <Student name="Durjoy" id ="18" cgpa= "2.50"/>
                <Student name="Sujoy" id ="19" cgpa= "2.67"/>
                <Student name="Niloy" id ="20" cgpa= "2.42"/>
        </div>
    )
}

export default Hello;