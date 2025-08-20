import Link from 'next/link';
import coursesData from '../../../data/courses.json';

const CoursePage = ({ params }) => {
    const course = coursesData.courses.find(c => c.id === params.courseId);

    if (!course) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-2xl font-bold">Course Not Found</h1>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold text-center mb-10">{course.name}</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {course.semesters.map((semester) => (
                        <Link key={semester.id} href={`/all-courses/${course.id}/${semester.id}`}>
                            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer">
                                <h2 className="text-2xl font-semibold">{semester.name}</h2>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CoursePage;
