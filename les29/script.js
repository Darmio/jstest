'use strict'

class options {
    height;
    width;
    bg; 
    fontSize;
    textAlign;
    #div;
    constructor(height=0, width=0, bg=0, fs=14, textAlign=0){
        this.height = height;
        this.width  = width;
        this.bg     = bg;
        this.fontsize  = fs;
        this.textAlign = textAlign;
    }

    creatediv(){
        this.#div = document.createElement('div');
        let text = prompt("Input your text ");

        if(text!=null) this.#div.innerHTML = text;
        document.body.appendChild(this.#div);
        this.#div.style.cssText = `color:red; background-color:{$this.bg}; width:{$this.width}; height:{$this.height}; text-align:{$this.textAlign};`;

    }
    setCssStyle(){
        this.#div.style.cssText = `color:green; background-color:{$this.bg}; width:{$this.width}; height:{$this.height}; text-align:{$this.textAlign};`;
        console.log(this.#div);
    }

   

}

let  obj = new options(50,50,'blue',20,'center');
obj.creatediv();
let tset = prompt('Continue?');
if(tset!=null&&tset!="") 
obj.setCssStyle(50,100,'black',25,'left');
console.log(obj);
