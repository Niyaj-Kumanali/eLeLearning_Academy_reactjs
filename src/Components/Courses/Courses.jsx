import react from "react";
import './Courses.css';
import Course from "../Course/Course";

import Java from '../../assets/java.png';

export default function Courses(){
    return (
        <div className="card-row">
            <Course img ={Java} name="Java" />
            <Course img ={Java} name="Java" />
            <Course img ={Java} name="Java" />
            <Course img ={Java} name="Java" />
            <Course img ={Java} name="Java" />
            <Course img ={Java} name="Java" />
            <Course img ={Java} name="Java" />
            <Course img ={Java} name="Java" />
            <Course img ={Java} name="Java" />
            <Course img ={Java} name="Java" />
            <Course img ={Java} name="Java" />
            <Course img ={Java} name="Java" />


        </div>
    )
}