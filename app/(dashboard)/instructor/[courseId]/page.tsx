import { logoutaction } from "@/app/actions/authaction";
import getSession from "@/app/util/getsession";
import CourseUpdate from "@/app/components/courseupdate";
import { CourseData } from "@/app/util/types";

const getCourseDetails = async ({ courseId }: { courseId: string }) => {
  try {
    const authToken = getSession()?.value;
    if (!authToken) {
      return logoutaction();
    }
    const res = await fetch(`${process.env.BASE_URL}/api/course/instructor/${courseId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return;
  }
};

const Course = async ({ params }: { params: { courseId: string } }) => {
  const data:CourseData = await getCourseDetails({ courseId: params.courseId });
  console.log(data);
  return (
    <>
      <CourseUpdate courseData={data}/>
    </>
  );
};

export default Course;
