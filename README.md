# Description of TAG
## Introduction
***TAG*** is a little library for **JavaScript** that *HTML coding assistance*.
~~cake is a lie.~~
## Getting Started
### Main HTML
```html
<script type="text/javascript" src="https://cdn.rawgit.com/katai5plate/TAG/master/TAG.js"></script>
<script type="text/javascript">
<!-- CODING HERE -->
</script>
```
#### Example
```html
<script type="text/javascript" src="https://cdn.rawgit.com/katai5plate/TAG/master/TAG.js"></script>
<script type="text/javascript">
    TAG("html",[
        TAG("head",[
            TAG("title", ["Description of "+jsName])
        ]),
        TAG("body",[
            TAG("h1",["Description of "+jsName]),
            TAG("h2",["Introduction"]),
            TAG("",[
                "[***]"+jsName+"[/***] is a little library [_]for [*]JavaScript[/*] that [**]HTML coding assistance[/**][/_]."
            ]),
            TAG("h2",["Getting Started"]),
            TAG("h3",["Main HTML"]),
            TAG("pre",[
                '\<script type="text/javascript" src="https://cdn.rawgit.com/katai5plate/TAG/master/TAG.js"\>\</script\>\n',
                '\<script type="text/javascript"\>\n',
                '\<!-- CODING HERE --\>\n',
                '\</script\>'
            ]),
            TAG("h2",["How to use"]),
            TAG("h3",["Run this script in the chrome console."]),
            TAG("pre",[
                'TAG();'
            ]),
        ]),
    ]);
</script>
```
## How to use
### TAG(arrays)
- -> arrays: TAG(...) or Text
- -> return: HTML-String
### TAG(string,arrays)
- -> string: HTML-tag name
- -> arrays: TAG(...) or Text
- -> return: HTML-String
### TAG(string,object,arrays)
- -> string: HTML-tag name
- -> object: Attributes
- -> arrays: TAG(...) or Text
- -> return: HTML-String