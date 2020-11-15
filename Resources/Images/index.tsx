const images = require('../../src/images/**/*.jpg')


class Images {
    constructor(){
        Object.keys(images).forEach(key => {
            this[key] = images[key]
        });
    }
    //could add post-treatments here
}

export default new Images()