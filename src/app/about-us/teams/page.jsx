import { redirect } from "next/navigation";

const page = () => {
  redirect("/about-us/governance-and-leadership");
  return null;
};

export default page;
