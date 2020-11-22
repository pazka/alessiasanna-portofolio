import images from '../../src/images/**/*.jpg'


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