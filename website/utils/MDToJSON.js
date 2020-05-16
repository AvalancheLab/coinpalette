const MDToJSON = require('markdown-it')();

export default function ( markdownFile ) {
    const markdown = fs.readFileSync(markdownFile);
    return MDToJSON.render(markdown);
}
