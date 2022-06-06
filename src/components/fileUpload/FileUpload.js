import "./FileUpload.css"
import Button from "../button/Button";
import axios from "axios";
import {useState} from "react";

function FileUpload() {

    const [file, setFile] = useState(null);

    function handleInput(e) {
        setFile(e.target.files[0])
    }

    async function uploadFile() {
        let formData = new FormData();
        formData.append('file', file);

        try {
            const result = await axios.post("http://localhost:8080/upload",
               formData, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }});
            console.log(result);

        } catch (error) {
            console.error(error);
        }
    }


    return (
        <form className="file-upload" onSubmit={uploadFile}>
            <input
                id="file"
                type="file"
                name="file"
                onChange={handleInput}
            />
            <Button
                type= "submit"
                description= "Upload"
            />
        </form>
    )
}

export default FileUpload;