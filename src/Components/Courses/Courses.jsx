import React from "react";
import './Courses.css';
import Course from "../Course/Course";
import courses from "../../assets/data/coursesData";

const coursesData = courses;

export default function Courses() {
    return (
        <div className="card-row">
            {coursesData.map((course) => (
                <Course key={course.id} img={course.img} name={course.name} author={course.author} price={course.price} originalPrice={course.originalPrice} />
            ))}
        </div>
    );
}
