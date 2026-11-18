export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addGlobalData("year", () => new Date().getFullYear());

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    }
  };
}
