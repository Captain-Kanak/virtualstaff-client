import { chromium } from "playwright";

const ROUTES = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  { path: "/how-it-works", name: "How It Works" },
  { path: "/pricing", name: "Pricing" },
  { path: "/services", name: "Services" },
];

const VIEWPORTS = [
  { width: 1366, height: 768 },
  { width: 1440, height: 900 },
];

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  console.log("=".repeat(100));
  console.log("route | heroTopPx | navbarBgAt0 | contentTopPx | problem");
  console.log("=".repeat(100));

  for (const vp of VIEWPORTS) {
    await page.setViewportSize(vp);
    console.log(`\n--- Viewport: ${vp.width}x${vp.height} ---`);

    for (const route of ROUTES) {
      await page.goto(`http://localhost:3000${route.path}`, {
        waitUntil: "networkidle",
      });
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.waitForTimeout(300);

      const data = await page.evaluate(() => {
        const hero =
          document.querySelector(".hero-screen") ||
          document.querySelector("section.hero-bg");
        const navbar = document.querySelector("nav");
        const eyebrow = document.querySelector(
          "p.text-brand-primary, p.text-\\[11px\\]"
        );
        const h1 = document.querySelector("h1");
        const content = eyebrow || h1;

        let heroTop = null;
        let contentTop = null;
        if (hero) heroTop = hero.getBoundingClientRect().top;
        if (content) contentTop = content.getBoundingClientRect().top;

        const navBg = navbar
          ? getComputedStyle(navbar).backgroundColor
          : null;

        return { heroTop, navBg, contentTop };
      });

      let problem = "";
      if (data.heroTop !== 0) problem += "heroTop!=0 ";
      if (
        data.navBg &&
        data.navBg !== "rgba(0, 0, 0, 0)" &&
        data.navBg !== "transparent"
      )
        problem += "navbarNotTransparent ";
      console.log(
        `${route.name.padEnd(14)} | ${String(data.heroTop).padEnd(9)} | ${String(
          data.navBg
        ).padEnd(22)} | ${String(data.contentTop).padEnd(10)} | ${problem.trim() || "none"}`
      );
    }
  }

  await browser.close();
})();
