import React from 'react'

function Loginmodal() {
    return (
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Login user page</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className='container-fluid'>
                            <div className='row'>
                                <div className='col-md-12'>
                                    <div class="mb-3">
                                        <label class="form-label">User Name</label>
                                        <input type="text" class="form-control" />
                                        <div class="form-text text-danger">message here</div>
                                    </div>
                                </div>
                                <div className='col-md-12'>
                                    <div class="mb-3">
                                        <label class="form-label">Password</label>
                                        <input type="password" class="form-control" />
                                        <div class="form-text text-danger">message here</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer text-center">
                        <button type="button" className="btn btn-success">Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loginmodal