import React from 'react'
import './table.css'

const Table = ({ columns, addColumn, setColumns, rows, addRow, setRows }) => {

    const handleColumnChange = (value, index) => {
        setColumns(prevColumns => prevColumns.map((col, id) => (index === id ? value : col))
        );
    }

    const handleRowChange = (value, index, columnIndex) => {
        setRows((prevRows) => 
        prevRows.map((row, id) => (index === id ? 
            row.map((col, colId) => (columnIndex === colId ? value : col))
            : row)))
    }

    const deleteColumn = (index) => {
        setColumns((prevColumns) => prevColumns.filter((col,id) => index !== id));
        if(rows.length > 0){
            setRows((prevRows) => prevRows.map((row) => row.filter((col, id) => index !== id)))
        }
    }

    const deleteRow = (index) => {
        setRows((prevRows) => prevRows.filter((row, id) => index !== id));

    }

    return (
        <div className="row mb-5">
            <div className="col-md-10 mx-auto mt-5 border-bottom">
                <table className='table table-dark table-striped dash-table'>
                    <thead>
                        <tr>
                            <th></th>
                            {
                                columns.map((column, index) => (
                                    <th scope='col' key={index * 244233232} className='text-center'>
                                        <button type='button' className='btn btn-block form-control btn-outline-danger btn-sm'>
                                            <h3 onClick={() => deleteColumn(index)}>DELETE</h3>
                                        </button>
                                    </th>
                                ))
                            }
                            <th></th>
                        </tr>
                        <tr>
                            <th scope='col' className='text-center'>SNo.</th>
                            {
                                columns.map((column, index) => (
                            
                            <th scope='col' key={index * 244233232} className='text-center'>
                                <input 
                                    type="text" 
                                    className="form-control text-center text-white border-transparent border-0 bg-transparent" value={column} 
                                    onChange={(e) => handleColumnChange(e.target.value, index)}
                                    style={{ boxShadow : 'none' }} 
                                />
                            </th>
                            ))
                            }
                            <th scope='col' className='text-center'>
                            <button type='button' onClick={() => addColumn()} className='btn btn-outline-light btn-sm'>Insert Column</button>
                            </th>
                        </tr>
                    </thead>
                    <tbody className='text-black'>
                        {rows.length < 1 ? (
                            <tr>
                                <th scope='row' colSpan={columns.length + 2} className='text-center py-3'>
                                    To Start, Click on "Insert Row" Button to add a row
                                </th>
                            </tr>
                        ) : (
                            rows.map((row, index) => (
                                <tr key={index * 4343342223}>
                                    <td className="text-center">{index + 1}</td>
                                    {row.map((rowColumn, rowColumnIndex) => (
                                        <td key={index}>
                                            <input 
                                            type="text" 
                                            value={rowColumn}
                                            onChange={(e) => handleRowChange(e.target.value, index, rowColumnIndex)
                                            } 
                                            className='form-control text-center bg-dark text-white'
                                            placeholder='Enter Your Value' />
                                        </td>
                                    ))}
                                    <td className="text-center">
                                        <button type='button' onClick={() => deleteRow(index)} className="btn btn-outline-danger btn-sm">
                                            <img src="/TRASH.png" className="img-fluid row-img" alt="Delete Column" />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}

                    </tbody>
                </table>
                <button type='submit' onClick={() => addRow()} className='form-control btn btn-outline-dark btn-block mt-2'>Insert Row</button>
            </div>
        </div>
    )
}

export default Table