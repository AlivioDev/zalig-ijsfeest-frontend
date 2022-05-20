import Button from "../button/Button";
import axios from "axios";
import {useState} from "react";



function FileUpload() {

    const [file, setFile] = useState(null);

    function handleInput(e) {
        setFile(e.target.value)
    }

    console.log(file);

    //TODO: post-request aanpassen, werkt nog niet
    async function uploadFile() {
        try {
            const result = await axios.post("http://localhost:8080/upload",
               file, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <div>
            <input
                id="fileupload"
                className="file-upload"
                type="file"
                name="fileupload"
                onChange={handleInput}
            />
            <Button
                onClick={uploadFile}
                description= "Upload"
            />
        </div>
    )
}

export default FileUpload;