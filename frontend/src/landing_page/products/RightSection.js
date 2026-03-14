import React from 'react';

function RightSection({
    productName,
    productDescription,
    learnMore,
    imageURL
}) {
    return (
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-6 mt-5 p-5'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <a href={learnMore} style={{textDecoration:"none"}}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i> </a>
                </div>
                <div className='col-6'>
                    <img src={imageURL} />
                </div>
            </div>
        </div>
    );
}

export default RightSection;