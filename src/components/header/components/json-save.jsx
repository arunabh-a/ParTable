import React from 'react'
import { convertDataToJSON } from '../../../methods';


const Json = ({columns, rows}) => {
    const downloadJSONFile = () => {
        const data = convertDataToJSON({columns, rows});

        const fileData = JSON.stringify(data);

        const file = new Blob([fileData], {type: "text/plain"});

        const fileURL = URL.createObjectURL(file);
        
        const a = document.createElement("a");
        a.href = fileURL;
        (a.download = `table.json`), a.click();
    }

    return (
        <button type="button" onClick={() => downloadJSONFile()} className='btn btn-dark'>Save as JSON</button>
    )
}

export default Json