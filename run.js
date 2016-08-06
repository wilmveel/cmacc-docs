var assert = require('assert');
var path = require('path');
var fs = require('fs');

var cmacc = require('cmacc-compiler');

var input = process.argv[2];

var file = path.join(__dirname, input);


cmacc.compose(file, null, function (err, ast) {

    if (err)
        return console.error(err);

    cmacc.render(ast, function (err, markdown) {

        if (err)
            return console.error(err);

        cmacc.serialize(ast, function (err, source) {

            if (err)
                return console.error(err);

            var html = cmacc.marked(markdown)

            console.log("---MARKDOWN---\n");
            console.log(markdown + "\n");

            console.log("---HTML---\n");
            console.log(html);

            console.log("---SOURCE---\n");
            console.log(source);

            fs.writeFileSync('run.json', JSON.stringify(ast, null, 4))
            fs.writeFileSync('run.md', markdown)
            fs.writeFileSync('run.html', html)
            fs.writeFileSync('run.source', source)
        });
    });
});
