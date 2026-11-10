import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = "https://remotestaff365.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${base}/sitemap.xml`,
  };
}
