import {useParams, useLoaderData} from "react-router-dom";
import type { Course } from "./data";

const CoursesDetail = () => {
    const {id} = useParams();
    const course = useLoaderData() as Course;
    return (
        <div>
            <h2>{course.title}</h2>
            <p>Instructor: {course.instructor}</p>
            <p>{course.description}</p>
            <p>Route ID parameter: {id}</p>
        </div>
    )
}

export default CoursesDetail;