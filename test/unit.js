const chai = require("chai");
const engine = require("../lib/engine");

describe("test view parser", ()=>{

    it("should rendered by pug engine", ()=>{
        var res = engine("./views/demo.pug")({act:"hello world"});
        chai.should().exist(res);
    })

    it("should rendered by ejs engine", ()=>{
        var res = engine("./views/demo.ejs")({user:{name:"thang"}});
        chai.should().exist(res);
    })

    it("should rendered by hbs engine", ()=>{
        var res = engine("./views/demo.hbs")({body:"hello world"});
        chai.should().exist(res);
    })
})