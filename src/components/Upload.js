import Parse from 'parse';
import { useState } from 'react';
import { FaFileUpload } from 'react-icons/fa';


function Upload() {

    const [imageFile, setImageFile] = useState();
    
    async function fileUploadHandler(imageFile){
        
        const Image = Parse.Object.extend('Image');
        const newImage = new Image();

        const file = new Parse.File(imageFile.name,imageFile);
        newImage.set("file",file)
        newImage.set("user",'ti8kJQvgJ4')
        
        try {
            await newImage.save()
            alert('The file has been saved to Back4app.')
        } catch(error) {
            console.log(error)
        }       
    }
    function fileSelectedHandler(event){
        setImageFile(event.target.files[0])
        fileUploadHandler(event.target.files[0])
    }
    
    return (  
        <div >
            <label className="image-container">       
            {imageFile && (
             <img  alt=""
             style={{ maxWidth: "140px", maxHeight: "140px" }}
             src={URL.createObjectURL(imageFile)}/> )} 
            </label>

            <input type="file" name="profpic" id="input"  onChange={fileSelectedHandler}/>
            <div className="label">
                <label className="button-secondary-extra-small" htmlFor="input">
               <FaFileUpload /> 
                  select profile picture
                </label>
            </div>
        </div>

    )
    
}

export default Upload;
     
