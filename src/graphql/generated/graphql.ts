import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  GraphQLBigInt: { input: any; output: any; }
  GraphQLStringOrFloat: { input: any; output: any; }
  JSON: { input: any; output: any; }
};

export enum EventEnum {
  Create = 'create',
  Delete = 'delete',
  Update = 'update'
}

export type Query = {
  about_us_page?: Maybe<About_Us_Page>;
  about_us_page_by_version?: Maybe<Version_About_Us_Page>;
  active_agents: Array<Active_Agents>;
  active_agents_aggregated: Array<Active_Agents_Aggregated>;
  active_agents_by_id?: Maybe<Active_Agents>;
  active_agents_by_version?: Maybe<Version_Active_Agents>;
  announcements?: Maybe<Announcements>;
  announcements_by_version?: Maybe<Version_Announcements>;
  blog: Array<Blog>;
  blog_aggregated: Array<Blog_Aggregated>;
  blog_by_id?: Maybe<Blog>;
  blog_by_version?: Maybe<Version_Blog>;
  campus_locations: Array<Campus_Locations>;
  campus_locations_aggregated: Array<Campus_Locations_Aggregated>;
  campus_locations_by_id?: Maybe<Campus_Locations>;
  campus_locations_by_version?: Maybe<Version_Campus_Locations>;
  columns: Array<Columns>;
  columns_aggregated: Array<Columns_Aggregated>;
  columns_by_id?: Maybe<Columns>;
  columns_by_version?: Maybe<Version_Columns>;
  courses: Array<Courses>;
  courses_aggregated: Array<Courses_Aggregated>;
  courses_by_id?: Maybe<Courses>;
  courses_by_version?: Maybe<Version_Courses>;
  degree: Array<Degree>;
  degree_aggregated: Array<Degree_Aggregated>;
  degree_by_id?: Maybe<Degree>;
  degree_by_version?: Maybe<Version_Degree>;
  events: Array<Events>;
  events_aggregated: Array<Events_Aggregated>;
  events_by_id?: Maybe<Events>;
  events_by_version?: Maybe<Version_Events>;
  explore_churchill?: Maybe<Explore_Churchill>;
  explore_churchill_by_version?: Maybe<Version_Explore_Churchill>;
  explore_churchill_files: Array<Explore_Churchill_Files>;
  explore_churchill_files_aggregated: Array<Explore_Churchill_Files_Aggregated>;
  explore_churchill_files_by_id?: Maybe<Explore_Churchill_Files>;
  explore_churchill_files_by_version?: Maybe<Version_Explore_Churchill_Files>;
  faqs: Array<Faqs>;
  faqs_aggregated: Array<Faqs_Aggregated>;
  faqs_by_id?: Maybe<Faqs>;
  faqs_by_version?: Maybe<Version_Faqs>;
  files: Array<Files>;
  files_aggregated: Array<Files_Aggregated>;
  files_by_id?: Maybe<Files>;
  files_by_version?: Maybe<Version_Files>;
  governance_structure?: Maybe<Governance_Structure>;
  governance_structure_by_version?: Maybe<Version_Governance_Structure>;
  holiday_popup?: Maybe<Holiday_Popup>;
  holiday_popup_by_version?: Maybe<Version_Holiday_Popup>;
  how_to_guide: Array<How_To_Guide>;
  how_to_guide_aggregated: Array<How_To_Guide_Aggregated>;
  how_to_guide_by_id?: Maybe<How_To_Guide>;
  how_to_guide_by_version?: Maybe<Version_How_To_Guide>;
  image_gallery?: Maybe<Image_Gallery>;
  image_gallery_by_version?: Maybe<Version_Image_Gallery>;
  image_gallery_files: Array<Image_Gallery_Files>;
  image_gallery_files_aggregated: Array<Image_Gallery_Files_Aggregated>;
  image_gallery_files_by_id?: Maybe<Image_Gallery_Files>;
  image_gallery_files_by_version?: Maybe<Version_Image_Gallery_Files>;
  induction_agents: Array<Induction_Agents>;
  induction_agents_aggregated: Array<Induction_Agents_Aggregated>;
  induction_agents_by_id?: Maybe<Induction_Agents>;
  induction_agents_by_version?: Maybe<Version_Induction_Agents>;
  info_item: Array<Info_Item>;
  info_item_aggregated: Array<Info_Item_Aggregated>;
  info_item_by_id?: Maybe<Info_Item>;
  info_item_by_version?: Maybe<Version_Info_Item>;
  key_dates: Array<Key_Dates>;
  key_dates_aggregated: Array<Key_Dates_Aggregated>;
  key_dates_by_id?: Maybe<Key_Dates>;
  key_dates_by_version?: Maybe<Version_Key_Dates>;
  login_links?: Maybe<Login_Links>;
  login_links_by_version?: Maybe<Version_Login_Links>;
  marketing_kit: Array<Marketing_Kit>;
  marketing_kit_aggregated: Array<Marketing_Kit_Aggregated>;
  marketing_kit_by_id?: Maybe<Marketing_Kit>;
  marketing_kit_by_version?: Maybe<Version_Marketing_Kit>;
  news: Array<News>;
  news_aggregated: Array<News_Aggregated>;
  news_by_id?: Maybe<News>;
  news_by_version?: Maybe<Version_News>;
  pages: Array<Pages>;
  pages_aggregated: Array<Pages_Aggregated>;
  pages_by_id?: Maybe<Pages>;
  pages_by_version?: Maybe<Version_Pages>;
  pages_sections: Array<Pages_Sections>;
  pages_sections_aggregated: Array<Pages_Sections_Aggregated>;
  pages_sections_by_id?: Maybe<Pages_Sections>;
  pages_sections_by_version?: Maybe<Version_Pages_Sections>;
  policies: Array<Policies>;
  policies_aggregated: Array<Policies_Aggregated>;
  policies_by_id?: Maybe<Policies>;
  policies_by_version?: Maybe<Version_Policies>;
  quick_links: Array<Quick_Links>;
  quick_links_aggregated: Array<Quick_Links_Aggregated>;
  quick_links_by_id?: Maybe<Quick_Links>;
  quick_links_by_version?: Maybe<Version_Quick_Links>;
  request_form: Array<Request_Form>;
  request_form_aggregated: Array<Request_Form_Aggregated>;
  request_form_by_id?: Maybe<Request_Form>;
  request_form_by_version?: Maybe<Version_Request_Form>;
  sections: Array<Sections>;
  sections_aggregated: Array<Sections_Aggregated>;
  sections_by_id?: Maybe<Sections>;
  sections_by_version?: Maybe<Version_Sections>;
  sections_columns: Array<Sections_Columns>;
  sections_columns_aggregated: Array<Sections_Columns_Aggregated>;
  sections_columns_by_id?: Maybe<Sections_Columns>;
  sections_columns_by_version?: Maybe<Version_Sections_Columns>;
  short_urls: Array<Short_Urls>;
  short_urls_aggregated: Array<Short_Urls_Aggregated>;
  short_urls_by_id?: Maybe<Short_Urls>;
  short_urls_by_version?: Maybe<Version_Short_Urls>;
  staff_directory: Array<Staff_Directory>;
  staff_directory_aggregated: Array<Staff_Directory_Aggregated>;
  staff_directory_by_id?: Maybe<Staff_Directory>;
  staff_directory_by_version?: Maybe<Version_Staff_Directory>;
  tabbed_pane: Array<Tabbed_Pane>;
  tabbed_pane_aggregated: Array<Tabbed_Pane_Aggregated>;
  tabbed_pane_by_id?: Maybe<Tabbed_Pane>;
  tabbed_pane_by_version?: Maybe<Version_Tabbed_Pane>;
  team_members: Array<Team_Members>;
  team_members_aggregated: Array<Team_Members_Aggregated>;
  team_members_by_id?: Maybe<Team_Members>;
  team_members_by_version?: Maybe<Version_Team_Members>;
  understandng_ai_links: Array<Understandng_Ai_Links>;
  understandng_ai_links_aggregated: Array<Understandng_Ai_Links_Aggregated>;
  understandng_ai_links_by_id?: Maybe<Understandng_Ai_Links>;
  understandng_ai_links_by_version?: Maybe<Version_Understandng_Ai_Links>;
  useful_links: Array<Useful_Links>;
  useful_links_aggregated: Array<Useful_Links_Aggregated>;
  useful_links_by_id?: Maybe<Useful_Links>;
  useful_links_by_version?: Maybe<Version_Useful_Links>;
};


export type QueryAbout_Us_PageArgs = {
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAbout_Us_Page_By_VersionArgs = {
  version: Scalars['String']['input'];
};


export type QueryActive_AgentsArgs = {
  filter?: InputMaybe<Active_Agents_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryActive_Agents_AggregatedArgs = {
  filter?: InputMaybe<Active_Agents_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryActive_Agents_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryActive_Agents_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryAnnouncementsArgs = {
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAnnouncements_By_VersionArgs = {
  version: Scalars['String']['input'];
};


export type QueryBlogArgs = {
  filter?: InputMaybe<Blog_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBlog_AggregatedArgs = {
  filter?: InputMaybe<Blog_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBlog_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryBlog_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryCampus_LocationsArgs = {
  filter?: InputMaybe<Campus_Locations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCampus_Locations_AggregatedArgs = {
  filter?: InputMaybe<Campus_Locations_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCampus_Locations_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCampus_Locations_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryColumnsArgs = {
  filter?: InputMaybe<Columns_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryColumns_AggregatedArgs = {
  filter?: InputMaybe<Columns_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryColumns_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryColumns_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryCoursesArgs = {
  filter?: InputMaybe<Courses_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCourses_AggregatedArgs = {
  filter?: InputMaybe<Courses_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCourses_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCourses_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryDegreeArgs = {
  filter?: InputMaybe<Degree_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryDegree_AggregatedArgs = {
  filter?: InputMaybe<Degree_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryDegree_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryDegree_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryEventsArgs = {
  filter?: InputMaybe<Events_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryEvents_AggregatedArgs = {
  filter?: InputMaybe<Events_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryEvents_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryEvents_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryExplore_ChurchillArgs = {
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryExplore_Churchill_By_VersionArgs = {
  version: Scalars['String']['input'];
};


export type QueryExplore_Churchill_FilesArgs = {
  filter?: InputMaybe<Explore_Churchill_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryExplore_Churchill_Files_AggregatedArgs = {
  filter?: InputMaybe<Explore_Churchill_Files_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryExplore_Churchill_Files_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryExplore_Churchill_Files_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryFaqsArgs = {
  filter?: InputMaybe<Faqs_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryFaqs_AggregatedArgs = {
  filter?: InputMaybe<Faqs_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryFaqs_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFaqs_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryFilesArgs = {
  filter?: InputMaybe<Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryFiles_AggregatedArgs = {
  filter?: InputMaybe<Files_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryFiles_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFiles_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryGovernance_StructureArgs = {
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGovernance_Structure_By_VersionArgs = {
  version: Scalars['String']['input'];
};


export type QueryHoliday_PopupArgs = {
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryHoliday_Popup_By_VersionArgs = {
  version: Scalars['String']['input'];
};


export type QueryHow_To_GuideArgs = {
  filter?: InputMaybe<How_To_Guide_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryHow_To_Guide_AggregatedArgs = {
  filter?: InputMaybe<How_To_Guide_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryHow_To_Guide_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryHow_To_Guide_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryImage_GalleryArgs = {
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryImage_Gallery_By_VersionArgs = {
  version: Scalars['String']['input'];
};


export type QueryImage_Gallery_FilesArgs = {
  filter?: InputMaybe<Image_Gallery_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryImage_Gallery_Files_AggregatedArgs = {
  filter?: InputMaybe<Image_Gallery_Files_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryImage_Gallery_Files_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryImage_Gallery_Files_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryInduction_AgentsArgs = {
  filter?: InputMaybe<Induction_Agents_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryInduction_Agents_AggregatedArgs = {
  filter?: InputMaybe<Induction_Agents_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryInduction_Agents_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryInduction_Agents_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryInfo_ItemArgs = {
  filter?: InputMaybe<Info_Item_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryInfo_Item_AggregatedArgs = {
  filter?: InputMaybe<Info_Item_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryInfo_Item_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryInfo_Item_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryKey_DatesArgs = {
  filter?: InputMaybe<Key_Dates_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryKey_Dates_AggregatedArgs = {
  filter?: InputMaybe<Key_Dates_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryKey_Dates_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryKey_Dates_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryLogin_LinksArgs = {
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryLogin_Links_By_VersionArgs = {
  version: Scalars['String']['input'];
};


export type QueryMarketing_KitArgs = {
  filter?: InputMaybe<Marketing_Kit_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryMarketing_Kit_AggregatedArgs = {
  filter?: InputMaybe<Marketing_Kit_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryMarketing_Kit_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryMarketing_Kit_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryNewsArgs = {
  filter?: InputMaybe<News_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryNews_AggregatedArgs = {
  filter?: InputMaybe<News_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryNews_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryNews_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryPagesArgs = {
  filter?: InputMaybe<Pages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPages_AggregatedArgs = {
  filter?: InputMaybe<Pages_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPages_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPages_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryPages_SectionsArgs = {
  filter?: InputMaybe<Pages_Sections_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPages_Sections_AggregatedArgs = {
  filter?: InputMaybe<Pages_Sections_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPages_Sections_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPages_Sections_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryPoliciesArgs = {
  filter?: InputMaybe<Policies_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPolicies_AggregatedArgs = {
  filter?: InputMaybe<Policies_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPolicies_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPolicies_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryQuick_LinksArgs = {
  filter?: InputMaybe<Quick_Links_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryQuick_Links_AggregatedArgs = {
  filter?: InputMaybe<Quick_Links_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryQuick_Links_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryQuick_Links_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryRequest_FormArgs = {
  filter?: InputMaybe<Request_Form_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryRequest_Form_AggregatedArgs = {
  filter?: InputMaybe<Request_Form_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryRequest_Form_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryRequest_Form_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QuerySectionsArgs = {
  filter?: InputMaybe<Sections_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySections_AggregatedArgs = {
  filter?: InputMaybe<Sections_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySections_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySections_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QuerySections_ColumnsArgs = {
  filter?: InputMaybe<Sections_Columns_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySections_Columns_AggregatedArgs = {
  filter?: InputMaybe<Sections_Columns_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySections_Columns_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySections_Columns_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryShort_UrlsArgs = {
  filter?: InputMaybe<Short_Urls_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryShort_Urls_AggregatedArgs = {
  filter?: InputMaybe<Short_Urls_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryShort_Urls_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryShort_Urls_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryStaff_DirectoryArgs = {
  filter?: InputMaybe<Staff_Directory_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryStaff_Directory_AggregatedArgs = {
  filter?: InputMaybe<Staff_Directory_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryStaff_Directory_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryStaff_Directory_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryTabbed_PaneArgs = {
  filter?: InputMaybe<Tabbed_Pane_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryTabbed_Pane_AggregatedArgs = {
  filter?: InputMaybe<Tabbed_Pane_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryTabbed_Pane_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTabbed_Pane_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryTeam_MembersArgs = {
  filter?: InputMaybe<Team_Members_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryTeam_Members_AggregatedArgs = {
  filter?: InputMaybe<Team_Members_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryTeam_Members_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTeam_Members_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryUnderstandng_Ai_LinksArgs = {
  filter?: InputMaybe<Understandng_Ai_Links_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUnderstandng_Ai_Links_AggregatedArgs = {
  filter?: InputMaybe<Understandng_Ai_Links_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUnderstandng_Ai_Links_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryUnderstandng_Ai_Links_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryUseful_LinksArgs = {
  filter?: InputMaybe<Useful_Links_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUseful_Links_AggregatedArgs = {
  filter?: InputMaybe<Useful_Links_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUseful_Links_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryUseful_Links_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};

export type Subscription = {
  about_us_page_mutated?: Maybe<About_Us_Page_Mutated>;
  active_agents_mutated?: Maybe<Active_Agents_Mutated>;
  announcements_mutated?: Maybe<Announcements_Mutated>;
  blog_mutated?: Maybe<Blog_Mutated>;
  campus_locations_mutated?: Maybe<Campus_Locations_Mutated>;
  columns_mutated?: Maybe<Columns_Mutated>;
  courses_mutated?: Maybe<Courses_Mutated>;
  degree_mutated?: Maybe<Degree_Mutated>;
  directus_files_mutated?: Maybe<Directus_Files_Mutated>;
  events_mutated?: Maybe<Events_Mutated>;
  explore_churchill_files_mutated?: Maybe<Explore_Churchill_Files_Mutated>;
  explore_churchill_mutated?: Maybe<Explore_Churchill_Mutated>;
  faqs_mutated?: Maybe<Faqs_Mutated>;
  files_mutated?: Maybe<Files_Mutated>;
  governance_structure_mutated?: Maybe<Governance_Structure_Mutated>;
  holiday_popup_mutated?: Maybe<Holiday_Popup_Mutated>;
  how_to_guide_mutated?: Maybe<How_To_Guide_Mutated>;
  image_gallery_files_mutated?: Maybe<Image_Gallery_Files_Mutated>;
  image_gallery_mutated?: Maybe<Image_Gallery_Mutated>;
  induction_agents_mutated?: Maybe<Induction_Agents_Mutated>;
  info_item_mutated?: Maybe<Info_Item_Mutated>;
  key_dates_mutated?: Maybe<Key_Dates_Mutated>;
  login_links_mutated?: Maybe<Login_Links_Mutated>;
  marketing_kit_mutated?: Maybe<Marketing_Kit_Mutated>;
  news_mutated?: Maybe<News_Mutated>;
  pages_mutated?: Maybe<Pages_Mutated>;
  pages_sections_mutated?: Maybe<Pages_Sections_Mutated>;
  policies_mutated?: Maybe<Policies_Mutated>;
  quick_links_mutated?: Maybe<Quick_Links_Mutated>;
  request_form_mutated?: Maybe<Request_Form_Mutated>;
  sections_columns_mutated?: Maybe<Sections_Columns_Mutated>;
  sections_mutated?: Maybe<Sections_Mutated>;
  short_urls_mutated?: Maybe<Short_Urls_Mutated>;
  staff_directory_mutated?: Maybe<Staff_Directory_Mutated>;
  tabbed_pane_mutated?: Maybe<Tabbed_Pane_Mutated>;
  team_members_mutated?: Maybe<Team_Members_Mutated>;
  understandng_ai_links_mutated?: Maybe<Understandng_Ai_Links_Mutated>;
  useful_links_mutated?: Maybe<Useful_Links_Mutated>;
};


export type SubscriptionAbout_Us_Page_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionActive_Agents_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionAnnouncements_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionBlog_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionCampus_Locations_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionColumns_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionCourses_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDegree_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Files_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionEvents_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionExplore_Churchill_Files_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionExplore_Churchill_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionFaqs_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionFiles_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionGovernance_Structure_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionHoliday_Popup_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionHow_To_Guide_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionImage_Gallery_Files_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionImage_Gallery_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionInduction_Agents_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionInfo_Item_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionKey_Dates_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionLogin_Links_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionMarketing_Kit_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionNews_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionPages_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionPages_Sections_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionPolicies_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionQuick_Links_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionRequest_Form_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionSections_Columns_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionSections_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionShort_Urls_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionStaff_Directory_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionTabbed_Pane_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionTeam_Members_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionUnderstandng_Ai_Links_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionUseful_Links_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};

export type About_Us_Page = {
  about_us_content?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  page_notes?: Maybe<Scalars['String']['output']>;
  slider_items?: Maybe<Scalars['JSON']['output']>;
  slider_items_func?: Maybe<Count_Functions>;
};

export type About_Us_Page_Mutated = {
  data?: Maybe<About_Us_Page>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Active_Agents = {
  account_name?: Maybe<Scalars['String']['output']>;
  address?: Maybe<Scalars['String']['output']>;
  agency_stage?: Maybe<Scalars['String']['output']>;
  agent_name?: Maybe<Scalars['String']['output']>;
  created_date?: Maybe<Scalars['Date']['output']>;
  created_date_func?: Maybe<Datetime_Functions>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  review_link?: Maybe<Scalars['String']['output']>;
  zoho_id?: Maybe<Scalars['String']['output']>;
};

export type Active_Agents_Aggregated = {
  avg?: Maybe<Active_Agents_Aggregated_Fields>;
  avgDistinct?: Maybe<Active_Agents_Aggregated_Fields>;
  count?: Maybe<Active_Agents_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Active_Agents_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Active_Agents_Aggregated_Fields>;
  min?: Maybe<Active_Agents_Aggregated_Fields>;
  sum?: Maybe<Active_Agents_Aggregated_Fields>;
  sumDistinct?: Maybe<Active_Agents_Aggregated_Fields>;
};

export type Active_Agents_Aggregated_Count = {
  account_name?: Maybe<Scalars['Int']['output']>;
  address?: Maybe<Scalars['Int']['output']>;
  agency_stage?: Maybe<Scalars['Int']['output']>;
  agent_name?: Maybe<Scalars['Int']['output']>;
  created_date?: Maybe<Scalars['Int']['output']>;
  email?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  phone?: Maybe<Scalars['Int']['output']>;
  review_link?: Maybe<Scalars['Int']['output']>;
  zoho_id?: Maybe<Scalars['Int']['output']>;
};

export type Active_Agents_Aggregated_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
};

export type Active_Agents_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Active_Agents_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Active_Agents_Filter>>>;
  account_name?: InputMaybe<String_Filter_Operators>;
  address?: InputMaybe<String_Filter_Operators>;
  agency_stage?: InputMaybe<String_Filter_Operators>;
  agent_name?: InputMaybe<String_Filter_Operators>;
  created_date?: InputMaybe<Date_Filter_Operators>;
  created_date_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  email?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  phone?: InputMaybe<String_Filter_Operators>;
  review_link?: InputMaybe<String_Filter_Operators>;
  zoho_id?: InputMaybe<String_Filter_Operators>;
};

export type Active_Agents_Mutated = {
  data?: Maybe<Active_Agents>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Announcements = {
  announcement_text?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type Announcements_Mutated = {
  data?: Maybe<Announcements>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Big_Int_Filter_Operators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars['GraphQLBigInt']['input']>>>;
  _eq?: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  _gt?: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  _gte?: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['GraphQLBigInt']['input']>>>;
  _lt?: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  _lte?: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars['GraphQLBigInt']['input']>>>;
  _neq?: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['GraphQLBigInt']['input']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Blog = {
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  description?: Maybe<Scalars['String']['output']>;
  hero_image?: Maybe<Directus_Files>;
  id: Scalars['ID']['output'];
  rich_text?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  /** DO NOT CHANGE THIS AFTER CREATION; Auto generated; Enter if you want custom slug;  */
  sort?: Maybe<Scalars['Int']['output']>;
  tags?: Maybe<Scalars['JSON']['output']>;
  tags_func?: Maybe<Count_Functions>;
  title?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
};


export type BlogHero_ImageArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Blog_Aggregated = {
  avg?: Maybe<Blog_Aggregated_Fields>;
  avgDistinct?: Maybe<Blog_Aggregated_Fields>;
  count?: Maybe<Blog_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Blog_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Blog_Aggregated_Fields>;
  min?: Maybe<Blog_Aggregated_Fields>;
  sum?: Maybe<Blog_Aggregated_Fields>;
  sumDistinct?: Maybe<Blog_Aggregated_Fields>;
};

export type Blog_Aggregated_Count = {
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['Int']['output']>;
  hero_image?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  rich_text?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['Int']['output']>;
  /** DO NOT CHANGE THIS AFTER CREATION; Auto generated; Enter if you want custom slug;  */
  sort?: Maybe<Scalars['Int']['output']>;
  tags?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Blog_Aggregated_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
  /** DO NOT CHANGE THIS AFTER CREATION; Auto generated; Enter if you want custom slug;  */
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Blog_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Blog_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Blog_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  hero_image?: InputMaybe<Directus_Files_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  rich_text?: InputMaybe<String_Filter_Operators>;
  slug?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  tags?: InputMaybe<String_Filter_Operators>;
  tags_func?: InputMaybe<Count_Function_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
};

export type Blog_Mutated = {
  data?: Maybe<Blog>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Boolean_Filter_Operators = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Campus_Locations = {
  address?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Directus_Files>;
  location_badge?: Maybe<Scalars['String']['output']>;
  location_url?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  website?: Maybe<Scalars['String']['output']>;
};


export type Campus_LocationsImageArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Campus_Locations_Aggregated = {
  avg?: Maybe<Campus_Locations_Aggregated_Fields>;
  avgDistinct?: Maybe<Campus_Locations_Aggregated_Fields>;
  count?: Maybe<Campus_Locations_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Campus_Locations_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Campus_Locations_Aggregated_Fields>;
  min?: Maybe<Campus_Locations_Aggregated_Fields>;
  sum?: Maybe<Campus_Locations_Aggregated_Fields>;
  sumDistinct?: Maybe<Campus_Locations_Aggregated_Fields>;
};

export type Campus_Locations_Aggregated_Count = {
  address?: Maybe<Scalars['Int']['output']>;
  email?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  image?: Maybe<Scalars['Int']['output']>;
  location_badge?: Maybe<Scalars['Int']['output']>;
  location_url?: Maybe<Scalars['Int']['output']>;
  phone?: Maybe<Scalars['Int']['output']>;
  summary?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
  website?: Maybe<Scalars['Int']['output']>;
};

export type Campus_Locations_Aggregated_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
};

export type Campus_Locations_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Campus_Locations_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Campus_Locations_Filter>>>;
  address?: InputMaybe<String_Filter_Operators>;
  email?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  image?: InputMaybe<Directus_Files_Filter>;
  location_badge?: InputMaybe<String_Filter_Operators>;
  location_url?: InputMaybe<String_Filter_Operators>;
  phone?: InputMaybe<String_Filter_Operators>;
  summary?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  website?: InputMaybe<String_Filter_Operators>;
};

export type Campus_Locations_Mutated = {
  data?: Maybe<Campus_Locations>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Columns = {
  button_label?: Maybe<Scalars['String']['output']>;
  button_url?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Directus_Files>;
  is_card?: Maybe<Scalars['Boolean']['output']>;
  open_in_new_tab?: Maybe<Scalars['Boolean']['output']>;
  parent?: Maybe<Sections>;
  rich_text?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type ColumnsImageArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ColumnsParentArgs = {
  filter?: InputMaybe<Sections_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Columns_Aggregated = {
  avg?: Maybe<Columns_Aggregated_Fields>;
  avgDistinct?: Maybe<Columns_Aggregated_Fields>;
  count?: Maybe<Columns_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Columns_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Columns_Aggregated_Fields>;
  min?: Maybe<Columns_Aggregated_Fields>;
  sum?: Maybe<Columns_Aggregated_Fields>;
  sumDistinct?: Maybe<Columns_Aggregated_Fields>;
};

export type Columns_Aggregated_Count = {
  button_label?: Maybe<Scalars['Int']['output']>;
  button_url?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  image?: Maybe<Scalars['Int']['output']>;
  is_card?: Maybe<Scalars['Int']['output']>;
  open_in_new_tab?: Maybe<Scalars['Int']['output']>;
  parent?: Maybe<Scalars['Int']['output']>;
  rich_text?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
};

export type Columns_Aggregated_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
  parent?: Maybe<Scalars['Float']['output']>;
};

export type Columns_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Columns_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Columns_Filter>>>;
  button_label?: InputMaybe<String_Filter_Operators>;
  button_url?: InputMaybe<String_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  image?: InputMaybe<Directus_Files_Filter>;
  is_card?: InputMaybe<Boolean_Filter_Operators>;
  open_in_new_tab?: InputMaybe<Boolean_Filter_Operators>;
  parent?: InputMaybe<Sections_Filter>;
  rich_text?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
};

export type Columns_Mutated = {
  data?: Maybe<Columns>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Count_Function_Filter_Operators = {
  count?: InputMaybe<Number_Filter_Operators>;
};

export type Count_Functions = {
  count?: Maybe<Scalars['Int']['output']>;
};

export type Courses = {
  course_code?: Maybe<Scalars['String']['output']>;
  course_structure?: Maybe<Array<Maybe<Tabbed_Pane>>>;
  course_structure_func?: Maybe<Count_Functions>;
  degree?: Maybe<Degree>;
  description?: Maybe<Scalars['String']['output']>;
  hero_image?: Maybe<Directus_Files>;
  icon_string?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  program_details?: Maybe<Array<Maybe<Info_Item>>>;
  program_details_func?: Maybe<Count_Functions>;
  /** DO NOT CHANGE THIS AFTER CREATION; Auto generated; Enter if you want custom slug;  */
  slug: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
};


export type CoursesCourse_StructureArgs = {
  filter?: InputMaybe<Tabbed_Pane_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CoursesDegreeArgs = {
  filter?: InputMaybe<Degree_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CoursesHero_ImageArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CoursesProgram_DetailsArgs = {
  filter?: InputMaybe<Info_Item_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Courses_Aggregated = {
  avg?: Maybe<Courses_Aggregated_Fields>;
  avgDistinct?: Maybe<Courses_Aggregated_Fields>;
  count?: Maybe<Courses_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Courses_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Courses_Aggregated_Fields>;
  min?: Maybe<Courses_Aggregated_Fields>;
  sum?: Maybe<Courses_Aggregated_Fields>;
  sumDistinct?: Maybe<Courses_Aggregated_Fields>;
};

export type Courses_Aggregated_Count = {
  course_code?: Maybe<Scalars['Int']['output']>;
  course_structure?: Maybe<Scalars['Int']['output']>;
  degree?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['Int']['output']>;
  hero_image?: Maybe<Scalars['Int']['output']>;
  icon_string?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  program_details?: Maybe<Scalars['Int']['output']>;
  /** DO NOT CHANGE THIS AFTER CREATION; Auto generated; Enter if you want custom slug;  */
  slug?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
};

export type Courses_Aggregated_Fields = {
  degree?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

export type Courses_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Courses_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Courses_Filter>>>;
  course_code?: InputMaybe<String_Filter_Operators>;
  course_structure?: InputMaybe<Tabbed_Pane_Quantifier_Filter>;
  course_structure_func?: InputMaybe<Count_Function_Filter_Operators>;
  degree?: InputMaybe<Degree_Filter>;
  description?: InputMaybe<String_Filter_Operators>;
  hero_image?: InputMaybe<Directus_Files_Filter>;
  icon_string?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  program_details?: InputMaybe<Info_Item_Quantifier_Filter>;
  program_details_func?: InputMaybe<Count_Function_Filter_Operators>;
  slug?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
};

export type Courses_Mutated = {
  data?: Maybe<Courses>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Date_Filter_Operators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Date_Function_Filter_Operators = {
  day?: InputMaybe<Number_Filter_Operators>;
  month?: InputMaybe<Number_Filter_Operators>;
  week?: InputMaybe<Number_Filter_Operators>;
  weekday?: InputMaybe<Number_Filter_Operators>;
  year?: InputMaybe<Number_Filter_Operators>;
};

export type Date_Functions = {
  day?: Maybe<Scalars['Int']['output']>;
  month?: Maybe<Scalars['Int']['output']>;
  week?: Maybe<Scalars['Int']['output']>;
  weekday?: Maybe<Scalars['Int']['output']>;
  year?: Maybe<Scalars['Int']['output']>;
};

export type Datetime_Function_Filter_Operators = {
  day?: InputMaybe<Number_Filter_Operators>;
  hour?: InputMaybe<Number_Filter_Operators>;
  minute?: InputMaybe<Number_Filter_Operators>;
  month?: InputMaybe<Number_Filter_Operators>;
  second?: InputMaybe<Number_Filter_Operators>;
  week?: InputMaybe<Number_Filter_Operators>;
  weekday?: InputMaybe<Number_Filter_Operators>;
  year?: InputMaybe<Number_Filter_Operators>;
};

export type Datetime_Functions = {
  day?: Maybe<Scalars['Int']['output']>;
  hour?: Maybe<Scalars['Int']['output']>;
  minute?: Maybe<Scalars['Int']['output']>;
  month?: Maybe<Scalars['Int']['output']>;
  second?: Maybe<Scalars['Int']['output']>;
  week?: Maybe<Scalars['Int']['output']>;
  weekday?: Maybe<Scalars['Int']['output']>;
  year?: Maybe<Scalars['Int']['output']>;
};

export type Degree = {
  course_code?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  learning_outcomes?: Maybe<Scalars['String']['output']>;
  short_title?: Maybe<Scalars['String']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Degree_Aggregated = {
  avg?: Maybe<Degree_Aggregated_Fields>;
  avgDistinct?: Maybe<Degree_Aggregated_Fields>;
  count?: Maybe<Degree_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Degree_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Degree_Aggregated_Fields>;
  min?: Maybe<Degree_Aggregated_Fields>;
  sum?: Maybe<Degree_Aggregated_Fields>;
  sumDistinct?: Maybe<Degree_Aggregated_Fields>;
};

export type Degree_Aggregated_Count = {
  course_code?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  learning_outcomes?: Maybe<Scalars['Int']['output']>;
  short_title?: Maybe<Scalars['Int']['output']>;
  summary?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
};

export type Degree_Aggregated_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
};

export type Degree_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Degree_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Degree_Filter>>>;
  course_code?: InputMaybe<String_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  learning_outcomes?: InputMaybe<String_Filter_Operators>;
  short_title?: InputMaybe<String_Filter_Operators>;
  summary?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
};

export type Degree_Mutated = {
  data?: Maybe<Degree>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Files = {
  charset?: Maybe<Scalars['String']['output']>;
  created_on?: Maybe<Scalars['Date']['output']>;
  created_on_func?: Maybe<Datetime_Functions>;
  description?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  embed?: Maybe<Scalars['String']['output']>;
  filename_disk?: Maybe<Scalars['String']['output']>;
  filename_download: Scalars['String']['output'];
  filesize?: Maybe<Scalars['GraphQLBigInt']['output']>;
  focal_point_x?: Maybe<Scalars['Int']['output']>;
  focal_point_y?: Maybe<Scalars['Int']['output']>;
  folder?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  location?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['JSON']['output']>;
  metadata_func?: Maybe<Count_Functions>;
  modified_by?: Maybe<Scalars['String']['output']>;
  modified_on?: Maybe<Scalars['Date']['output']>;
  modified_on_func?: Maybe<Datetime_Functions>;
  storage: Scalars['String']['output'];
  tags?: Maybe<Scalars['JSON']['output']>;
  tags_func?: Maybe<Count_Functions>;
  title?: Maybe<Scalars['String']['output']>;
  tus_data?: Maybe<Scalars['JSON']['output']>;
  tus_data_func?: Maybe<Count_Functions>;
  tus_id?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  uploaded_by?: Maybe<Scalars['String']['output']>;
  uploaded_on?: Maybe<Scalars['Date']['output']>;
  uploaded_on_func?: Maybe<Datetime_Functions>;
  width?: Maybe<Scalars['Int']['output']>;
};

export type Directus_Files_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Files_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Files_Filter>>>;
  charset?: InputMaybe<String_Filter_Operators>;
  created_on?: InputMaybe<Date_Filter_Operators>;
  created_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  duration?: InputMaybe<Number_Filter_Operators>;
  embed?: InputMaybe<String_Filter_Operators>;
  filename_disk?: InputMaybe<String_Filter_Operators>;
  filename_download?: InputMaybe<String_Filter_Operators>;
  filesize?: InputMaybe<Big_Int_Filter_Operators>;
  focal_point_x?: InputMaybe<Number_Filter_Operators>;
  focal_point_y?: InputMaybe<Number_Filter_Operators>;
  folder?: InputMaybe<String_Filter_Operators>;
  height?: InputMaybe<Number_Filter_Operators>;
  id?: InputMaybe<Id_Filter_Operators>;
  location?: InputMaybe<String_Filter_Operators>;
  metadata?: InputMaybe<String_Filter_Operators>;
  metadata_func?: InputMaybe<Count_Function_Filter_Operators>;
  modified_by?: InputMaybe<String_Filter_Operators>;
  modified_on?: InputMaybe<Date_Filter_Operators>;
  modified_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  storage?: InputMaybe<String_Filter_Operators>;
  tags?: InputMaybe<String_Filter_Operators>;
  tags_func?: InputMaybe<Count_Function_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  tus_data?: InputMaybe<String_Filter_Operators>;
  tus_data_func?: InputMaybe<Count_Function_Filter_Operators>;
  tus_id?: InputMaybe<String_Filter_Operators>;
  type?: InputMaybe<String_Filter_Operators>;
  uploaded_by?: InputMaybe<String_Filter_Operators>;
  uploaded_on?: InputMaybe<Date_Filter_Operators>;
  uploaded_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  width?: InputMaybe<Number_Filter_Operators>;
};

export type Directus_Files_Mutated = {
  data?: Maybe<Directus_Files>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Events = {
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  end_datetime?: Maybe<Scalars['Date']['output']>;
  end_datetime_func?: Maybe<Datetime_Functions>;
  hero_image?: Maybe<Directus_Files>;
  id: Scalars['ID']['output'];
  rich_text?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  start_datetime?: Maybe<Scalars['Date']['output']>;
  start_datetime_func?: Maybe<Datetime_Functions>;
  status?: Maybe<Scalars['String']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Scalars['JSON']['output']>;
  tags_func?: Maybe<Count_Functions>;
  title?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
};


export type EventsHero_ImageArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Events_Aggregated = {
  avg?: Maybe<Events_Aggregated_Fields>;
  avgDistinct?: Maybe<Events_Aggregated_Fields>;
  count?: Maybe<Events_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Events_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Events_Aggregated_Fields>;
  min?: Maybe<Events_Aggregated_Fields>;
  sum?: Maybe<Events_Aggregated_Fields>;
  sumDistinct?: Maybe<Events_Aggregated_Fields>;
};

export type Events_Aggregated_Count = {
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  end_datetime?: Maybe<Scalars['Int']['output']>;
  hero_image?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  rich_text?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  start_datetime?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  summary?: Maybe<Scalars['Int']['output']>;
  tags?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Events_Aggregated_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Events_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Events_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Events_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  end_datetime?: InputMaybe<Date_Filter_Operators>;
  end_datetime_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  hero_image?: InputMaybe<Directus_Files_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  rich_text?: InputMaybe<String_Filter_Operators>;
  slug?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  start_datetime?: InputMaybe<Date_Filter_Operators>;
  start_datetime_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  summary?: InputMaybe<String_Filter_Operators>;
  tags?: InputMaybe<String_Filter_Operators>;
  tags_func?: InputMaybe<Count_Function_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
};

export type Events_Mutated = {
  data?: Maybe<Events>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Explore_Churchill = {
  id: Scalars['ID']['output'];
  section_title?: Maybe<Scalars['String']['output']>;
  videos?: Maybe<Array<Maybe<Explore_Churchill_Files>>>;
  videos_func?: Maybe<Count_Functions>;
};


export type Explore_ChurchillVideosArgs = {
  filter?: InputMaybe<Explore_Churchill_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Explore_Churchill_Files = {
  directus_files_id?: Maybe<Directus_Files>;
  explore_churchill_id?: Maybe<Explore_Churchill>;
  id: Scalars['ID']['output'];
};


export type Explore_Churchill_FilesDirectus_Files_IdArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Explore_Churchill_FilesExplore_Churchill_IdArgs = {
  filter?: InputMaybe<Explore_Churchill_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Explore_Churchill_Files_Aggregated = {
  avg?: Maybe<Explore_Churchill_Files_Aggregated_Fields>;
  avgDistinct?: Maybe<Explore_Churchill_Files_Aggregated_Fields>;
  count?: Maybe<Explore_Churchill_Files_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Explore_Churchill_Files_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Explore_Churchill_Files_Aggregated_Fields>;
  min?: Maybe<Explore_Churchill_Files_Aggregated_Fields>;
  sum?: Maybe<Explore_Churchill_Files_Aggregated_Fields>;
  sumDistinct?: Maybe<Explore_Churchill_Files_Aggregated_Fields>;
};

export type Explore_Churchill_Files_Aggregated_Count = {
  directus_files_id?: Maybe<Scalars['Int']['output']>;
  explore_churchill_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type Explore_Churchill_Files_Aggregated_Fields = {
  explore_churchill_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

export type Explore_Churchill_Files_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Explore_Churchill_Files_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Explore_Churchill_Files_Filter>>>;
  directus_files_id?: InputMaybe<Directus_Files_Filter>;
  explore_churchill_id?: InputMaybe<Explore_Churchill_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
};

export type Explore_Churchill_Files_Mutated = {
  data?: Maybe<Explore_Churchill_Files>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Explore_Churchill_Files_Quantifier_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Explore_Churchill_Files_Filter>>>;
  _none?: InputMaybe<Explore_Churchill_Files_Filter>;
  _or?: InputMaybe<Array<InputMaybe<Explore_Churchill_Files_Filter>>>;
  _some?: InputMaybe<Explore_Churchill_Files_Filter>;
  directus_files_id?: InputMaybe<Directus_Files_Filter>;
  explore_churchill_id?: InputMaybe<Explore_Churchill_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
};

export type Explore_Churchill_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Explore_Churchill_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Explore_Churchill_Filter>>>;
  id?: InputMaybe<Number_Filter_Operators>;
  section_title?: InputMaybe<String_Filter_Operators>;
  videos?: InputMaybe<Explore_Churchill_Files_Quantifier_Filter>;
  videos_func?: InputMaybe<Count_Function_Filter_Operators>;
};

export type Explore_Churchill_Mutated = {
  data?: Maybe<Explore_Churchill>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Faqs = {
  id: Scalars['ID']['output'];
  rich_text?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Faqs_Aggregated = {
  avg?: Maybe<Faqs_Aggregated_Fields>;
  avgDistinct?: Maybe<Faqs_Aggregated_Fields>;
  count?: Maybe<Faqs_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Faqs_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Faqs_Aggregated_Fields>;
  min?: Maybe<Faqs_Aggregated_Fields>;
  sum?: Maybe<Faqs_Aggregated_Fields>;
  sumDistinct?: Maybe<Faqs_Aggregated_Fields>;
};

export type Faqs_Aggregated_Count = {
  id?: Maybe<Scalars['Int']['output']>;
  rich_text?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
};

export type Faqs_Aggregated_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
};

export type Faqs_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Faqs_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Faqs_Filter>>>;
  id?: InputMaybe<Number_Filter_Operators>;
  rich_text?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
};

export type Faqs_Mutated = {
  data?: Maybe<Faqs>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Files = {
  description?: Maybe<Scalars['String']['output']>;
  file?: Maybe<Directus_Files>;
  id: Scalars['ID']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type FilesFileArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Files_Aggregated = {
  avg?: Maybe<Files_Aggregated_Fields>;
  avgDistinct?: Maybe<Files_Aggregated_Fields>;
  count?: Maybe<Files_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Files_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Files_Aggregated_Fields>;
  min?: Maybe<Files_Aggregated_Fields>;
  sum?: Maybe<Files_Aggregated_Fields>;
  sumDistinct?: Maybe<Files_Aggregated_Fields>;
};

export type Files_Aggregated_Count = {
  description?: Maybe<Scalars['Int']['output']>;
  file?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
};

export type Files_Aggregated_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Files_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Files_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Files_Filter>>>;
  description?: InputMaybe<String_Filter_Operators>;
  file?: InputMaybe<Directus_Files_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  slug?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
};

export type Files_Mutated = {
  data?: Maybe<Files>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Governance_Structure = {
  governance_structure_membership?: Maybe<Directus_Files>;
  id: Scalars['ID']['output'];
  organisational_chart?: Maybe<Directus_Files>;
};


export type Governance_StructureGovernance_Structure_MembershipArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Governance_StructureOrganisational_ChartArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Governance_Structure_Mutated = {
  data?: Maybe<Governance_Structure>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Holiday_Popup = {
  dates?: Maybe<Scalars['JSON']['output']>;
  dates_func?: Maybe<Count_Functions>;
  id: Scalars['ID']['output'];
  note?: Maybe<Scalars['String']['output']>;
  show_popup?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Holiday_Popup_Mutated = {
  data?: Maybe<Holiday_Popup>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type How_To_Guide = {
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  image?: Maybe<Directus_Files>;
  rich_text?: Maybe<Scalars['String']['output']>;
  /** DO NOT CHANGE THIS AFTER CREATION; Auto generated; Enter if you want custom slug;  */
  slug?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type How_To_GuideImageArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type How_To_Guide_Aggregated = {
  avg?: Maybe<How_To_Guide_Aggregated_Fields>;
  avgDistinct?: Maybe<How_To_Guide_Aggregated_Fields>;
  count?: Maybe<How_To_Guide_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<How_To_Guide_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<How_To_Guide_Aggregated_Fields>;
  min?: Maybe<How_To_Guide_Aggregated_Fields>;
  sum?: Maybe<How_To_Guide_Aggregated_Fields>;
  sumDistinct?: Maybe<How_To_Guide_Aggregated_Fields>;
};

export type How_To_Guide_Aggregated_Count = {
  date_created?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  image?: Maybe<Scalars['Int']['output']>;
  rich_text?: Maybe<Scalars['Int']['output']>;
  /** DO NOT CHANGE THIS AFTER CREATION; Auto generated; Enter if you want custom slug;  */
  slug?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
};

export type How_To_Guide_Aggregated_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
};

export type How_To_Guide_Filter = {
  _and?: InputMaybe<Array<InputMaybe<How_To_Guide_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<How_To_Guide_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  image?: InputMaybe<Directus_Files_Filter>;
  rich_text?: InputMaybe<String_Filter_Operators>;
  slug?: InputMaybe<String_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
};

export type How_To_Guide_Mutated = {
  data?: Maybe<How_To_Guide>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Id_Filter_Operators = {
  _contains?: InputMaybe<Scalars['ID']['input']>;
  _empty?: InputMaybe<Scalars['Boolean']['input']>;
  _ends_with?: InputMaybe<Scalars['ID']['input']>;
  _eq?: InputMaybe<Scalars['ID']['input']>;
  _icontains?: InputMaybe<Scalars['ID']['input']>;
  _iends_with?: InputMaybe<Scalars['ID']['input']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  _istarts_with?: InputMaybe<Scalars['ID']['input']>;
  _ncontains?: InputMaybe<Scalars['ID']['input']>;
  _nempty?: InputMaybe<Scalars['Boolean']['input']>;
  _nends_with?: InputMaybe<Scalars['ID']['input']>;
  _neq?: InputMaybe<Scalars['ID']['input']>;
  _niends_with?: InputMaybe<Scalars['ID']['input']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  _nistarts_with?: InputMaybe<Scalars['ID']['input']>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _nstarts_with?: InputMaybe<Scalars['ID']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
  _starts_with?: InputMaybe<Scalars['ID']['input']>;
};

export type Image_Gallery = {
  id: Scalars['ID']['output'];
  images?: Maybe<Array<Maybe<Image_Gallery_Files>>>;
  images_func?: Maybe<Count_Functions>;
};


export type Image_GalleryImagesArgs = {
  filter?: InputMaybe<Image_Gallery_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Image_Gallery_Files = {
  directus_files_id?: Maybe<Directus_Files>;
  id: Scalars['ID']['output'];
  image_gallery_id?: Maybe<Image_Gallery>;
};


export type Image_Gallery_FilesDirectus_Files_IdArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Image_Gallery_FilesImage_Gallery_IdArgs = {
  filter?: InputMaybe<Image_Gallery_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Image_Gallery_Files_Aggregated = {
  avg?: Maybe<Image_Gallery_Files_Aggregated_Fields>;
  avgDistinct?: Maybe<Image_Gallery_Files_Aggregated_Fields>;
  count?: Maybe<Image_Gallery_Files_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Image_Gallery_Files_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Image_Gallery_Files_Aggregated_Fields>;
  min?: Maybe<Image_Gallery_Files_Aggregated_Fields>;
  sum?: Maybe<Image_Gallery_Files_Aggregated_Fields>;
  sumDistinct?: Maybe<Image_Gallery_Files_Aggregated_Fields>;
};

export type Image_Gallery_Files_Aggregated_Count = {
  directus_files_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  image_gallery_id?: Maybe<Scalars['Int']['output']>;
};

export type Image_Gallery_Files_Aggregated_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
  image_gallery_id?: Maybe<Scalars['Float']['output']>;
};

export type Image_Gallery_Files_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Image_Gallery_Files_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Image_Gallery_Files_Filter>>>;
  directus_files_id?: InputMaybe<Directus_Files_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  image_gallery_id?: InputMaybe<Image_Gallery_Filter>;
};

export type Image_Gallery_Files_Mutated = {
  data?: Maybe<Image_Gallery_Files>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Image_Gallery_Files_Quantifier_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Image_Gallery_Files_Filter>>>;
  _none?: InputMaybe<Image_Gallery_Files_Filter>;
  _or?: InputMaybe<Array<InputMaybe<Image_Gallery_Files_Filter>>>;
  _some?: InputMaybe<Image_Gallery_Files_Filter>;
  directus_files_id?: InputMaybe<Directus_Files_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  image_gallery_id?: InputMaybe<Image_Gallery_Filter>;
};

export type Image_Gallery_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Image_Gallery_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Image_Gallery_Filter>>>;
  id?: InputMaybe<Number_Filter_Operators>;
  images?: InputMaybe<Image_Gallery_Files_Quantifier_Filter>;
  images_func?: InputMaybe<Count_Function_Filter_Operators>;
};

export type Image_Gallery_Mutated = {
  data?: Maybe<Image_Gallery>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Induction_Agents = {
  account_name?: Maybe<Scalars['String']['output']>;
  address?: Maybe<Scalars['String']['output']>;
  agency_stage?: Maybe<Scalars['String']['output']>;
  agent_name?: Maybe<Scalars['String']['output']>;
  created_date?: Maybe<Scalars['Date']['output']>;
  created_date_func?: Maybe<Datetime_Functions>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  review_link?: Maybe<Scalars['String']['output']>;
  zoho_id?: Maybe<Scalars['String']['output']>;
};

export type Induction_Agents_Aggregated = {
  avg?: Maybe<Induction_Agents_Aggregated_Fields>;
  avgDistinct?: Maybe<Induction_Agents_Aggregated_Fields>;
  count?: Maybe<Induction_Agents_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Induction_Agents_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Induction_Agents_Aggregated_Fields>;
  min?: Maybe<Induction_Agents_Aggregated_Fields>;
  sum?: Maybe<Induction_Agents_Aggregated_Fields>;
  sumDistinct?: Maybe<Induction_Agents_Aggregated_Fields>;
};

export type Induction_Agents_Aggregated_Count = {
  account_name?: Maybe<Scalars['Int']['output']>;
  address?: Maybe<Scalars['Int']['output']>;
  agency_stage?: Maybe<Scalars['Int']['output']>;
  agent_name?: Maybe<Scalars['Int']['output']>;
  created_date?: Maybe<Scalars['Int']['output']>;
  email?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  phone?: Maybe<Scalars['Int']['output']>;
  review_link?: Maybe<Scalars['Int']['output']>;
  zoho_id?: Maybe<Scalars['Int']['output']>;
};

export type Induction_Agents_Aggregated_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
};

export type Induction_Agents_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Induction_Agents_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Induction_Agents_Filter>>>;
  account_name?: InputMaybe<String_Filter_Operators>;
  address?: InputMaybe<String_Filter_Operators>;
  agency_stage?: InputMaybe<String_Filter_Operators>;
  agent_name?: InputMaybe<String_Filter_Operators>;
  created_date?: InputMaybe<Date_Filter_Operators>;
  created_date_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  email?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  phone?: InputMaybe<String_Filter_Operators>;
  review_link?: InputMaybe<String_Filter_Operators>;
  zoho_id?: InputMaybe<String_Filter_Operators>;
};

export type Induction_Agents_Mutated = {
  data?: Maybe<Induction_Agents>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Info_Item = {
  course_key?: Maybe<Courses>;
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  label?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
};


export type Info_ItemCourse_KeyArgs = {
  filter?: InputMaybe<Courses_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Info_Item_Aggregated = {
  avg?: Maybe<Info_Item_Aggregated_Fields>;
  avgDistinct?: Maybe<Info_Item_Aggregated_Fields>;
  count?: Maybe<Info_Item_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Info_Item_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Info_Item_Aggregated_Fields>;
  min?: Maybe<Info_Item_Aggregated_Fields>;
  sum?: Maybe<Info_Item_Aggregated_Fields>;
  sumDistinct?: Maybe<Info_Item_Aggregated_Fields>;
};

export type Info_Item_Aggregated_Count = {
  course_key?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['Int']['output']>;
  icon?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  label?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
};

export type Info_Item_Aggregated_Fields = {
  course_key?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Info_Item_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Info_Item_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Info_Item_Filter>>>;
  course_key?: InputMaybe<Courses_Filter>;
  description?: InputMaybe<String_Filter_Operators>;
  icon?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  label?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
};

export type Info_Item_Mutated = {
  data?: Maybe<Info_Item>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Info_Item_Quantifier_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Info_Item_Filter>>>;
  _none?: InputMaybe<Info_Item_Filter>;
  _or?: InputMaybe<Array<InputMaybe<Info_Item_Filter>>>;
  _some?: InputMaybe<Info_Item_Filter>;
  course_key?: InputMaybe<Courses_Filter>;
  description?: InputMaybe<String_Filter_Operators>;
  icon?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  label?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
};

export type Key_Dates = {
  description?: Maybe<Scalars['String']['output']>;
  end_date?: Maybe<Scalars['Date']['output']>;
  end_date_func?: Maybe<Date_Functions>;
  id: Scalars['ID']['output'];
  is_highlighted?: Maybe<Scalars['Boolean']['output']>;
  start_date?: Maybe<Scalars['Date']['output']>;
  start_date_func?: Maybe<Date_Functions>;
  status?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Scalars['JSON']['output']>;
  tags_func?: Maybe<Count_Functions>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Key_Dates_Aggregated = {
  avg?: Maybe<Key_Dates_Aggregated_Fields>;
  avgDistinct?: Maybe<Key_Dates_Aggregated_Fields>;
  count?: Maybe<Key_Dates_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Key_Dates_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Key_Dates_Aggregated_Fields>;
  min?: Maybe<Key_Dates_Aggregated_Fields>;
  sum?: Maybe<Key_Dates_Aggregated_Fields>;
  sumDistinct?: Maybe<Key_Dates_Aggregated_Fields>;
};

export type Key_Dates_Aggregated_Count = {
  description?: Maybe<Scalars['Int']['output']>;
  end_date?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  is_highlighted?: Maybe<Scalars['Int']['output']>;
  start_date?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  tags?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
};

export type Key_Dates_Aggregated_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
};

export type Key_Dates_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Key_Dates_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Key_Dates_Filter>>>;
  description?: InputMaybe<String_Filter_Operators>;
  end_date?: InputMaybe<Date_Filter_Operators>;
  end_date_func?: InputMaybe<Date_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  is_highlighted?: InputMaybe<Boolean_Filter_Operators>;
  start_date?: InputMaybe<Date_Filter_Operators>;
  start_date_func?: InputMaybe<Date_Function_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  tags?: InputMaybe<String_Filter_Operators>;
  tags_func?: InputMaybe<Count_Function_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
};

export type Key_Dates_Mutated = {
  data?: Maybe<Key_Dates>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Login_Links = {
  id: Scalars['ID']['output'];
  links?: Maybe<Scalars['JSON']['output']>;
  links_func?: Maybe<Count_Functions>;
};

export type Login_Links_Mutated = {
  data?: Maybe<Login_Links>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Marketing_Kit = {
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  link?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Marketing_Kit_Aggregated = {
  avg?: Maybe<Marketing_Kit_Aggregated_Fields>;
  avgDistinct?: Maybe<Marketing_Kit_Aggregated_Fields>;
  count?: Maybe<Marketing_Kit_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Marketing_Kit_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Marketing_Kit_Aggregated_Fields>;
  min?: Maybe<Marketing_Kit_Aggregated_Fields>;
  sum?: Maybe<Marketing_Kit_Aggregated_Fields>;
  sumDistinct?: Maybe<Marketing_Kit_Aggregated_Fields>;
};

export type Marketing_Kit_Aggregated_Count = {
  icon?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  link?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
};

export type Marketing_Kit_Aggregated_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
};

export type Marketing_Kit_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Marketing_Kit_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Marketing_Kit_Filter>>>;
  icon?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  link?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
};

export type Marketing_Kit_Mutated = {
  data?: Maybe<Marketing_Kit>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type News = {
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  image?: Maybe<Directus_Files>;
  rich_text?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Scalars['JSON']['output']>;
  tags_func?: Maybe<Count_Functions>;
  title?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
};


export type NewsImageArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type News_Aggregated = {
  avg?: Maybe<News_Aggregated_Fields>;
  avgDistinct?: Maybe<News_Aggregated_Fields>;
  count?: Maybe<News_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<News_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<News_Aggregated_Fields>;
  min?: Maybe<News_Aggregated_Fields>;
  sum?: Maybe<News_Aggregated_Fields>;
  sumDistinct?: Maybe<News_Aggregated_Fields>;
};

export type News_Aggregated_Count = {
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  image?: Maybe<Scalars['Int']['output']>;
  rich_text?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  summary?: Maybe<Scalars['Int']['output']>;
  tags?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type News_Aggregated_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['Float']['output']>;
};

export type News_Filter = {
  _and?: InputMaybe<Array<InputMaybe<News_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<News_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  image?: InputMaybe<Directus_Files_Filter>;
  rich_text?: InputMaybe<String_Filter_Operators>;
  slug?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  summary?: InputMaybe<String_Filter_Operators>;
  tags?: InputMaybe<String_Filter_Operators>;
  tags_func?: InputMaybe<Count_Function_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
};

export type News_Mutated = {
  data?: Maybe<News>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Number_Filter_Operators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _eq?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _gt?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _gte?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _lt?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _lte?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _neq?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Pages = {
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Dictates where the page will be shown; If about us is selected- the page will show in /about-us/{entered-slug}  */
  parent_directory?: Maybe<Scalars['String']['output']>;
  sections?: Maybe<Array<Maybe<Pages_Sections>>>;
  sections_func?: Maybe<Count_Functions>;
  /** DO NOT CHANGE THIS AFTER CREATION; Auto generated; Enter if you want custom slug;  */
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  view_title_in_banner?: Maybe<Scalars['Boolean']['output']>;
};


export type PagesSectionsArgs = {
  filter?: InputMaybe<Pages_Sections_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Pages_Aggregated = {
  avg?: Maybe<Pages_Aggregated_Fields>;
  avgDistinct?: Maybe<Pages_Aggregated_Fields>;
  count?: Maybe<Pages_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Pages_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Pages_Aggregated_Fields>;
  min?: Maybe<Pages_Aggregated_Fields>;
  sum?: Maybe<Pages_Aggregated_Fields>;
  sumDistinct?: Maybe<Pages_Aggregated_Fields>;
};

export type Pages_Aggregated_Count = {
  description?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  /** Dictates where the page will be shown; If about us is selected- the page will show in /about-us/{entered-slug}  */
  parent_directory?: Maybe<Scalars['Int']['output']>;
  sections?: Maybe<Scalars['Int']['output']>;
  /** DO NOT CHANGE THIS AFTER CREATION; Auto generated; Enter if you want custom slug;  */
  slug?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
  view_title_in_banner?: Maybe<Scalars['Int']['output']>;
};

export type Pages_Aggregated_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
};

export type Pages_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Pages_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Pages_Filter>>>;
  description?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  parent_directory?: InputMaybe<String_Filter_Operators>;
  sections?: InputMaybe<Pages_Sections_Quantifier_Filter>;
  sections_func?: InputMaybe<Count_Function_Filter_Operators>;
  slug?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  view_title_in_banner?: InputMaybe<Boolean_Filter_Operators>;
};

export type Pages_Mutated = {
  data?: Maybe<Pages>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Pages_Sections = {
  id: Scalars['ID']['output'];
  pages_id?: Maybe<Pages>;
  sections_id?: Maybe<Sections>;
};


export type Pages_SectionsPages_IdArgs = {
  filter?: InputMaybe<Pages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Pages_SectionsSections_IdArgs = {
  filter?: InputMaybe<Sections_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Pages_Sections_Aggregated = {
  avg?: Maybe<Pages_Sections_Aggregated_Fields>;
  avgDistinct?: Maybe<Pages_Sections_Aggregated_Fields>;
  count?: Maybe<Pages_Sections_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Pages_Sections_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Pages_Sections_Aggregated_Fields>;
  min?: Maybe<Pages_Sections_Aggregated_Fields>;
  sum?: Maybe<Pages_Sections_Aggregated_Fields>;
  sumDistinct?: Maybe<Pages_Sections_Aggregated_Fields>;
};

export type Pages_Sections_Aggregated_Count = {
  id?: Maybe<Scalars['Int']['output']>;
  pages_id?: Maybe<Scalars['Int']['output']>;
  sections_id?: Maybe<Scalars['Int']['output']>;
};

export type Pages_Sections_Aggregated_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
  pages_id?: Maybe<Scalars['Float']['output']>;
  sections_id?: Maybe<Scalars['Float']['output']>;
};

export type Pages_Sections_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Pages_Sections_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Pages_Sections_Filter>>>;
  id?: InputMaybe<Number_Filter_Operators>;
  pages_id?: InputMaybe<Pages_Filter>;
  sections_id?: InputMaybe<Sections_Filter>;
};

export type Pages_Sections_Mutated = {
  data?: Maybe<Pages_Sections>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Pages_Sections_Quantifier_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Pages_Sections_Filter>>>;
  _none?: InputMaybe<Pages_Sections_Filter>;
  _or?: InputMaybe<Array<InputMaybe<Pages_Sections_Filter>>>;
  _some?: InputMaybe<Pages_Sections_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  pages_id?: InputMaybe<Pages_Filter>;
  sections_id?: InputMaybe<Sections_Filter>;
};

export type Policies = {
  description?: Maybe<Scalars['String']['output']>;
  file?: Maybe<Directus_Files>;
  icon_string?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** DO NOT CHANGE THIS AFTER CREATION; Auto generated; Enter if you want custom slug;  */
  slug?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type PoliciesFileArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Policies_Aggregated = {
  avg?: Maybe<Policies_Aggregated_Fields>;
  avgDistinct?: Maybe<Policies_Aggregated_Fields>;
  count?: Maybe<Policies_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Policies_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Policies_Aggregated_Fields>;
  min?: Maybe<Policies_Aggregated_Fields>;
  sum?: Maybe<Policies_Aggregated_Fields>;
  sumDistinct?: Maybe<Policies_Aggregated_Fields>;
};

export type Policies_Aggregated_Count = {
  description?: Maybe<Scalars['Int']['output']>;
  file?: Maybe<Scalars['Int']['output']>;
  icon_string?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  /** DO NOT CHANGE THIS AFTER CREATION; Auto generated; Enter if you want custom slug;  */
  slug?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
};

export type Policies_Aggregated_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Policies_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Policies_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Policies_Filter>>>;
  description?: InputMaybe<String_Filter_Operators>;
  file?: InputMaybe<Directus_Files_Filter>;
  icon_string?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  slug?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
};

export type Policies_Mutated = {
  data?: Maybe<Policies>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Quick_Links = {
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  link?: Maybe<Scalars['String']['output']>;
  redirect?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Quick_Links_Aggregated = {
  avg?: Maybe<Quick_Links_Aggregated_Fields>;
  avgDistinct?: Maybe<Quick_Links_Aggregated_Fields>;
  count?: Maybe<Quick_Links_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Quick_Links_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Quick_Links_Aggregated_Fields>;
  min?: Maybe<Quick_Links_Aggregated_Fields>;
  sum?: Maybe<Quick_Links_Aggregated_Fields>;
  sumDistinct?: Maybe<Quick_Links_Aggregated_Fields>;
};

export type Quick_Links_Aggregated_Count = {
  icon?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  link?: Maybe<Scalars['Int']['output']>;
  redirect?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
};

export type Quick_Links_Aggregated_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
};

export type Quick_Links_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Quick_Links_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Quick_Links_Filter>>>;
  icon?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  link?: InputMaybe<String_Filter_Operators>;
  redirect?: InputMaybe<Boolean_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
};

export type Quick_Links_Mutated = {
  data?: Maybe<Quick_Links>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Request_Form = {
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  description?: Maybe<Scalars['String']['output']>;
  icon_string?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  redirect_url?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Request_Form_Aggregated = {
  avg?: Maybe<Request_Form_Aggregated_Fields>;
  avgDistinct?: Maybe<Request_Form_Aggregated_Fields>;
  count?: Maybe<Request_Form_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Request_Form_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Request_Form_Aggregated_Fields>;
  min?: Maybe<Request_Form_Aggregated_Fields>;
  sum?: Maybe<Request_Form_Aggregated_Fields>;
  sumDistinct?: Maybe<Request_Form_Aggregated_Fields>;
};

export type Request_Form_Aggregated_Count = {
  date_created?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['Int']['output']>;
  icon_string?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  redirect_url?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
};

export type Request_Form_Aggregated_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Request_Form_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Request_Form_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Request_Form_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  icon_string?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  redirect_url?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
};

export type Request_Form_Mutated = {
  data?: Maybe<Request_Form>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Sections = {
  column_count?: Maybe<Scalars['String']['output']>;
  columns?: Maybe<Array<Maybe<Sections_Columns>>>;
  columns_func?: Maybe<Count_Functions>;
  id: Scalars['ID']['output'];
  is_card?: Maybe<Scalars['Boolean']['output']>;
  rich_text?: Maybe<Scalars['String']['output']>;
  section_title?: Maybe<Scalars['String']['output']>;
};


export type SectionsColumnsArgs = {
  filter?: InputMaybe<Sections_Columns_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Sections_Aggregated = {
  avg?: Maybe<Sections_Aggregated_Fields>;
  avgDistinct?: Maybe<Sections_Aggregated_Fields>;
  count?: Maybe<Sections_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Sections_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Sections_Aggregated_Fields>;
  min?: Maybe<Sections_Aggregated_Fields>;
  sum?: Maybe<Sections_Aggregated_Fields>;
  sumDistinct?: Maybe<Sections_Aggregated_Fields>;
};

export type Sections_Aggregated_Count = {
  column_count?: Maybe<Scalars['Int']['output']>;
  columns?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  is_card?: Maybe<Scalars['Int']['output']>;
  rich_text?: Maybe<Scalars['Int']['output']>;
  section_title?: Maybe<Scalars['Int']['output']>;
};

export type Sections_Aggregated_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
};

export type Sections_Columns = {
  columns_id?: Maybe<Columns>;
  id: Scalars['ID']['output'];
  sections_id?: Maybe<Sections>;
};


export type Sections_ColumnsColumns_IdArgs = {
  filter?: InputMaybe<Columns_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Sections_ColumnsSections_IdArgs = {
  filter?: InputMaybe<Sections_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Sections_Columns_Aggregated = {
  avg?: Maybe<Sections_Columns_Aggregated_Fields>;
  avgDistinct?: Maybe<Sections_Columns_Aggregated_Fields>;
  count?: Maybe<Sections_Columns_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Sections_Columns_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Sections_Columns_Aggregated_Fields>;
  min?: Maybe<Sections_Columns_Aggregated_Fields>;
  sum?: Maybe<Sections_Columns_Aggregated_Fields>;
  sumDistinct?: Maybe<Sections_Columns_Aggregated_Fields>;
};

export type Sections_Columns_Aggregated_Count = {
  columns_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  sections_id?: Maybe<Scalars['Int']['output']>;
};

export type Sections_Columns_Aggregated_Fields = {
  columns_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  sections_id?: Maybe<Scalars['Float']['output']>;
};

export type Sections_Columns_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Sections_Columns_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Sections_Columns_Filter>>>;
  columns_id?: InputMaybe<Columns_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  sections_id?: InputMaybe<Sections_Filter>;
};

export type Sections_Columns_Mutated = {
  data?: Maybe<Sections_Columns>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Sections_Columns_Quantifier_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Sections_Columns_Filter>>>;
  _none?: InputMaybe<Sections_Columns_Filter>;
  _or?: InputMaybe<Array<InputMaybe<Sections_Columns_Filter>>>;
  _some?: InputMaybe<Sections_Columns_Filter>;
  columns_id?: InputMaybe<Columns_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  sections_id?: InputMaybe<Sections_Filter>;
};

export type Sections_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Sections_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Sections_Filter>>>;
  column_count?: InputMaybe<String_Filter_Operators>;
  columns?: InputMaybe<Sections_Columns_Quantifier_Filter>;
  columns_func?: InputMaybe<Count_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  is_card?: InputMaybe<Boolean_Filter_Operators>;
  rich_text?: InputMaybe<String_Filter_Operators>;
  section_title?: InputMaybe<String_Filter_Operators>;
};

export type Sections_Mutated = {
  data?: Maybe<Sections>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Short_Urls = {
  id: Scalars['ID']['output'];
  link?: Maybe<Scalars['String']['output']>;
  /** DO NOT CHANGE THIS AFTER CREATION; */
  slug?: Maybe<Scalars['String']['output']>;
};

export type Short_Urls_Aggregated = {
  avg?: Maybe<Short_Urls_Aggregated_Fields>;
  avgDistinct?: Maybe<Short_Urls_Aggregated_Fields>;
  count?: Maybe<Short_Urls_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Short_Urls_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Short_Urls_Aggregated_Fields>;
  min?: Maybe<Short_Urls_Aggregated_Fields>;
  sum?: Maybe<Short_Urls_Aggregated_Fields>;
  sumDistinct?: Maybe<Short_Urls_Aggregated_Fields>;
};

export type Short_Urls_Aggregated_Count = {
  id?: Maybe<Scalars['Int']['output']>;
  link?: Maybe<Scalars['Int']['output']>;
  /** DO NOT CHANGE THIS AFTER CREATION; */
  slug?: Maybe<Scalars['Int']['output']>;
};

export type Short_Urls_Aggregated_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
};

export type Short_Urls_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Short_Urls_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Short_Urls_Filter>>>;
  id?: InputMaybe<Number_Filter_Operators>;
  link?: InputMaybe<String_Filter_Operators>;
  slug?: InputMaybe<String_Filter_Operators>;
};

export type Short_Urls_Mutated = {
  data?: Maybe<Short_Urls>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Staff_Directory = {
  description?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type Staff_Directory_Aggregated = {
  avg?: Maybe<Staff_Directory_Aggregated_Fields>;
  avgDistinct?: Maybe<Staff_Directory_Aggregated_Fields>;
  count?: Maybe<Staff_Directory_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Staff_Directory_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Staff_Directory_Aggregated_Fields>;
  min?: Maybe<Staff_Directory_Aggregated_Fields>;
  sum?: Maybe<Staff_Directory_Aggregated_Fields>;
  sumDistinct?: Maybe<Staff_Directory_Aggregated_Fields>;
};

export type Staff_Directory_Aggregated_Count = {
  description?: Maybe<Scalars['Int']['output']>;
  email?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
};

export type Staff_Directory_Aggregated_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
};

export type Staff_Directory_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Staff_Directory_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Staff_Directory_Filter>>>;
  description?: InputMaybe<String_Filter_Operators>;
  email?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
};

export type Staff_Directory_Mutated = {
  data?: Maybe<Staff_Directory>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type String_Filter_Operators = {
  _contains?: InputMaybe<Scalars['String']['input']>;
  _empty?: InputMaybe<Scalars['Boolean']['input']>;
  _ends_with?: InputMaybe<Scalars['String']['input']>;
  _eq?: InputMaybe<Scalars['String']['input']>;
  _icontains?: InputMaybe<Scalars['String']['input']>;
  _iends_with?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _istarts_with?: InputMaybe<Scalars['String']['input']>;
  _ncontains?: InputMaybe<Scalars['String']['input']>;
  _nempty?: InputMaybe<Scalars['Boolean']['input']>;
  _nends_with?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  _niends_with?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _nistarts_with?: InputMaybe<Scalars['String']['input']>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _nstarts_with?: InputMaybe<Scalars['String']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
  _starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type Tabbed_Pane = {
  course_key?: Maybe<Courses>;
  id: Scalars['ID']['output'];
  rich_text?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type Tabbed_PaneCourse_KeyArgs = {
  filter?: InputMaybe<Courses_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Tabbed_Pane_Aggregated = {
  avg?: Maybe<Tabbed_Pane_Aggregated_Fields>;
  avgDistinct?: Maybe<Tabbed_Pane_Aggregated_Fields>;
  count?: Maybe<Tabbed_Pane_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Tabbed_Pane_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Tabbed_Pane_Aggregated_Fields>;
  min?: Maybe<Tabbed_Pane_Aggregated_Fields>;
  sum?: Maybe<Tabbed_Pane_Aggregated_Fields>;
  sumDistinct?: Maybe<Tabbed_Pane_Aggregated_Fields>;
};

export type Tabbed_Pane_Aggregated_Count = {
  course_key?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  rich_text?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
};

export type Tabbed_Pane_Aggregated_Fields = {
  course_key?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Tabbed_Pane_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Tabbed_Pane_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Tabbed_Pane_Filter>>>;
  course_key?: InputMaybe<Courses_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  rich_text?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
};

export type Tabbed_Pane_Mutated = {
  data?: Maybe<Tabbed_Pane>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Tabbed_Pane_Quantifier_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Tabbed_Pane_Filter>>>;
  _none?: InputMaybe<Tabbed_Pane_Filter>;
  _or?: InputMaybe<Array<InputMaybe<Tabbed_Pane_Filter>>>;
  _some?: InputMaybe<Tabbed_Pane_Filter>;
  course_key?: InputMaybe<Courses_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  rich_text?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
};

export type Team_Members = {
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  photo?: Maybe<Directus_Files>;
  post?: Maybe<Scalars['String']['output']>;
  /** DO NOT CHANGE THIS AFTER CREATION; Auto generated; Enter if you want custom slug;  */
  slug?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
};


export type Team_MembersPhotoArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Team_Members_Aggregated = {
  avg?: Maybe<Team_Members_Aggregated_Fields>;
  avgDistinct?: Maybe<Team_Members_Aggregated_Fields>;
  count?: Maybe<Team_Members_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Team_Members_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Team_Members_Aggregated_Fields>;
  min?: Maybe<Team_Members_Aggregated_Fields>;
  sum?: Maybe<Team_Members_Aggregated_Fields>;
  sumDistinct?: Maybe<Team_Members_Aggregated_Fields>;
};

export type Team_Members_Aggregated_Count = {
  date_created?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  photo?: Maybe<Scalars['Int']['output']>;
  post?: Maybe<Scalars['Int']['output']>;
  /** DO NOT CHANGE THIS AFTER CREATION; Auto generated; Enter if you want custom slug;  */
  slug?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
};

export type Team_Members_Aggregated_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Team_Members_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Team_Members_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Team_Members_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  photo?: InputMaybe<Directus_Files_Filter>;
  post?: InputMaybe<String_Filter_Operators>;
  slug?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
};

export type Team_Members_Mutated = {
  data?: Maybe<Team_Members>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Understandng_Ai_Links = {
  id: Scalars['ID']['output'];
  redirect_url?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Understandng_Ai_Links_Aggregated = {
  avg?: Maybe<Understandng_Ai_Links_Aggregated_Fields>;
  avgDistinct?: Maybe<Understandng_Ai_Links_Aggregated_Fields>;
  count?: Maybe<Understandng_Ai_Links_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Understandng_Ai_Links_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Understandng_Ai_Links_Aggregated_Fields>;
  min?: Maybe<Understandng_Ai_Links_Aggregated_Fields>;
  sum?: Maybe<Understandng_Ai_Links_Aggregated_Fields>;
  sumDistinct?: Maybe<Understandng_Ai_Links_Aggregated_Fields>;
};

export type Understandng_Ai_Links_Aggregated_Count = {
  id?: Maybe<Scalars['Int']['output']>;
  redirect_url?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
};

export type Understandng_Ai_Links_Aggregated_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
};

export type Understandng_Ai_Links_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Understandng_Ai_Links_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Understandng_Ai_Links_Filter>>>;
  id?: InputMaybe<Number_Filter_Operators>;
  redirect_url?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
};

export type Understandng_Ai_Links_Mutated = {
  data?: Maybe<Understandng_Ai_Links>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Useful_Links = {
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Directus_Files>;
  id: Scalars['ID']['output'];
  is_archived?: Maybe<Scalars['Boolean']['output']>;
  redirect_url?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type Useful_LinksIconArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Useful_Links_Aggregated = {
  avg?: Maybe<Useful_Links_Aggregated_Fields>;
  avgDistinct?: Maybe<Useful_Links_Aggregated_Fields>;
  count?: Maybe<Useful_Links_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Useful_Links_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Useful_Links_Aggregated_Fields>;
  min?: Maybe<Useful_Links_Aggregated_Fields>;
  sum?: Maybe<Useful_Links_Aggregated_Fields>;
  sumDistinct?: Maybe<Useful_Links_Aggregated_Fields>;
};

export type Useful_Links_Aggregated_Count = {
  description?: Maybe<Scalars['Int']['output']>;
  icon?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  is_archived?: Maybe<Scalars['Int']['output']>;
  redirect_url?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
};

export type Useful_Links_Aggregated_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Useful_Links_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Useful_Links_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Useful_Links_Filter>>>;
  description?: InputMaybe<String_Filter_Operators>;
  icon?: InputMaybe<Directus_Files_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  is_archived?: InputMaybe<Boolean_Filter_Operators>;
  redirect_url?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
};

export type Useful_Links_Mutated = {
  data?: Maybe<Useful_Links>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Version_About_Us_Page = {
  about_us_content?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  page_notes?: Maybe<Scalars['String']['output']>;
  slider_items?: Maybe<Scalars['JSON']['output']>;
  slider_items_func?: Maybe<Count_Functions>;
};

export type Version_Active_Agents = {
  account_name?: Maybe<Scalars['String']['output']>;
  address?: Maybe<Scalars['String']['output']>;
  agency_stage?: Maybe<Scalars['String']['output']>;
  agent_name?: Maybe<Scalars['String']['output']>;
  created_date?: Maybe<Scalars['Date']['output']>;
  created_date_func?: Maybe<Datetime_Functions>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  review_link?: Maybe<Scalars['String']['output']>;
  zoho_id?: Maybe<Scalars['String']['output']>;
};

export type Version_Announcements = {
  announcement_text?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type Version_Blog = {
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  description?: Maybe<Scalars['String']['output']>;
  hero_image?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  rich_text?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  /** DO NOT CHANGE THIS AFTER CREATION; Auto generated; Enter if you want custom slug;  */
  sort?: Maybe<Scalars['Int']['output']>;
  tags?: Maybe<Scalars['JSON']['output']>;
  tags_func?: Maybe<Count_Functions>;
  title?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
};

export type Version_Campus_Locations = {
  address?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['JSON']['output']>;
  location_badge?: Maybe<Scalars['String']['output']>;
  location_url?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  website?: Maybe<Scalars['String']['output']>;
};

export type Version_Columns = {
  button_label?: Maybe<Scalars['String']['output']>;
  button_url?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['JSON']['output']>;
  is_card?: Maybe<Scalars['Boolean']['output']>;
  open_in_new_tab?: Maybe<Scalars['Boolean']['output']>;
  parent?: Maybe<Scalars['JSON']['output']>;
  rich_text?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Version_Courses = {
  course_code?: Maybe<Scalars['String']['output']>;
  course_structure?: Maybe<Scalars['JSON']['output']>;
  course_structure_func?: Maybe<Count_Functions>;
  degree?: Maybe<Scalars['JSON']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  hero_image?: Maybe<Scalars['JSON']['output']>;
  icon_string?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  program_details?: Maybe<Scalars['JSON']['output']>;
  program_details_func?: Maybe<Count_Functions>;
  /** DO NOT CHANGE THIS AFTER CREATION; Auto generated; Enter if you want custom slug;  */
  slug: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type Version_Degree = {
  course_code?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  learning_outcomes?: Maybe<Scalars['String']['output']>;
  short_title?: Maybe<Scalars['String']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Version_Events = {
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  end_datetime?: Maybe<Scalars['Date']['output']>;
  end_datetime_func?: Maybe<Datetime_Functions>;
  hero_image?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  rich_text?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  start_datetime?: Maybe<Scalars['Date']['output']>;
  start_datetime_func?: Maybe<Datetime_Functions>;
  status?: Maybe<Scalars['String']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Scalars['JSON']['output']>;
  tags_func?: Maybe<Count_Functions>;
  title?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
};

export type Version_Explore_Churchill = {
  id: Scalars['ID']['output'];
  section_title?: Maybe<Scalars['String']['output']>;
  videos?: Maybe<Scalars['JSON']['output']>;
  videos_func?: Maybe<Count_Functions>;
};

export type Version_Explore_Churchill_Files = {
  directus_files_id?: Maybe<Scalars['JSON']['output']>;
  explore_churchill_id?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
};

export type Version_Faqs = {
  id: Scalars['ID']['output'];
  rich_text?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Version_Files = {
  description?: Maybe<Scalars['String']['output']>;
  file?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Version_Governance_Structure = {
  governance_structure_membership?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  organisational_chart?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Holiday_Popup = {
  dates?: Maybe<Scalars['JSON']['output']>;
  dates_func?: Maybe<Count_Functions>;
  id: Scalars['ID']['output'];
  note?: Maybe<Scalars['String']['output']>;
  show_popup?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Version_How_To_Guide = {
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['JSON']['output']>;
  rich_text?: Maybe<Scalars['String']['output']>;
  /** DO NOT CHANGE THIS AFTER CREATION; Auto generated; Enter if you want custom slug;  */
  slug?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Version_Image_Gallery = {
  id: Scalars['ID']['output'];
  images?: Maybe<Scalars['JSON']['output']>;
  images_func?: Maybe<Count_Functions>;
};

export type Version_Image_Gallery_Files = {
  directus_files_id?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  image_gallery_id?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Induction_Agents = {
  account_name?: Maybe<Scalars['String']['output']>;
  address?: Maybe<Scalars['String']['output']>;
  agency_stage?: Maybe<Scalars['String']['output']>;
  agent_name?: Maybe<Scalars['String']['output']>;
  created_date?: Maybe<Scalars['Date']['output']>;
  created_date_func?: Maybe<Datetime_Functions>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  review_link?: Maybe<Scalars['String']['output']>;
  zoho_id?: Maybe<Scalars['String']['output']>;
};

export type Version_Info_Item = {
  course_key?: Maybe<Scalars['JSON']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  label?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
};

export type Version_Key_Dates = {
  description?: Maybe<Scalars['String']['output']>;
  end_date?: Maybe<Scalars['Date']['output']>;
  end_date_func?: Maybe<Date_Functions>;
  id: Scalars['ID']['output'];
  is_highlighted?: Maybe<Scalars['Boolean']['output']>;
  start_date?: Maybe<Scalars['Date']['output']>;
  start_date_func?: Maybe<Date_Functions>;
  status?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Scalars['JSON']['output']>;
  tags_func?: Maybe<Count_Functions>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Version_Login_Links = {
  id: Scalars['ID']['output'];
  links?: Maybe<Scalars['JSON']['output']>;
  links_func?: Maybe<Count_Functions>;
};

export type Version_Marketing_Kit = {
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  link?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Version_News = {
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['JSON']['output']>;
  rich_text?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Scalars['JSON']['output']>;
  tags_func?: Maybe<Count_Functions>;
  title?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
};

export type Version_Pages = {
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Dictates where the page will be shown; If about us is selected- the page will show in /about-us/{entered-slug}  */
  parent_directory?: Maybe<Scalars['String']['output']>;
  sections?: Maybe<Scalars['JSON']['output']>;
  sections_func?: Maybe<Count_Functions>;
  /** DO NOT CHANGE THIS AFTER CREATION; Auto generated; Enter if you want custom slug;  */
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  view_title_in_banner?: Maybe<Scalars['Boolean']['output']>;
};

export type Version_Pages_Sections = {
  id: Scalars['ID']['output'];
  pages_id?: Maybe<Scalars['JSON']['output']>;
  sections_id?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Policies = {
  description?: Maybe<Scalars['String']['output']>;
  file?: Maybe<Scalars['JSON']['output']>;
  icon_string?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** DO NOT CHANGE THIS AFTER CREATION; Auto generated; Enter if you want custom slug;  */
  slug?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Version_Quick_Links = {
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  link?: Maybe<Scalars['String']['output']>;
  redirect?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Version_Request_Form = {
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  description?: Maybe<Scalars['String']['output']>;
  icon_string?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  redirect_url?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Version_Sections = {
  column_count?: Maybe<Scalars['String']['output']>;
  columns?: Maybe<Scalars['JSON']['output']>;
  columns_func?: Maybe<Count_Functions>;
  id: Scalars['ID']['output'];
  is_card?: Maybe<Scalars['Boolean']['output']>;
  rich_text?: Maybe<Scalars['String']['output']>;
  section_title?: Maybe<Scalars['String']['output']>;
};

export type Version_Sections_Columns = {
  columns_id?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  sections_id?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Short_Urls = {
  id: Scalars['ID']['output'];
  link?: Maybe<Scalars['String']['output']>;
  /** DO NOT CHANGE THIS AFTER CREATION; */
  slug?: Maybe<Scalars['String']['output']>;
};

export type Version_Staff_Directory = {
  description?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type Version_Tabbed_Pane = {
  course_key?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  rich_text?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Version_Team_Members = {
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  photo?: Maybe<Scalars['JSON']['output']>;
  post?: Maybe<Scalars['String']['output']>;
  /** DO NOT CHANGE THIS AFTER CREATION; Auto generated; Enter if you want custom slug;  */
  slug?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
};

export type Version_Understandng_Ai_Links = {
  id: Scalars['ID']['output'];
  redirect_url?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Version_Useful_Links = {
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  is_archived?: Maybe<Scalars['Boolean']['output']>;
  redirect_url?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type BlogFieldsFragment = { slug: string, title?: string | null, description?: string | null, date_created?: any | null, hero_image?: { id: string, filename_download: string } | null };

export type CourseCoreFieldsFragment = { slug: string, title?: string | null, icon_string?: string | null };

export type CourseSummaryFieldsFragment = { description?: string | null, slug: string, title?: string | null, icon_string?: string | null, hero_image?: { id: string, filename_download: string } | null, degree?: { title?: string | null, short_title?: string | null, course_code?: string | null, description?: string | null } | null };

export type CourseListFieldsFragment = { description?: string | null, slug: string, title?: string | null, icon_string?: string | null, program_details?: Array<{ sort?: number | null, icon?: string | null, label?: string | null, description?: string | null } | null> | null, hero_image?: { id: string, filename_download: string } | null, degree?: { title?: string | null, short_title?: string | null, course_code?: string | null, description?: string | null } | null };

export type CourseDetailFieldsFragment = { description?: string | null, slug: string, title?: string | null, icon_string?: string | null, course_structure?: Array<{ title?: string | null, rich_text?: string | null } | null> | null, program_details?: Array<{ sort?: number | null, icon?: string | null, label?: string | null, description?: string | null } | null> | null, hero_image?: { id: string, filename_download: string } | null, degree?: { title?: string | null, short_title?: string | null, course_code?: string | null, description?: string | null } | null };

export type ColumnFieldsFragment = { columns_id?: { title?: string | null, description?: string | null, rich_text?: string | null, button_url?: string | null, button_label?: string | null, open_in_new_tab?: boolean | null, is_card?: boolean | null, image?: { id: string, filename_download: string } | null } | null };

export type SectionFieldsFragment = { sections_id?: { section_title?: string | null, rich_text?: string | null, column_count?: string | null, is_card?: boolean | null, columns?: Array<{ columns_id?: { title?: string | null, description?: string | null, rich_text?: string | null, button_url?: string | null, button_label?: string | null, open_in_new_tab?: boolean | null, is_card?: boolean | null, image?: { id: string, filename_download: string } | null } | null } | null> | null } | null };

export type DegreeFieldsFragment = { title?: string | null, short_title?: string | null, course_code?: string | null, summary?: string | null, learning_outcomes?: string | null };

export type DegreeCompactFieldsFragment = { title?: string | null, short_title?: string | null, course_code?: string | null, description?: string | null };

export type FileFieldsFragment = { id: string, filename_download: string };

export type KeyDatesFieldsFragment = { id: string, title?: string | null, start_date?: any | null, end_date?: any | null, tags?: any | null };

export type TeamMemberSummaryFieldsFragment = { slug?: string | null, name?: string | null, post?: string | null, description?: string | null, photo?: { id: string, filename_download: string } | null };

export type TeamMemberDetailFieldsFragment = { slug?: string | null, name?: string | null, post?: string | null, description?: string | null, photo?: { id: string, filename_download: string } | null };

export type AboutUsPageQueryVariables = Exact<{ [key: string]: never; }>;


export type AboutUsPageQuery = { about_us_page?: { about_us_content?: string | null, slider_items?: any | null, page_notes?: string | null } | null };

export type AgentQueryVariables = Exact<{ [key: string]: never; }>;


export type AgentQuery = { active_agents: Array<{ name?: string | null, phone?: string | null, email?: string | null, agent_name?: string | null, address?: string | null, zoho_id?: string | null, account_name?: string | null }> };

export type AgentFieldsFragment = { name?: string | null, phone?: string | null, email?: string | null, agent_name?: string | null, address?: string | null, zoho_id?: string | null, account_name?: string | null };

export type BlogDetailQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type BlogDetailQuery = { blog: Array<{ rich_text?: string | null, slug: string, title?: string | null, description?: string | null, date_created?: any | null, hero_image?: { id: string, filename_download: string } | null }>, otherBlogs: Array<{ slug: string, title?: string | null, description?: string | null, date_created?: any | null, hero_image?: { id: string, filename_download: string } | null }> };

export type BlogPageQueryVariables = Exact<{ [key: string]: never; }>;


export type BlogPageQuery = { blog: Array<{ slug: string, title?: string | null, description?: string | null, date_created?: any | null, hero_image?: { id: string, filename_download: string } | null }> };

export type CampusQueryVariables = Exact<{ [key: string]: never; }>;


export type CampusQuery = { campus_locations: Array<{ title?: string | null, summary?: string | null, address?: string | null, website?: string | null, phone?: string | null, email?: string | null, location_url?: string | null, location_badge?: string | null, image?: { id: string, filename_download: string } | null }> };

export type CoursePageQueryVariables = Exact<{ [key: string]: never; }>;


export type CoursePageQuery = { degree: Array<{ title?: string | null, short_title?: string | null, course_code?: string | null, summary?: string | null, learning_outcomes?: string | null }>, courses: Array<{ description?: string | null, slug: string, title?: string | null, icon_string?: string | null, course_structure?: Array<{ title?: string | null, rich_text?: string | null } | null> | null, program_details?: Array<{ sort?: number | null, icon?: string | null, label?: string | null, description?: string | null } | null> | null, hero_image?: { id: string, filename_download: string } | null, degree?: { title?: string | null, short_title?: string | null, course_code?: string | null, description?: string | null } | null }> };

export type CourseDetailQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type CourseDetailQuery = { courses: Array<{ description?: string | null, slug: string, title?: string | null, icon_string?: string | null, course_structure?: Array<{ title?: string | null, rich_text?: string | null } | null> | null, program_details?: Array<{ sort?: number | null, icon?: string | null, label?: string | null, description?: string | null } | null> | null, hero_image?: { id: string, filename_download: string } | null, degree?: { title?: string | null, short_title?: string | null, course_code?: string | null, description?: string | null } | null }>, otherCourses: Array<{ description?: string | null, slug: string, title?: string | null, icon_string?: string | null, hero_image?: { id: string, filename_download: string } | null, degree?: { title?: string | null, short_title?: string | null, course_code?: string | null, description?: string | null } | null }> };

export type CustomPageQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  parent: Scalars['String']['input'];
}>;


export type CustomPageQuery = { pages: Array<{ view_title_in_banner?: boolean | null, slug?: string | null, title?: string | null, description?: string | null, sections?: Array<{ sections_id?: { section_title?: string | null, rich_text?: string | null, column_count?: string | null, is_card?: boolean | null, columns?: Array<{ columns_id?: { title?: string | null, description?: string | null, rich_text?: string | null, button_url?: string | null, button_label?: string | null, open_in_new_tab?: boolean | null, is_card?: boolean | null, image?: { id: string, filename_download: string } | null } | null } | null> | null } | null } | null> | null }> };

export type FaqPageQueryVariables = Exact<{ [key: string]: never; }>;


export type FaqPageQuery = { faqs: Array<{ title?: string | null, rich_text?: string | null }> };

export type FileItemFragment = { slug?: string | null, title?: string | null, file?: { id: string, filename_download: string } | null };

export type PolicyItemFragment = { slug?: string | null, title?: string | null, file?: { id: string, filename_download: string } | null };

export type FilesQueryVariables = Exact<{ [key: string]: never; }>;


export type FilesQuery = { files: Array<{ slug?: string | null, title?: string | null, file?: { id: string, filename_download: string } | null }>, policies: Array<{ slug?: string | null, title?: string | null, file?: { id: string, filename_download: string } | null }> };

export type FileBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type FileBySlugQuery = { files: Array<{ slug?: string | null, title?: string | null, file?: { id: string, filename_download: string } | null }>, policies: Array<{ slug?: string | null, title?: string | null, file?: { id: string, filename_download: string } | null }> };

export type GalleryQueryVariables = Exact<{ [key: string]: never; }>;


export type GalleryQuery = { image_gallery?: { images?: Array<{ directus_files_id?: { id: string, filename_download: string } | null } | null> | null } | null };

export type GovernanceStructureQueryVariables = Exact<{ [key: string]: never; }>;


export type GovernanceStructureQuery = { governance_structure?: { governance_structure_membership?: { id: string, filename_download: string } | null, organisational_chart?: { id: string, filename_download: string } | null } | null };

export type HeaderQueryVariables = Exact<{ [key: string]: never; }>;


export type HeaderQuery = { courses: Array<{ slug: string, title?: string | null, icon_string?: string | null }>, announcements?: { announcement_text?: string | null } | null, login_links?: { links?: any | null } | null };

export type HomepageQueryVariables = Exact<{ [key: string]: never; }>;


export type HomepageQuery = { degree: Array<{ title?: string | null, short_title?: string | null, course_code?: string | null, description?: string | null }>, courses: Array<{ description?: string | null, slug: string, title?: string | null, icon_string?: string | null, hero_image?: { id: string, filename_download: string } | null, degree?: { title?: string | null, short_title?: string | null, course_code?: string | null, description?: string | null } | null }>, key_dates: Array<{ id: string, title?: string | null, start_date?: any | null, end_date?: any | null, tags?: any | null }>, Highlighted: Array<{ id: string, title?: string | null, start_date?: any | null, end_date?: any | null, tags?: any | null }>, blog: Array<{ slug: string, title?: string | null, description?: string | null, date_created?: any | null, hero_image?: { id: string, filename_download: string } | null }>, explore_churchill?: { section_title?: string | null, videos?: Array<{ directus_files_id?: { id: string, filename_download: string } | null } | null> | null } | null };

export type RedirectQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type RedirectQuery = { short_urls: Array<{ slug?: string | null, link?: string | null }> };

export type TeamMemberDetailQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type TeamMemberDetailQuery = { team_members: Array<{ slug?: string | null, name?: string | null, post?: string | null, description?: string | null, photo?: { id: string, filename_download: string } | null }> };

export type TeamMembersQueryVariables = Exact<{ [key: string]: never; }>;


export type TeamMembersQuery = { team_members: Array<{ slug?: string | null, name?: string | null, post?: string | null, description?: string | null, photo?: { id: string, filename_download: string } | null }> };

export type HolidayPopupQueryVariables = Exact<{ [key: string]: never; }>;


export type HolidayPopupQuery = { holiday_popup?: { show_popup?: boolean | null, title?: string | null, dates?: any | null, note?: string | null } | null };

export const FileFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FileFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"directus_files"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"filename_download"}}]}}]} as unknown as DocumentNode<FileFieldsFragment, unknown>;
export const BlogFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlogFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"blog"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"date_created"}},{"kind":"Field","name":{"kind":"Name","value":"hero_image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FileFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FileFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"directus_files"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"filename_download"}}]}}]} as unknown as DocumentNode<BlogFieldsFragment, unknown>;
export const CourseCoreFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseCoreFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"courses"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"icon_string"}}]}}]} as unknown as DocumentNode<CourseCoreFieldsFragment, unknown>;
export const DegreeCompactFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DegreeCompactFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"degree"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"short_title"}},{"kind":"Field","name":{"kind":"Name","value":"course_code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]} as unknown as DocumentNode<DegreeCompactFieldsFragment, unknown>;
export const CourseSummaryFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseSummaryFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"courses"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CourseCoreFields"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"hero_image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FileFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"degree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DegreeCompactFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseCoreFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"courses"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"icon_string"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FileFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"directus_files"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"filename_download"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DegreeCompactFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"degree"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"short_title"}},{"kind":"Field","name":{"kind":"Name","value":"course_code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]} as unknown as DocumentNode<CourseSummaryFieldsFragment, unknown>;
export const CourseListFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseListFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"courses"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CourseSummaryFields"}},{"kind":"Field","name":{"kind":"Name","value":"program_details"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sort"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseCoreFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"courses"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"icon_string"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FileFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"directus_files"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"filename_download"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DegreeCompactFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"degree"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"short_title"}},{"kind":"Field","name":{"kind":"Name","value":"course_code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseSummaryFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"courses"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CourseCoreFields"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"hero_image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FileFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"degree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DegreeCompactFields"}}]}}]}}]} as unknown as DocumentNode<CourseListFieldsFragment, unknown>;
export const CourseDetailFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseDetailFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"courses"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CourseListFields"}},{"kind":"Field","name":{"kind":"Name","value":"course_structure"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"rich_text"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseCoreFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"courses"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"icon_string"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FileFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"directus_files"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"filename_download"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DegreeCompactFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"degree"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"short_title"}},{"kind":"Field","name":{"kind":"Name","value":"course_code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseSummaryFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"courses"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CourseCoreFields"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"hero_image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FileFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"degree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DegreeCompactFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseListFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"courses"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CourseSummaryFields"}},{"kind":"Field","name":{"kind":"Name","value":"program_details"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sort"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<CourseDetailFieldsFragment, unknown>;
export const ColumnFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ColumnFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"sections_columns"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"columns_id"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FileFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"rich_text"}},{"kind":"Field","name":{"kind":"Name","value":"button_url"}},{"kind":"Field","name":{"kind":"Name","value":"button_label"}},{"kind":"Field","name":{"kind":"Name","value":"open_in_new_tab"}},{"kind":"Field","name":{"kind":"Name","value":"is_card"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FileFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"directus_files"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"filename_download"}}]}}]} as unknown as DocumentNode<ColumnFieldsFragment, unknown>;
export const SectionFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SectionFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pages_sections"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sections_id"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"section_title"}},{"kind":"Field","name":{"kind":"Name","value":"rich_text"}},{"kind":"Field","name":{"kind":"Name","value":"column_count"}},{"kind":"Field","name":{"kind":"Name","value":"is_card"}},{"kind":"Field","name":{"kind":"Name","value":"columns"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ColumnFields"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FileFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"directus_files"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"filename_download"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ColumnFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"sections_columns"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"columns_id"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FileFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"rich_text"}},{"kind":"Field","name":{"kind":"Name","value":"button_url"}},{"kind":"Field","name":{"kind":"Name","value":"button_label"}},{"kind":"Field","name":{"kind":"Name","value":"open_in_new_tab"}},{"kind":"Field","name":{"kind":"Name","value":"is_card"}}]}}]}}]} as unknown as DocumentNode<SectionFieldsFragment, unknown>;
export const DegreeFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DegreeFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"degree"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"short_title"}},{"kind":"Field","name":{"kind":"Name","value":"course_code"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"learning_outcomes"}}]}}]} as unknown as DocumentNode<DegreeFieldsFragment, unknown>;
export const KeyDatesFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"KeyDatesFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"key_dates"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"end_date"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}}]}}]} as unknown as DocumentNode<KeyDatesFieldsFragment, unknown>;
export const TeamMemberSummaryFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeamMemberSummaryFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"team_members"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"post"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FileFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FileFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"directus_files"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"filename_download"}}]}}]} as unknown as DocumentNode<TeamMemberSummaryFieldsFragment, unknown>;
export const TeamMemberDetailFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeamMemberDetailFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"team_members"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TeamMemberSummaryFields"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FileFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"directus_files"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"filename_download"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeamMemberSummaryFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"team_members"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"post"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FileFields"}}]}}]}}]} as unknown as DocumentNode<TeamMemberDetailFieldsFragment, unknown>;
export const AgentFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AgentFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"active_agents"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"agent_name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"zoho_id"}},{"kind":"Field","name":{"kind":"Name","value":"account_name"}}]}}]} as unknown as DocumentNode<AgentFieldsFragment, unknown>;
export const FileItemFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FileItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"files"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FileFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FileFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"directus_files"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"filename_download"}}]}}]} as unknown as DocumentNode<FileItemFragment, unknown>;
export const PolicyItemFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PolicyItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"policies"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FileFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FileFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"directus_files"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"filename_download"}}]}}]} as unknown as DocumentNode<PolicyItemFragment, unknown>;
export const AboutUsPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AboutUsPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"about_us_page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"about_us_content"}},{"kind":"Field","name":{"kind":"Name","value":"slider_items"}},{"kind":"Field","name":{"kind":"Name","value":"page_notes"}}]}}]}}]} as unknown as DocumentNode<AboutUsPageQuery, AboutUsPageQueryVariables>;
export const AgentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Agent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"active_agents"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AgentFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AgentFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"active_agents"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"agent_name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"zoho_id"}},{"kind":"Field","name":{"kind":"Name","value":"account_name"}}]}}]} as unknown as DocumentNode<AgentQuery, AgentQueryVariables>;
export const BlogDetailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"BlogDetail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blog"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlogFields"}},{"kind":"Field","name":{"kind":"Name","value":"rich_text"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"otherBlogs"},"name":{"kind":"Name","value":"blog"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_neq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"3"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlogFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FileFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"directus_files"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"filename_download"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlogFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"blog"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"date_created"}},{"kind":"Field","name":{"kind":"Name","value":"hero_image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FileFields"}}]}}]}}]} as unknown as DocumentNode<BlogDetailQuery, BlogDetailQueryVariables>;
export const BlogPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"BlogPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blog"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"StringValue","value":"date_created","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlogFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FileFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"directus_files"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"filename_download"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlogFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"blog"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"date_created"}},{"kind":"Field","name":{"kind":"Name","value":"hero_image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FileFields"}}]}}]}}]} as unknown as DocumentNode<BlogPageQuery, BlogPageQueryVariables>;
export const CampusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Campus"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"campus_locations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"filename_download"}}]}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"website"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"location_url"}},{"kind":"Field","name":{"kind":"Name","value":"location_badge"}}]}}]}}]} as unknown as DocumentNode<CampusQuery, CampusQueryVariables>;
export const CoursePageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CoursePage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"degree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DegreeFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"courses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CourseDetailFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseCoreFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"courses"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"icon_string"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FileFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"directus_files"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"filename_download"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DegreeCompactFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"degree"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"short_title"}},{"kind":"Field","name":{"kind":"Name","value":"course_code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseSummaryFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"courses"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CourseCoreFields"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"hero_image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FileFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"degree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DegreeCompactFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseListFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"courses"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CourseSummaryFields"}},{"kind":"Field","name":{"kind":"Name","value":"program_details"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sort"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DegreeFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"degree"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"short_title"}},{"kind":"Field","name":{"kind":"Name","value":"course_code"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"learning_outcomes"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseDetailFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"courses"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CourseListFields"}},{"kind":"Field","name":{"kind":"Name","value":"course_structure"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"rich_text"}}]}}]}}]} as unknown as DocumentNode<CoursePageQuery, CoursePageQueryVariables>;
export const CourseDetailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CourseDetail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"courses"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CourseDetailFields"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"otherCourses"},"name":{"kind":"Name","value":"courses"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_neq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CourseSummaryFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseCoreFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"courses"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"icon_string"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FileFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"directus_files"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"filename_download"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DegreeCompactFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"degree"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"short_title"}},{"kind":"Field","name":{"kind":"Name","value":"course_code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseSummaryFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"courses"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CourseCoreFields"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"hero_image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FileFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"degree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DegreeCompactFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseListFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"courses"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CourseSummaryFields"}},{"kind":"Field","name":{"kind":"Name","value":"program_details"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sort"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseDetailFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"courses"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CourseListFields"}},{"kind":"Field","name":{"kind":"Name","value":"course_structure"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"rich_text"}}]}}]}}]} as unknown as DocumentNode<CourseDetailQuery, CourseDetailQueryVariables>;
export const CustomPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CustomPage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"parent"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"parent_directory"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"parent"}}}]}}]}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"view_title_in_banner"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"sections"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SectionFields"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FileFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"directus_files"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"filename_download"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ColumnFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"sections_columns"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"columns_id"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FileFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"rich_text"}},{"kind":"Field","name":{"kind":"Name","value":"button_url"}},{"kind":"Field","name":{"kind":"Name","value":"button_label"}},{"kind":"Field","name":{"kind":"Name","value":"open_in_new_tab"}},{"kind":"Field","name":{"kind":"Name","value":"is_card"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SectionFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pages_sections"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sections_id"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"section_title"}},{"kind":"Field","name":{"kind":"Name","value":"rich_text"}},{"kind":"Field","name":{"kind":"Name","value":"column_count"}},{"kind":"Field","name":{"kind":"Name","value":"is_card"}},{"kind":"Field","name":{"kind":"Name","value":"columns"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ColumnFields"}}]}}]}}]}}]} as unknown as DocumentNode<CustomPageQuery, CustomPageQueryVariables>;
export const FaqPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FaqPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"faqs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"rich_text"}}]}}]}}]} as unknown as DocumentNode<FaqPageQuery, FaqPageQueryVariables>;
export const FilesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Files"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"files"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FileItem"}}]}},{"kind":"Field","name":{"kind":"Name","value":"policies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PolicyItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FileFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"directus_files"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"filename_download"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FileItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"files"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FileFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PolicyItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"policies"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FileFields"}}]}}]}}]} as unknown as DocumentNode<FilesQuery, FilesQueryVariables>;
export const FileBySlugDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FileBySlug"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"files"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FileItem"}}]}},{"kind":"Field","name":{"kind":"Name","value":"policies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PolicyItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FileFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"directus_files"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"filename_download"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FileItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"files"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FileFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PolicyItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"policies"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FileFields"}}]}}]}}]} as unknown as DocumentNode<FileBySlugQuery, FileBySlugQueryVariables>;
export const GalleryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Gallery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image_gallery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"directus_files_id"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"filename_download"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GalleryQuery, GalleryQueryVariables>;
export const GovernanceStructureDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GovernanceStructure"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"governance_structure"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"governance_structure_membership"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FileFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"organisational_chart"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FileFields"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FileFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"directus_files"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"filename_download"}}]}}]} as unknown as DocumentNode<GovernanceStructureQuery, GovernanceStructureQueryVariables>;
export const HeaderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Header"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"courses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CourseCoreFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"announcements"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"announcement_text"}}]}},{"kind":"Field","name":{"kind":"Name","value":"login_links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"links"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseCoreFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"courses"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"icon_string"}}]}}]} as unknown as DocumentNode<HeaderQuery, HeaderQueryVariables>;
export const HomepageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Homepage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"degree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DegreeCompactFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"courses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CourseSummaryFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"key_dates"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"start_date","block":false}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"KeyDatesFields"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"Highlighted"},"name":{"kind":"Name","value":"key_dates"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_highlighted"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"start_date","block":false}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"KeyDatesFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"blog"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"3"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlogFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"explore_churchill"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"section_title"}},{"kind":"Field","name":{"kind":"Name","value":"videos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"directus_files_id"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"filename_download"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseCoreFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"courses"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"icon_string"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FileFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"directus_files"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"filename_download"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DegreeCompactFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"degree"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"short_title"}},{"kind":"Field","name":{"kind":"Name","value":"course_code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseSummaryFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"courses"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CourseCoreFields"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"hero_image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FileFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"degree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DegreeCompactFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"KeyDatesFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"key_dates"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"end_date"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlogFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"blog"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"date_created"}},{"kind":"Field","name":{"kind":"Name","value":"hero_image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FileFields"}}]}}]}}]} as unknown as DocumentNode<HomepageQuery, HomepageQueryVariables>;
export const RedirectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Redirect"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"short_urls"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"link"}}]}}]}}]} as unknown as DocumentNode<RedirectQuery, RedirectQueryVariables>;
export const TeamMemberDetailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TeamMemberDetail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"team_members"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TeamMemberDetailFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FileFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"directus_files"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"filename_download"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeamMemberSummaryFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"team_members"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"post"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FileFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeamMemberDetailFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"team_members"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TeamMemberSummaryFields"}}]}}]} as unknown as DocumentNode<TeamMemberDetailQuery, TeamMemberDetailQueryVariables>;
export const TeamMembersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TeamMembers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"team_members"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TeamMemberSummaryFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FileFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"directus_files"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"filename_download"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeamMemberSummaryFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"team_members"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"post"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FileFields"}}]}}]}}]} as unknown as DocumentNode<TeamMembersQuery, TeamMembersQueryVariables>;
export const HolidayPopupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"HolidayPopup"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"holiday_popup"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"show_popup"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"dates"}},{"kind":"Field","name":{"kind":"Name","value":"note"}}]}}]}}]} as unknown as DocumentNode<HolidayPopupQuery, HolidayPopupQueryVariables>;