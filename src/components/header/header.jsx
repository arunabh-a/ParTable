import React from 'react'

import Json from './components/json-save'
import Excel from './components/excel-export'

const Header = ({ columns, addColumn, rows, addRow }) => {
    return (
        <div className="row">
            <div className="col-md-10 mt-5 mx-auto d-flex align-items-center justify-content-between">
                <a href="http://" className='ms-5 text-decoration-none text-dark fw-bold'> 
                Dashboard | ParTable</a>

                <div className="d-flex align-items-center justify-content-end gap-2">
                    <p className='my-0'>Columns : {columns.length}</p>
                    <p className='my-0'>Rows : {rows.length}</p>

                    <button type='button' onClick={() => addColumn()} className='btn btn-outline-dark'>Insert Column</button>
                    <button type='button' onClick={() => addRow()} className='btn btn-outline-dark'>Insert Row</button>
                    <Json rows = {rows} columns = {columns} />
                    <Excel rows = {rows} columns = {columns} />
                </div>
            </div>
        </div>
    )
}

export default Header