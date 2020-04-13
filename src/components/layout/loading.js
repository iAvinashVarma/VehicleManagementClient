import React from 'react';

const Loading = ({ loading }) => {
    return (
        loading && <div className="container">
            <h4 className="text-center my-3">
                <div className="h-100 row align-items-center">
                    <div className="col">
                        <div className="fa-3x">
                            <i className="fa fa-spinner fa-pulse"></i>
                        </div>
                    </div>
                </div>
            </h4>
        </div>
    )
}

export default Loading;