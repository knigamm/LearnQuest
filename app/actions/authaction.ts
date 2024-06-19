"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";

import { z } from "zod";

const MAX_AGE = 60 * 60 * 24 * 7;

export const signupaction = async (prevState: any, formdata: FormData) => {
  const signupobject = z.object({
    first_name: z.string({ message: "First Name has to be characters only" }),
    last_name: z.string({ message: "Last Name has to be characters only" }),
    email: z.string().email({ message: "Enter valid email" }),
    password: z
      .string()
      .min(5, { message: "Password needs to be longer than length 5" }),
  });

  const validatedFields = signupobject.safeParse({
    first_name: formdata.get("firstname")?.toString(),
    last_name: formdata.get("lastname")?.toString(),
    email: formdata.get("email")?.toString(),
    password: formdata.get("password")?.toString(),
  });

  if (!validatedFields.success) {
    return { errors: validatedFields.error.flatten().fieldErrors };
  }

  try {
    const response = await fetch(
      "https://learnquest-backend.onrender.com/api/auth/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...validatedFields.data, username: "kshitij" }),
      }
    );
    const data = await response.json();
    if (data && data?.detail) {
      return { errors: { email: data.detail } };
    }
  } catch (error) {
    throw new Error("Something went wrong");
  }

  redirect("/auth/login?signup=true");
};

export const loginaction = async (prevState: any, formdata: FormData) => {
  const loginobject = z.object({
    email: z.string().email({ message: "Enter valid email" }),
    password: z
      .string()
      .min(5, { message: "Password needs to be longer than length 5" }),
  });

  const validatedFields = loginobject.safeParse({
    email: formdata.get("email")?.toString(),
    password: formdata.get("password")?.toString(),
  });

  if (!validatedFields.success) {
    return { errors: validatedFields.error.flatten().fieldErrors };
  }

  try {
    const response = await fetch(
      "https://learnquest-backend.onrender.com/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validatedFields.data),
      }
    );
    const data = await response.json();
    if (data && data?.detail) {
      return { errors: { password: data.detail } };
    }
    cookies().set("session", data?.access_token, {
      httpOnly: true,
      maxAge: MAX_AGE,
    });
  } catch (error) {
    throw new Error("Something went wrong");
  }
  redirect("/");
};
