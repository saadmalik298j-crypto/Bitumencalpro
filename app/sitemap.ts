import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://bitumencalcpro.com";
  const lastMod = "2026-10-09T00:00:00.000Z";

  const routes = [
    "",
    "/asphalt-tonnage-calculator",
    "/asphalt-driveway-cost-calculator",
    "/tack-coat-calculator",
    "/asphalt-millings-calculator",
    "/bitumen-tank-volume-calculator",
    "/blog",
    "/blog/what-is-bitumen",
    "/blog/bitumen-grades-explained",
    "/blog/bitumen-density-chart",
    "/blog/bitumen-emulsion-explained",
    "/blog/cold-mix-bitumen",
    "/blog/modified-bitumen-roofing",
    "/blog/tpo-vs-modified-bitumen",
    "/blog/asphalt-thickness",
    "/blog/asphalt-estimation-mistakes",
    "/blog/modified-bitumen-roof-repair",
    "/blog/bitumen-driveway-cost-worldwide",
    "/blog/asphalt-vs-bitumen",
    "/blog/asphalt-vs-concrete",
    "/blog/bitumen-paint",
    "/blog/bitumen-quality-tests",
    "/blog/how-is-bitumen-transported",
    "/blog/how-to-pronounce-bitumen",
    "/blog/how-to-remove-bitumen",
    "/blog/how-to-remove-oil-stains-asphalt-driveway",
    "/blog/asphalt-driveway-sealcoating",
    "/about-us",
    "/contact-us",
    "/privacy-policy",
    "/terms-and-conditions",
    "/disclaimer",
    "/dmca",
  ];

  return routes.map((route) => {
    let priority = 0.8;
    let changeFrequency: "daily" | "weekly" | "monthly" = "monthly";

    if (route === "") {
      priority = 1.0;
      changeFrequency = "daily";
    } else if (route.includes("-calculator")) {
      priority = 0.95;
      changeFrequency = "weekly";
    } else if (route === "/blog") {
      priority = 0.9;
      changeFrequency = "daily";
    } else if (route.startsWith("/blog/")) {
      priority = 0.85;
      changeFrequency = "weekly";
    } else {
      priority = 0.5;
      changeFrequency = "monthly";
    }

    return {
      url: `${baseUrl}${route}`,
      lastModified: lastMod,
      changeFrequency,
      priority,
    };
  });
}
