export interface Course{
    id: number;
    title: string;
    instructor: string;
    description: string;
}

export const courses: Course[] = [
    {
        id: 1,
        title: "Introduction to Programming",
        instructor: "John Doe", 
        description: "Learn the basics of programming using Python. This course covers variables, data types, control structures, functions, and basic algorithms."


    },
    {
        id: 2,
        title: "Web Development",
        instructor: "Jane Smith",
        description: "Learn how to build modern web applications using HTML, CSS, and JavaScript. This course covers responsive design, front-end frameworks, and back-end development with Node.js."
    },
    {
        id: 3,
        title: "Data Science",
        instructor: "Alice Johnson",
        description: "Learn how to analyze and visualize data using Python. This course covers data manipulation with pandas, data visualization with matplotlib and seaborn, and machine learning basics with scikit-learn."
    },
    {
        id: 4,
        title: "Mobile App Development",
        instructor: "Bob Brown",
        description: "Learn how to create mobile applications for Android and iOS using React Native. This course covers UI design, navigation, and integration with APIs."
    },
    {
        id: 5,
        title: "Cybersecurity Fundamentals",
        instructor: "Charlie Davis",
        description: "Learn the basics of cybersecurity, including common threats, vulnerabilities, and best practices for protecting systems and data."
    }
]

export const getCourseById = (id: number): Course | undefined => {
    return courses.find(course => course.id === id);
}