import React from 'react'
import exportFromJSON from 'export-from-json'
import { convertDataToJSON } from '../../../methods';



const Excel = ({ columns, rows }) => {

    const downloadExcelFile = () => {
        const data = convertDataToJSON({ columns, rows });

        const fileName = 'table';
        const exportType = exportFromJSON.types.xls;

        exportFromJSON({ data, fileName, exportType })



    }
    return (
        <button type="button" onClick = {() => downloadExcelFile()} className='btn btn-dark'>Export to Excel</button>
    )
}

export default Excel