import images from '../../src/images/**/*.jpg'


class Images {
    ongoingWork = []
    
    constructor(){
        if(images.length == 0){
            console.error("No Images loaded")
        }
        //getting all images in their respective folders
        
        Object.keys(images).forEach(key => {
            this[key] = images[key]
            
            //managing ongoing work
            Object.keys(this[key]).forEach(workName =>{
                if(workName.split('_')[0] === 'ongoing'){
                    let normalizedWorkname = workName.split('_').splice(1,workName.split('_').length -1).join('_')
                    this[key][normalizedWorkname] = {...this[key][workName]}
                    delete this[key][workName]
                    this.ongoingWork.push(normalizedWorkname)
                }
            })
            
        });
    }
    //could add post-treatments here
}

export default new Images()