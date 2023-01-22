import images from '../../src/images/**/*.jpg'


class Images {
    ongoingWork = []
    main = [];
    thumbnail = [];
    full = [];
    h1 = []
    h2 = []
    h3 = []
    h4 = []
    h5 = []
    
    //I'm definitely not proud f this part.. sorry of that.
    constructor(){
        if(images.length == 0){
            console.error("No Images loaded")
        }
        //getting all images in their respective folders
        
        Object.keys(images).forEach(folderType => {
            //folderType is the name of folders available in the /images 
            this[folderType] = images[folderType]
            
            //managing ongoing work
            Object.keys(this[folderType]).forEach(workName =>{
                
                let ongoing = workName.includes('ongoing')
                let h1 = workName.includes('h1')
                let h2 = workName.includes('h2')
                let h3 = workName.includes('h3')
                let h4 = workName.includes('h4')
                let h5 = workName.includes('h5')
                
                let normalizedWorkname = workName.split('_').splice(1,workName.split('_').length -1).join('_')

                if(ongoing){
                    this.ongoingWork.push(normalizedWorkname)
                }

                if(h1 || h2 || h3 || h4 || h5){
                    this[workName.slice(0,2)].push(normalizedWorkname)
                }

                if(ongoing || h1 || h2 || h3 || h4 || h5){
                    this[folderType][normalizedWorkname] = {...this[folderType][workName]}
                    delete this[folderType][workName]
                }
                              
            })
        });
    }
    //could add post-treatments here
}

export default new Images()