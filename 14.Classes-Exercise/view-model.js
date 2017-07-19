/**
 * Created by 1234 on 14.7.2017 г..
 */
class Textbox {
    constructor(selector,regex){
        this._element=$(selector);
        this.value=$(this._element[0]).val();
        this.invalidSymbols=regex;
        this.onInput();
    }
    onInput(){
        this.element.on('input',(event)=>{
            let text=$(event.target).val();
            this.value=text;
        })
    }
    get element(){
        return this._element;
    }

    get value() {
        return this._value;
    }

    set value(value) {
        for(let el of this.element){
            this._value = value;
            $(el).val(value);
        }

    }
    isValid(){
        return !this.invalidSymbols.test(this.value);
    }
}

let textbox = new Textbox(".textbox",/[^a-zA-Z0-9]/);
let inputs = $('.textbox');

inputs.on('input',function(){console.log(textbox.value);});
