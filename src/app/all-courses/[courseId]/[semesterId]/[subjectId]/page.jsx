import Link from 'next/link';
import coursesData from '../../../../../data/courses.json';

const SubjectPage = ({ params }) => {
  const course = coursesData.courses.find(c => c.id === params.courseId);
  const semester = course?.semesters.find(s => s.id === params.semesterId);
  const subject = semester?.subjects.find(sub => sub.id === params.subjectId);

  if (!subject) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Subject Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">{subject.name}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subject.lectures.map((lecture) => (
            <Link key={lecture.id} href={`/all-courses/${course.id}/${semester.id}/${subject.id}/${lecture.id}`}>
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <h2 className="text-2xl font-semibold">{lecture.title}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubjectPage;
