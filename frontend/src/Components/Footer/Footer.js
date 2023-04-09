import React from 'react'
export default function Footer() {

    return (
        <div className='container bg-light'>
            <div className='d-flex flex-column flex-md-row' style={{backgroundColor: '#2b3cbd',width: '1351px',marginLeft: '-130px',marginTop: '0px'}}>
                <div className="col-md text-center">
                    <h3 className='text-center m-3' style={{color: '#e1e6f7c9',fontSize: '20px'}}>Contact Us</h3>
                        <form>
                            <div className='row mx-2'>
                            <div className='col'><input type="text" className="form-control me-2" id="Name" placeholder='Name'style={{marginLeft: '20px',height: '30px',backgroundColor: '#e1e6f7c9'}} /></div>
                            <div className='col'><input type="textarea" className="form-control me-2" id="Comment" placeholder='Comment'style={{marginLeft: '10px',height: '30px',backgroundColor: '#e1e6f7c9'}}/></div>
                            <div className='col'><input type="email" className="form-control" id="Email" placeholder='Email'style={{marginLeft: '10px',height: '30px',backgroundColor: '#e1e6f7c9'}} /></div>
                            </div>
                        </form>
                    <p className='mt-3' style={{color: '#e1e6f7c9'}}>Reach us at exampleEmail@gmail.com</p>
                </div>
            </div>
        </div>
    )
}
