import React from 'react'

const Header = () => {
    return (
        <div className="row">
            <div className="col-md-10 mt-5 mx-auto d-flex align-items-center justify-content-between">
                <a href="http://" className='ms-5 text-decoration-none text-dark fw-bold'> 
                Dashboard | ParTable</a>

                <div className="d-flex align-items-center justify-content-end gap-2">
                    <p className='my-0'>Columns : 0</p>
                    <p className='my-0'>Rows : 0</p>

                    <button type='button' className='btn btn-outline-dark'>Insert Column</button>
                    <button type='button' className='btn btn-outline-dark'>Insert Row</button>
                </div>


            </div>
        </div>
    )
}

export default Header