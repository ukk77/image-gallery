import React, {useState} from 'react'
import ProgressBar from './ProgressBar'
import './UploadForm.css'

function UploadForm() {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const types = ['image/png', 'image/jpeg'];

    const onImageUpload = (e) => {
        let selected = e.target.files[0];
        
        if (selected && types.includes(selected.type)){
            setFile(selected);
            setError("");    
        }
        else{
            setFile(null);
            setError("Please select an image file ( png or jpeg )")
        }
    }

    return (
        <div className="upload-form">
            <form>
                <label>
                    <input type="file"  onChange={onImageUpload} />
                    <span>+</span>
                </label>
                <div className="output">
                    {error && <div className="error"> {error} </div>}
                    {
                        file && <div className="filename"> {file.name} </div>
                    }
                    {file && <ProgressBar file={file} setFile={setFile}/>}
                </div>
            </form>
        </div>
    )
}

export default UploadForm
