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
                <div className='col-12 col-md-6 mt-md-5 p-4'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <a href={learnMore} style={{textDecoration:"none"}}>Learn More <i className="fa fa-long-arrow-right" aria-hidden="true"></i> </a>
                </div>
                <div className='col-12 col-md-6'>
                    <img src={imageURL} className='img-fluid' />
                </div>
            </div>
        </div>
    );
}

export default RightSection;