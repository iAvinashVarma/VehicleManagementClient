import React from 'react';

const Error = ({ error }) => {
    return (
        error && <div class="container">
            <h4 class="text-center my-3">
                <div class="h-100 row align-items-center">
                    <div class="col">
                    <div class="alert alert-warning alert-dismissible fade show" role="alert">
                        <strong>Unable to process!</strong> Please contact Avi.
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
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