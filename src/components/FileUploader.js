import React, {useRef} from 'react'

const FileUploader = ({onFileSelectSuccess, onFileSelectError, accept}) => {
    const fileInput = useRef(null)

    const handleFileInput = (e) => {
        // handle validations
        const file = e.target.files[0];
        // console.log(file.size);
        if (file.size > 1000000)
          onFileSelectError({ error: "File size cannot exceed more than 100MB" });
        else {
            // console.log("onChange SUCCESS");
            onFileSelectSuccess(file);
        }
      };

    return (
        <div className="file-uploader">
            <input type="file" accept={accept} onChange={handleFileInput} />
            {/* <button onClick={e => fileInput.current && fileInput.current.click()} className="btn btn-primary" /> */}
        </div>
    )
}

export default FileUploader;