import Parse from "parse";
import { useEffect, useState } from "react";
import { FaFileUpload } from "react-icons/fa";

/**
 * Enables the user to upload a picture of their choice
 */
function Upload() {
  const [imageFile, setImageFile] = useState();

  /**
   * Returns URL for UserProfileImage
   */
  const fetchProfileImage = async () => {
    const User = Parse.User.current();
    const userId = User.id;

    let query = new Parse.Query("Image");
    const results = await query.find();

    for (let i = 0; i < results.length; i++) {
      if (results[i].get("user") === userId) {
        setImageFile(results[i].get("file")._url);
      }
    }
  };

  /**
   * Fetches profile pic on first render
   */
  useEffect(async () => {
    fetchProfileImage();
  }, []);

  /**
   * Uploads Image to DataBase
   */
  async function fileUploadHandler(imageFile) {
    const Image = Parse.Object.extend("Image");
    const newImage = new Image();
    const file = new Parse.File(imageFile.name, imageFile);
    newImage.set("file", file);
    newImage.set("user", "ti8kJQvgJ4");

    try {
      await newImage.save();
      fetchProfileImage();
      alert("The file has been saved to Back4app.");
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Changes profile picture and uploads. Event is the file selected by the user
   */
  async function fileSelectedHandler(event) {
    fileUploadHandler(event.target.files[0]);
  }

  return (
    <div>
      <label className="image-container">
        {imageFile && (
          <img
            alt=""
            style={{ maxWidth: "140px", maxHeight: "140px" }}
            src={imageFile}
          />
        )}
      </label>

      <input
        type="file"
        name="profpic"
        id="input"
        onChange={fileSelectedHandler}
      />
      <div className="label">
        <label className="button-secondary-extra-small" htmlFor="input">
          <FaFileUpload />
          select profile picture
        </label>
      </div>
    </div>
  );
}

export default Upload;
