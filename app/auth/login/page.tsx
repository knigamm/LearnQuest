import { Button } from "@/components/ui/button";

import Loginform from "@/app/components/loginform";

import Link from "next/link";

const Login = () => {
  return (
    <>
      <div className="flex flex-col h-full w-full bg-slate-50">
        <div className="flex h-min w-full justify-end items-center gap-3 pr-6 pt-4">
          <text className="text-[14px] font-medium">
            Don't have an account?
          </text>
          <Button variant="link" asChild className="p-0">
            <Link href="/auth/signup">Sign Up</Link>
          </Button>
        </div>
        <div className="flex h-full w-full justify-center items-end">
          <div className="flex flex-col gap-4 h-min justify-end items-start w-[70%] text-nowrap">
            <text className="font-semibold text-3xl">Hi, Welcome Back!</text>
          </div>
        </div>
        <Loginform/>
      </div>
    </>
  );
};

export default Login;
