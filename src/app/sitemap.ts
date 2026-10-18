import type { MetadataRoute } from "next";
import { siteUrl } from "../config/site";
import projectsJSON from "../resources/projects.json";

const staticPages: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/productions", priority: 0.9 },
  { path: "/shortform", priority: 0.8 },
  { path: "/about", priority: 0.7 },
  { path: "/contact", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = staticPages.map(({ path, priority }) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: "monthly",
    priority,
  }));

  const productions: MetadataRoute.Sitemap = projectsJSON.projects.map(
    (project: WorkItemProps) => ({
      url: `${siteUrl}/productions/${project.route}`,
      changeFrequency: "yearly",
      priority: 0.6,
    }),
  );

  return [...pages, ...productions];
}
