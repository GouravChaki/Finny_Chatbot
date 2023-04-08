import React from 'react'
export default function Footer() {

    return (
        <div className='container bg-light'>
            <div className='d-flex flex-column flex-md-row' style={{backgroundColor: "#f2f3f4",width: '1351px',marginLeft: '-130px',marginTop: '90px'}}>
                <div className="col-md text-center">
                    <h3 className='text-center m-3'>Contact Us</h3>
                        <form>
                            <div className='row mx-2'>
                            <div className='col'><input type="text" className="form-control me-2" id="Name" placeholder='Name'style={{marginLeft: '20px'}} /></div>
                            <div className='col'><input type="textarea" className="form-control me-2" id="Comment" placeholder='Comment'style={{marginLeft: '10px'}}/></div>
                            <div className='col'><input type="email" className="form-control" id="Email" placeholder='Email' /></div>
                            </div>
                        </form>
                    <p className='mt-3'>Reach us at exampleEmail@gmail.com</p>
                </div>
            </div>
        </div>
    )
}
