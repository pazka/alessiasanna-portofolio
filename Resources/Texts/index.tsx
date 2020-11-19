const texts = require('../../src/texts/**/*.txt')

class Texts {
    AvailableFiles = {};

    constructor(){
        Object.keys(texts).forEach(key => {
            this.AvailableFiles[key] = texts[key].desc
        });        
    }

    GetText(filePath):String{
        
        var result = null;
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", filePath, false);
        xmlhttp.send();
        if (xmlhttp.status==200) {
            result = xmlhttp.responseText;
        }
        return result;
    }
    //could add post-treatments here
}

export default new Texts()