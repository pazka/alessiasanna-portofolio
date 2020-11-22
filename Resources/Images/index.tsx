 
try{
    const images = require('../../src/images/**/*.jpg')
}catch(err){
    console.error( "No images loaded")
    const images = {}
}


class Images {
    constructor(){
        if(images.length == 0){
            console.error("No Images loaded")
        }

        Object.keys(images).forEach(key => {
            this[key] = images[key]
        });
    }
    //could add post-treatments here
}

export default new Images()