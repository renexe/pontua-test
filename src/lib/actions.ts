"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";

const mockedUser = {
  name: "Douglas",
  email: "douglas@pontua.com.br",
  password: "123456",
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
};

export async function signIn(formData: FormData) {
  const formDataObject = Object.fromEntries(formData.entries());
  const submitedEmail = formDataObject.email;
  const submitedPassword = formDataObject.password;

  if (
    submitedEmail === mockedUser.email &&
    submitedPassword === mockedUser.password
  ) {
    cookies().set("session", mockedUser.token);
    return true;
  }
  return false;
}

export async function signOut() {
  cookies().delete("session");
  redirect("/");
}
