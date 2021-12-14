
import { useState } from 'react';

//install react-icons --> npm install react-icons --save, use --save so the rest of the team can use it too
//find react-icons here --> https://react-icons.github.io/react-icons/icons?name=fa 
// Syngax for using react-icons: import { IconName } from "react-icons/fa";

import { FaFileUpload } from 'react-icons/fa';
//import {uploadImage } from './API';
//import API from "./components/API";


function Upload() {

    const [imageFile, setImageFile] = useState();

   //e.target.files[0] --> to acces the files input [an array of files, first file uploaded is 0]
    function handleFileUpload(e) {
        setImageFile(e.target.files[0]);
    }

    // submitChanges={API.uploadImage}
    return (
        
        <div >
            <label className="image-container">       
            {imageFile && (
             <img  alt=""
             style={{ maxWidth: "140px", maxHeight: "140px" }}
             src={URL.createObjectURL(imageFile)}/> )} 
            </label>

            <input type="file" name="profpic" id="input"  onChange={handleFileUpload} />
            <div className="label">
                <label className="button-extra-small" htmlFor="input">
               <FaFileUpload /> 
                  select profile picture
                </label>
            </div>
        </div>

    )
    
}

export default Upload;
     
