import { Link, useSearchParams } from "react-router-dom";
import {courses} from "../../task2/data.ts";


// interface CoursePreview{
//     id: number;
//     title: string;
// }

// const courses: CoursePreview[] = [
//     {id: 1, title: "React Basics"},
//     {id: 2, title: "Advanced React"},
//     {id: 3, title: "React Router"},
//     {id: 4, title: "State Management with Redux"},
//     {id: 5, title: "Testing React Applications"}
// ]


const Courses = () => {
    const [serchParams, setSearchParams] = useSearchParams();

    const sortOrder = serchParams.get("sort") || "asc";

    const sortedCourses = [...courses].sort((a, b) => {
        return sortOrder === "desc" ? b.title.localeCompare(a.title) : a.title.localeCompare(b.title);
    });

    const toggleSortOrder = () => {
        const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
        setSearchParams({sort: newSortOrder});
    }

    return(
        <div>
            <h1>Courses</h1>

            <button onClick={toggleSortOrder}>
                Sort {sortOrder === "asc" ? "Descending" : "Ascending"}
            </button>
            <ul>
                {sortedCourses.map(course => (
                    <li key={course.id}>
                        <Link to={`/courses/${course.id}`}>{course.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Courses;