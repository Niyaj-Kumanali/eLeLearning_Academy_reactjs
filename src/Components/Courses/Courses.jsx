import React from "react";
import { Link } from "react-router-dom";
import "./Courses.css";
import Course from "../Course/Course";
import courses from "../../assets/data/coursesData";

const coursesData = courses;

export default function Courses({ from, to }) {
    return (
        <div className="card-row">
            {coursesData.map((course) => {
                if (course.id >= from && course.id <= to) {
                    return (
                        <Link key={course.id} to={"/" + course.name}>
                            <Course
                                img={course.img}
                                name={course.name}
                                author={course.author}
                                price={course.price}
                                originalPrice={course.originalPrice}
                            />
                        </Link>
                    );
                }
                return null;
            })}

        </div>
    );
}
