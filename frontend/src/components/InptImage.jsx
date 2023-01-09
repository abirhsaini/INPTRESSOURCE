import React from 'react';
import imgInpt from "../assets/zlafa galaxy.jpg"

const InptImage = () => {
    return (
        <div>
            <div className='row justify-content-between'>
                <div class="col-sm-3"  >Welcome to INPTRESSOURCE </div>
                
                <div class="col-sm offset-4"> <img src={imgInpt}  class="rounded-circle" height="200px" alt='inpt' /></div>
            </div>
        </div>
    );
};

export default InptImage;