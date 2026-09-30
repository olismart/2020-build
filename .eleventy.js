module.exports = function (eleventyConfig) {
  // ── Date formatting filter ─────────────────────────────────────────
  eleventyConfig.addFilter("postDate", function (date) {
    return new Date(date).toLocaleDateString("en-GB", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  });

  // ── Static assets: copy everything except templates ─────────────────
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("ssd");
  eleventyConfig.addPassthroughCopy("legacy");
  eleventyConfig.addPassthroughCopy("cv-stylesheet.css");

  // Copy .html files as-is (they aren't templates)
  eleventyConfig.addPassthroughCopy("index.html");
  eleventyConfig.addPassthroughCopy("resume.html");

  // ── Blog collection ─────────────────────────────────────────────────
  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("posts/*.md").reverse();
  });

  // ── Return config ───────────────────────────────────────────────────
  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
    },
    // Only .njk and .md are templates — .html files are copied as-is
    templateFormats: ["njk", "md"],
  };
};