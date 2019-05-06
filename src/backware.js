const viewer = require("./viewDir");

module.exports = {
    handle(req, res, prev) {
        var { $render } = prev;
        if ($render == null) return prev;
        res.setHeader("Content-Type", "text/html");
        var viewRender = viewer.getView($render.path);
        console.log($render);
        var renderedView = viewRender($render.data);
        res.end(renderedView);
    },

    onCreate(cfg = {}) {
        var viewDirPath = cfg.view_dir || "views";
        viewer.scanDir(viewDirPath);
    },
    typeFilter: ["Object"],

}