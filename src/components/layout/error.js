import React from 'react';

const Error = ({ error }) => {
    return (
        error && <div className="container">
            <h4 className="text-center my-3">
                <div className="h-100 row align-items-center">
                    <div className="col">
                    <div className="alert alert-warning alert-dismissible fade show" role="alert">
                        <strong>Unable to process!</strong> Please contact Avi.
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                    </div>
                </div>
            </h4>
        </div>
    )
}

export default Error;