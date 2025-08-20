import Link from 'next/link';
import coursesData from '../../data/courses.json';

const AllCoursesPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold text-center mb-10">All Courses</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {coursesData.courses.map((course) => (
                        <Link key={course.id} href={`/all-courses/${course.id}`}>
                            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer">
                                <h2 className="text-2xl font-semibold">{course.name}</h2>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllCoursesPage;
