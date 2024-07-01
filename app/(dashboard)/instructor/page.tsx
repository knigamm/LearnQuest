import { CourseData } from "@/app/util/types";

import InstructorDashboard from "@/app/components/instructordashboard";

import getSession from "@/app/util/getsession";

async function getInstructorCourses() {
  try {
    const authToken = getSession()?.value;
    console.log(authToken);
    const response = await fetch(
      `${process.env.BASE_URL}/api/course/instructor`,
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    );
    console.log("response", response);
    const data = await response?.json();
    console.log("data:", data);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
}

const Instructor = async () => {
  const coursedata: CourseData[] = await getInstructorCourses()
  return (
   <InstructorDashboard coursedata={coursedata}/>
  );
};

export default Instructor;
