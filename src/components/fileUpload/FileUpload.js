import Button from "../button/Button";
import axios from "axios";
import {useState} from "react";


function FileUpload() {

    const [file, setFile] = useState(null);

    async function uploadFile() {
        try {
            const result = await axios.post("http://localhost:8080/open/upload",
                {
                    "Content-type": "file", //of formData?
                    body: file,
                });
            console.log(result);
            setFile(result);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <input id="fileupload" className="file-upload" type="file" name="fileupload"/>
            <Button
                onClick={uploadFile}
                description= "Upload"
            />
        </div>
    )
}

export default FileUpload;