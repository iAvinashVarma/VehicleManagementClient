import React from 'react';

const Loading = ({ loading }) => {
    return (
        loading && <div class="container">
            <h4 class="text-center my-3">
                <div class="h-100 row align-items-center">
                    <div class="col">
                        <div class="fa-3x">
                            <i class="fa fa-spinner fa-pulse"></i>
                        </div>
                    </div>
                </div>
            </h4>
        </div>
    )
}

export default Loading;