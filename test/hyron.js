const hyron = require("hyron");

const app = hyron.getInstance();

app.enablePlugins({
    viewer: "./hyron-plugins.js",
})

class ViewDemo {
    static requestConfig(){
        return {
            getView : {
                method : "get",
                plugins : ["viewer"],
                params : "/:name"
            }
        }
    }

    getView(name){
        return {
            $render: {
                name,
                path : "demo.pug",
                data : {act:"hello world"}
            }
        }
    }
}

app.enableServices({
    "": ViewDemo
})

app.startServer()