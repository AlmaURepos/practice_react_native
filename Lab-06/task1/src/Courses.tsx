interface CoursePreview{
    id: number;
    title: string;
}

const courses: CoursePreview[] = [
    {id: 1, title: "React Basics"},
    {id: 2, title: "Advanced React"},
    {id: 3, title: "React Router"},
    {id: 4, title: "State Management with Redux"},
    {id: 5, title: "Testing React Applications"}
]


const Courses = () => {
    return(
        <div>
            <h1>Courses</h1>
            <ul>
                {courses.map(course => (
                    <li key={course.id}>{course.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default Courses;