//const /* <- "Uncaught SyntaxError: Identifier 'TAG' has already been declared" ...but, why? */
TAG = (...args)=>{
    let n,a,c;
    if(args.length==0){
        console.log(
            "--------------"+"\n"+
            // "TAG(bool)"+"\n"+
            // " -> true  : document.open()"+"\n"+
            // " -> false : document.close()"+"\n"+
            // ""+"\n"+
            "TAG(arrays)"+"\n"+
            " -> arrays: TAG(...) or Text"+"\n"+
            " -> return: HTML-String"+"\n"+
            ""+"\n"+
            "TAG(string,arrays)"+"\n"+
            " -> string: HTML-tag name"+"\n"+
            " -> arrays: TAG(...) or Text"+"\n"+
            " -> return: HTML-String"+"\n"+
            ""+"\n"+
            "TAG(string,object,arrays)"+"\n"+
            " -> string: HTML-tag name"+"\n"+
            " -> object: Attributes"+"\n"+
            " -> arrays: TAG(...) or Text"+"\n"+
            " -> return: HTML-String"+"\n"+
            "--------------"+"\n"+
            ""
        );
        return;
    }else if(args.length==1){
        c=args[0];
        //if(typeof(c)=="object"){
            n="", a={};
        // }else if(typeof(c)=="boolean"){
        //     if(c){
        //         document.open();
        //     }else{
        //         document.close();
        //     }
        //     return;
        // }
    }else if(args.length==2){
        n=args[0],
        a={},
        c=args[1];
    }else{
        n=args[0],
        a=args[1],
        c=args[2];
    }
    const r=(o,f)=>{Object.keys(o).forEach(k=>{f(o[k], k);});};
    const q=x=>x.replace(/</g,"&lt;").replace(/>/g,"&gt;");
    let t = n ? document.createElement(n) : document.createElement("div");
    let b = {};
    r(a,(v,k)=>{
        if(k=="style"){
            let s="";
            r(v,(w,j)=>{
                s+=j+":"+w+";";
            })
            t.setAttribute(k,s);
        }else{
            t.setAttribute(k,v);
        }
    });
    for(let i of c){
        switch(typeof(i)){
            case "object":
                t.appendChild(i);
                break;
            case "string":
                i = q(i);
                i = i   .replace(/(\n)/g,"<br>")
                        .replace(/(\[\*\*\])/g,"<b>")
                        .replace(/(\[\/\*\*\])/g,"</b>")
                        .replace(/(\[\*\])/g,"<em>")
                        .replace(/(\[\/\*\])/g,"</em>")
                        .replace(/(\[\*\*\*\])/g,"<b><em>")
                        .replace(/(\[\/\*\*\*\])/g,"</em></b>")
                        .replace(/(\[_\])/g,"<u>")
                        .replace(/(\[\/_\])/g,"</u>")
                        .replace(/(\[-\])/g,"<s>")
                        .replace(/(\[\/-\])/g,"</s>")
                if(n==""){
                    t.innerHTML += i+"<br>";
                }else{
                    t.innerHTML += i;
                }
                break;
        }
    }
    b = t.outerHTML;
    document.write(b);
    return;
};
