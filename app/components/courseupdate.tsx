import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

import { CourseData } from "../util/types";

import CourseDetailsForm from "./coursedetailsform";
import PublishSwitch from "./publish";

type courseUpdateProps = {
  courseData: CourseData;
};

const CourseUpdate = ({ courseData }: courseUpdateProps) => {
  return (
    <>
      <section className="max-w-[70%] w-full h-screen mx-auto p-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-extrabold">Course Update</h1>
            <text>Fields complete (1/4)</text>
          </div>
          <PublishSwitch published={courseData.is_published} />
        </div>
        <Tabs defaultValue="detail" className="mt-4">
          <TabsList>
            <TabsTrigger value="detail">Course Details</TabsTrigger>
            <TabsTrigger value="content">Course Chapters</TabsTrigger>
          </TabsList>
          <TabsContent value="detail">
            <CourseDetailsForm courseData={courseData} />
          </TabsContent>
          <TabsContent value="content">Change your password here.</TabsContent>
        </Tabs>
      </section>
    </>
  );
};

export default CourseUpdate;
