import texts from '../../src/texts/**/*.txt'
 

class Texts {
    AvailableFiles = {};

    constructor(){
        if(texts.length == 0){
            console.error("No texts loaded")
        }

        Object.keys(texts).forEach(key => {
            this.AvailableFiles[key] = texts[key].desc
        });        
    }

    GetText(filePath):String{
        try{
            var result = null;
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.open("GET", filePath, false);
            xmlhttp.send();
            if (xmlhttp.status==200) {
                result = xmlhttp.responseText;
            }
            return result;
        }catch(err){
            return "No text available."
        }
    }
    //could add post-treatments here
}

export default new Texts()