import Navbar from "../components/navbar";

import { UserData } from "../util/types";
import getSession from "../util/getsession";

const getuserdetails = async () => {
  try {
    const authToken = getSession();
    const response = await fetch(`${process.env.BASE_URL}/api/auth/user`, {
      headers: {
        Authorization: `Bearer ${authToken?.value}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
};

const Dashboardlayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const userdata: UserData = await getuserdetails();

  return (
    <div className="h-full w-full">
      <div className="h-16 w-full fixed inset-y-0 z-50">
        <Navbar userdata={userdata} />
      </div>
      <div className="pt-[4rem] h-full z-10">{children}</div>
    </div>
  );
};

export default Dashboardlayout;
