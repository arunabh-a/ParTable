import React from 'react'

const Json = ({columns, rows}) => {

    const convertToJSON = () => {
        let data = [];
        rows.map((row, index) => {
            let obj = {Sno: index + 1};
            columns.map((col, colId) => {
                obj[col] = row[colId];
            });

            data.push(obj);
        });
        const fileData = JSON.stringify(data);

        const file = new Blob([fileData], {type: "text/plain"});

        const fileURL = URL.createObjectURL(file);
        
        const a = document.createElement("a");
        a.href = fileURL;
        (a.download = `table.json`), a.click();
    }

    return (
        <button type="button" onClick={() => convertToJSON()} className='btn btn-dark'>Save as JSON</button>
    )
}

export default Json