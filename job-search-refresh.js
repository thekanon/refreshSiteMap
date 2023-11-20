const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // Your script will be injected here
  await page.evaluate(() => {
    // Your provided script
    // XML string
    const xmlString = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  <!-- created with Free Online Sitemap Generator www.xml-sitemaps.com -->


  <url>
    <loc>https://job-search-log.vercel.app/</loc>
    <lastmod>2023-11-08T15:28:11+00:00</lastmod>
  </url>
  <url>
    <loc>https://job-search-log.vercel.app/jobs/backendDeveloper</loc>
    <lastmod>2023-11-08T15:28:11+00:00</lastmod>
  </url>
  <url>
    <loc>https://job-search-log.vercel.app/jobs/frontendDeveloper</loc>
    <lastmod>2023-11-08T15:28:11+00:00</lastmod>
  </url>
  <url>
    <loc>https://job-search-log.vercel.app/jobs/performanceMarketers</loc>
    <lastmod>2023-11-08T15:28:11+00:00</lastmod>
  </url>
  <url>
    <loc>https://job-search-log.vercel.app/jobs/visualDesigner</loc>
    <lastmod>2023-11-08T15:28:11+00:00</lastmod>
  </url>

  <url>
    <loc>https://job-search-log.vercel.app/jobs/backendDeveloper
</loc>
    <lastmod>2023-11-12T15:28:11+00:00</lastmod>
  </url>
  <url>
    <loc>https://job-search-log.vercel.app/jobs/biomedicalEngineeringInterview
</loc>
    <lastmod>2023-11-12T15:28:11+00:00</lastmod>
  </url>
  <url>
    <loc>https://job-search-log.vercel.app/jobs/businessAdministrationInterview
</loc>
    <lastmod>2023-11-12T15:28:11+00:00</lastmod>
  </url>
  <url>
    <loc>https://job-search-log.vercel.app/jobs/chemicalEngineeringInterview
</loc>
    <lastmod>2023-11-12T15:28:11+00:00</lastmod>
  </url>
  <url>
    <loc>https://job-search-log.vercel.app/jobs/computerScienceInterview
</loc>
    <lastmod>2023-11-12T15:28:11+00:00</lastmod>
  </url>
  <url>
    <loc>https://job-search-log.vercel.app/jobs/dentalHygieneInterview
</loc>
    <lastmod>2023-11-12T15:28:11+00:00</lastmod>
  </url>
  <url>
    <loc>https://job-search-log.vercel.app/jobs/economicsInterview
</loc>
    <lastmod>2023-11-12T15:28:11+00:00</lastmod>
  </url>
  <url>
    <loc>https://job-search-log.vercel.app/jobs/englishEducationInterview
</loc>
    <lastmod>2023-11-12T15:28:11+00:00</lastmod>
  </url>
  <url>
    <loc>https://job-search-log.vercel.app/jobs/frontendDeveloper
</loc>
    <lastmod>2023-11-12T15:28:11+00:00</lastmod>
  </url>
  <url>
    <loc>https://job-search-log.vercel.app/jobs/industrialEngineeringInterview
</loc>
    <lastmod>2023-11-12T15:28:11+00:00</lastmod>
  </url>
  <url>
    <loc>https://job-search-log.vercel.app/jobs/koreanLanguageEducationInterview
</loc>
    <lastmod>2023-11-12T15:28:11+00:00</lastmod>
  </url>
  <url>
    <loc>https://job-search-log.vercel.app/jobs/lifeScienceInterview
</loc>
    <lastmod>2023-11-12T15:28:11+00:00</lastmod>
  </url>
  <url>
    <loc>https://job-search-log.vercel.app/jobs/mathEducationInterview
</loc>
    <lastmod>2023-11-12T15:28:11+00:00</lastmod>
  </url>
  <url>
    <loc>https://job-search-log.vercel.app/jobs/nursingInterview
</loc>
    <lastmod>2023-11-12T15:28:11+00:00</lastmod>
  </url>
  <url>
    <loc>https://job-search-log.vercel.app/jobs/occupationalTherapyInterview
</loc>
    <lastmod>2023-11-12T15:28:11+00:00</lastmod>
  </url>
  <url>
    <loc>https://job-search-log.vercel.app/jobs/performanceMarketers
</loc>
    <lastmod>2023-11-12T15:28:11+00:00</lastmod>
  </url>
  <url>
    <loc>https://job-search-log.vercel.app/jobs/physicalTherapyInterview
</loc>
    <lastmod>2023-11-12T15:28:11+00:00</lastmod>
  </url>
  <url>
    <loc>https://job-search-log.vercel.app/jobs/psychologyInterview
</loc>
    <lastmod>2023-11-12T15:28:11+00:00</lastmod>
  </url>
  <url>
    <loc>https://job-search-log.vercel.app/jobs/socialWorkInterview
</loc>
    <lastmod>2023-11-12T15:28:11+00:00</lastmod>
  </url>
  <url>
    <loc>https://job-search-log.vercel.app/jobs/softwareDeveloper
</loc>
    <lastmod>2023-11-12T15:28:11+00:00</lastmod>
  </url>
  <url>
    <loc>https://job-search-log.vercel.app/jobs/sportsScienceInterview
</loc>
    <lastmod>2023-11-12T15:28:11+00:00</lastmod>
  </url>
  <url>
    <loc>https://job-search-log.vercel.app/jobs/tourismManagementInterview
</loc>
    <lastmod>2023-11-12T15:28:11+00:00</lastmod>
  </url>
  <url>
    <loc>https://job-search-log.vercel.app/jobs/visualDesigner
</loc>
    <lastmod>2023-11-12T15:28:11+00:00</lastmod>
  </url>
</urlset>`;

    function extractUrls(xmlStr) {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlStr, "text/xml");
      const urlElements = xmlDoc.getElementsByTagName("loc");
      let urls = [];

      for (let i = 0; i < urlElements.length; i++) {
        urls.push(urlElements[i].textContent);
      }

      return urls;
    }

    const urls = extractUrls(xmlString);

    urls.forEach((url, index) => {
      setTimeout(() => {
        window.open(url);
      }, index * 1000);
    });
  });

  // Keep the browser open for a while
  await new Promise((resolve) => setTimeout(resolve, 1000 * 60 * 3));
  await browser.close();
})();
