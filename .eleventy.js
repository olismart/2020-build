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
  eleventyConfig.addPassthroughCopy("js");

  // Copy .html files as-is (they aren't templates)
  eleventyConfig.addPassthroughCopy("index.html");
  eleventyConfig.addPassthroughCopy("resume.html");

  // ── Blog collection ─────────────────────────────────────────────────
  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("posts/*.md").reverse();
  });

  // ── Rewrite relative image paths in blog posts to /img/blog/ ─────────
  eleventyConfig.addTransform("blog-images", function (content, outputPath) {
    // Only process blog post output pages
    if (!outputPath || !outputPath.includes("/posts/")) {
      return content;
    }

    // Rewrite <img src="relative.png"> → <img src="/img/blog/relative.png">
    // Skips absolute paths (/...), external URLs (http/https), and data URIs
    return content.replace(
      /<img([^>]*?)src="(?!\/|https?:\/\/|data:)([^"]+)"/g,
      '<img$1src="/img/blog/$2"'
    );
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