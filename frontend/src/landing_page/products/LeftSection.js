import React from 'react';

function LeftSection({
    imageURL, 
    productName, 
    productDescription, 
    tryDemo, 
    leranMore, 
    googlePlay, 
    appStore
}) {
    return (
        <div className='container mt-5'>
            <div className='row' >
                <div className='col-6'>
                    <img src={imageURL} />
                </div>
                <div className='col-6 mt-3 p-5'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <a href={tryDemo} style={{textDecoration:"none", marginRight:"50px"}}>Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>
                    <a href={leranMore} style={{textDecoration:"none"}}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a> 
                    <br /> <br />
                    <a href={appStore} style={{marginRight:"30px"}}>
                        <img src='media\images\googlePlayBadge.svg' />
                    </a>
                    <a href={googlePlay}>
                        <img src='media\images\appstoreBadge.svg' />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;