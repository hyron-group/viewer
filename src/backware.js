const viewer = require("./viewDir");

module.exports = {
    handle(req, res, prev) {
        var { $render } = prev;
        if ($render == null) return prev;
        res.setHeader("Content-Type", "text/html");
        var renderedView;
        if(typeof $render == "string"){
            var viewRender = viewer.getView($render);
            var renderedView = viewRender();
        } else {
            var viewRender = viewer.getView($render.path);
            var renderedView = viewRender($render.data);
        }
        res.end(renderedView);
    },

    onCreate(cfg = {}) {
        var viewDirPath = cfg.root || "views";
        viewer.scanDir(viewDirPath);
    },
    typeFilter: ["Object"],

}