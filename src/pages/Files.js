import React, {useState} from 'react';

const Files = () => {

    const [files, setFiles] = useState([]);

    const uploadFile = (e) => {
        const uploadedFile = e.target.files[0];
        console.log(uploadedFile);
        setFiles([...files, uploadedFile]);
    }
    
    
    return (
        <>
            <h1>File Upload page</h1>

            <div>
                <input type="file" name="file" accept=".csv, application/pdf" onChange={(e) => uploadFile(e)} />
                
                {files && 
                    <div>
                        <ul className="listHeader">
                            <li>File Name</li>
                            <li>Uploaded date</li>
                            <li>File Extension/type</li>
                        </ul>
                        <ul className="fileList">
                            {files.map((item, key) => (
                                <li key={key}>
                                    <span>{item.name}</span>
                                    <span>{item.lastModified}</span>
                                    <span>{item.type}</span>
                                </li>
                            ))}
                        </ul>
                    </div>                    
                }
            </div>
        </>
)
};

export default Files;