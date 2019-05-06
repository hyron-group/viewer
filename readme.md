used to render views using popular view engines. include
- pug
- ejs
- hbs

# Usage

## 1. Install plugins
@hyron/viewer is normal plugins. so you need to declared like another hyron plugins to used

app.json
```json
{
    "base_url" : "http://localhost:3000",
    "plugins" : {
        "viewer": "@hyron/viewer"
    }
}
```

after that run build file to install plugins. Using @hyron/cli

```bash
hyron start
```

you also install using `npm` or `yarn` engine

## 2. create view file

By default, @hyron/viewer will read file inside `./views` dir from root to parser view file

you also custom this path used appcfg using `root` properties

appcfg.yaml
```yaml
# 'viewer' that name was declared above
viewer:
  root: '/public'
```

Example
```pug
<!DOCTYPE html>
html(lang="en")
    head
        meta(charset="UTF-8")
        meta(name="viewport", content="width=device-width, initial-scale=1.0")
        meta(http-equiv="X-UA-Compatible", content="ie=edge")
        title hello world
    body
        h1 hello, this is @hyron/viewer demo
```

## 3. declare for view router

To allow a router render a view, you need to declare it in `requestConfig`. and using **$render**( string | object ) properties to pass data to render view

/services/ViewDemo.js
```js
module.exports = class ViewDemo {

    static requestConfig(){
        return {
            $all : {
                plugins: ["viewer"]
            },
            getView : "get"
        }
    }

    getView(){
        return {
            $render : {
                path : "demo.pug"
            }
        }
    }
}
```