"use client";

import { HeaderQuery } from "@/graphql/generated/graphql";
import { create } from "zustand";

type HeaderCourse = HeaderQuery["courses"][number] & {
  faculty?: { faculty_name?: string };
  menuTitle?: string;
  course_name?: string;
  redirectLink?: string;
};

type HeaderStore = {
  courses: HeaderCourse[];
  setCourses: (courses: HeaderCourse[]) => void;
};

export const useHeaderStore = create<HeaderStore>((set) => ({
  courses: [],
  setCourses: (courses) => set({ courses }),
}));
