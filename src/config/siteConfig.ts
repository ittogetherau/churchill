"use client";

export const siteConfig = {
  churchillUrl: process.env.NEXT_PUBLIC_CHURCHILL_URL || "",
  studentHubUrl: process.env.NEXT_PUBLIC_CHURCHILL_STUDENT_HUB_URL || "",
  agentHubUrl: process.env.NEXT_PUBLIC_CHURCHILL_AGENT_HUB_URL || "",
};

export type SiteConfig = typeof siteConfig;
