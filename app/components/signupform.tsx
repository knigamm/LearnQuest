"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Loader } from "lucide-react";

import { signupaction } from "../actions/authaction";

import { useFormState, useFormStatus } from "react-dom";

const initialState = {
  errors: {},
};

const Submitbutton = () => {
  const { pending } = useFormStatus();
  return (
    <>
      <Button type="submit" className="w-[70%] mt-3" disabled={pending}>
        {pending &&<Loader className="mr-2 h-4 w-4 animate-spin"/>}
        Sign Up
      </Button>
    </>
  );
};

const Signup = () => {
  const [state, formAction] = useFormState(signupaction, initialState);

  return (
    <form
      action={formAction}
      className="flex flex-col gap-5 h-full justify-start items-center pt-6"
    >
      <div className="flex gap-4 w-[70%]">
        <div className="w-[70%]">
          <Input
            type="text"
            name="firstname"
            placeholder="First Name"
            className="placeholder:text-slate-400"
          ></Input>
          {state?.errors?.first_name && (
            <div className="text-red-500 text-xs mt-1">
              {state?.errors?.first_name}
            </div>
          )}
        </div>
        <div className="w-[70%]">
          <Input
            type="text"
            name="lastname"
            placeholder="Last Name"
            className="placeholder:text-slate-400"
          ></Input>
          {state?.errors?.last_name && (
            <div className="text-red-500 text-xs mt-1">
              {state?.errors?.last_name}
            </div>
          )}
        </div>
      </div>
      <div className="w-[70%]">
        <Input
          type="email"
          name="email"
          placeholder="Email"
          className=" placeholder:text-slate-400"
        ></Input>
        {state?.errors?.email && (
          <div className="text-red-500 text-xs mt-1">
            {state?.errors?.email}
          </div>
        )}
      </div>
      <div className="w-[70%]">
        <Input
          type="password"
          name="password"
          placeholder="Password"
          className=" placeholder:text-slate-400"
        ></Input>
        {state?.errors?.password && (
          <div className="text-red-500 text-xs mt-1">
            {state?.errors?.password}
          </div>
        )}
      </div>
      <Submitbutton />
    </form>
  );
};

export default Signup;
