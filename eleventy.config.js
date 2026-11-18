export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addGlobalData("year", () => new Date().getFullYear());
  eleventyConfig.addFilter("readableDate", (date) =>
    new Intl.DateTimeFormat("en", { dateStyle: "long", timeZone: "UTC" }).format(date)
  );
  eleventyConfig.addFilter("htmlDate", (date) => date.toISOString().slice(0, 10));

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    }
  };
}
