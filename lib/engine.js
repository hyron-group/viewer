const fs = require("fs");
const node_path = require("path");

const engineLoader = {
    html: (file) => () => file.toString(),
    htm: (file) => () => file.toString(),
    pug: (file) => {
        const parser = require("pug");
        return parser.compile(file);
    },
    ejs: (file) => {
        const ejs = require("ejs");
        return ejs.compile(file.toString());
    },
    hbs: (file) => {
        const hbs = require("hbs");
        return hbs.handlebars.compile(file.toString());
    }
}

function parserFile(path) {
    var ext;
    if (path == null ||
        (ext = path.substr(path.lastIndexOf(".") + 1)) == null) {
        throw Error("path must be a valid file");
    }
    var raw = fs.readFileSync(node_path.join(path));
    return engineLoader[ext](raw);
}


module.exports = parserFile;