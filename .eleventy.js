
module.exports = function (eleventyConfig) {

    // add css to template formats
    // eleventyConfig.addPassthroughCopy("assets");
    
    eleventyConfig.addTemplateFormats("webmanifest");
    eleventyConfig.addTemplateFormats("xml");
    eleventyConfig.addTemplateFormats("ico");
    eleventyConfig.addTemplateFormats("jpg");
    eleventyConfig.addTemplateFormats("png");
    
    // add css to template formats
    eleventyConfig.addTemplateFormats("css");
    eleventyConfig.addExtension("css", {
        outputFileExtension: "css",
        compile: (input) => (data) => {
            return input
        }
    })

    // add js to template formats
    eleventyConfig.addTemplateFormats("js");
    eleventyConfig.addExtension("js", {
        outputFileExtension: "js",
        compile: (input) => (data) => {
            return input
        }
    })
    
    return {
        dir: {
            input: 'source',
            output: 'public',
            includes: "_includes",
            layouts: "_layouts",
        }
    }
}