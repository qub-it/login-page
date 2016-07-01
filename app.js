var fs = require('fs');
var mustache = require('mustache');

var jsonStr = fs.readFileSync('src/login-page-content.json', 'utf8');
var template = fs.readFileSync('src/login-page-template.html', 'utf8');

var contents = JSON.parse(jsonStr);
var rendered = mustache.render(template, contents);

fs.writeFileSync("output/login-page.html", rendered, 'utf8');

console.log("Site was sucessfully generated.");
