export interface IImage {
  id: string;
  filename_download: string;
}

export interface ICourseStructure {
  title: string;
  rich_text: string;
}

export interface IProgramDetail {
  icon: string;
  label: string;
  value: string;
}

export interface IDegree {
  title: string;
  course_code: string;
}

export interface ICourse {
  slug: string;
  title: string;
  description: string;
  hero_image: IImage;
  icon_string: string;
  course_structure: ICourseStructure[];
  program_details: IProgramDetail[];
  degree: IDegree;
}
