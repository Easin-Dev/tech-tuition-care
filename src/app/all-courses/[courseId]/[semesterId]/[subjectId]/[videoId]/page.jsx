import coursesData from '../../../../../../data/courses.json';

const VideoPage = ({ params }) => {
    const course = coursesData.courses.find(c => c.id === params.courseId);
    const semester = course?.semesters.find(s => s.id === params.semesterId);
    const subject = semester?.subjects.find(sub => sub.id === params.subjectId);
    const lecture = subject?.lectures.find(lec => lec.id === params.videoId);

    if (!lecture) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-2xl font-bold">Video Not Found</h1>
            </div>
        );
    }

    // A real application would implement authentication/authorization here.
    // For example, checking if the user is logged in and has purchased this course.
    const videoUrl = lecture.videoUrl;

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold text-center mb-6">{lecture.title}</h1>
                <div className="w-full max-w-4xl mx-auto bg-black rounded-lg shadow-lg overflow-hidden">
                    <video controls className="w-full">
                        <source src={videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    );
};

export default VideoPage;
