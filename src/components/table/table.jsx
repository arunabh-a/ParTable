import React from 'react'

const Table = () => {
    return (
        <div className="row mb-5">
            <div className="col-md-10 mx-auto mt-5 border-bottom">
                <table className='table table-dark table-striped table-hoverable'>
                    <thead>
                        <tr>
                            <th scope='col' className='text-center'>SNo.</th>
                            <th scope='col' className='text-center'>
                                <input 
                                    type="text" 
                                    className="form-control text-center text-white border-transparent border-0 bg-transparent" value="Column 1" 
                                    style={{ boxShadow : 'none' }} 
                                />
                            </th>
                            <th scope='col' className='text-center'>
                            <button type='button' className='btn btn-outline-light btn-sm'>Insert Column</button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope='row' colSpan={3} className='text-center py-3'>
                                To Start, Click on "Insert Row" Button to add a row
                            </th>
                        </tr>
                    </tbody>
                </table>
                <button type='submit' className='form-control btn btn-outline-dark btn-block mt-2'>Insert Row</button>
            </div>
        </div>
    )
}

export default Table