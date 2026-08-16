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
                <div className='col-12 col-md-6 mb-4'>
                    <img src={imageURL} className='img-fluid' />
                </div>
                <div className='col-12 col-md-6 mt-md-3 p-4'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <a href={tryDemo} style={{textDecoration:"none", marginRight:"50px"}}>Try Demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>
                    <a href={leranMore} style={{textDecoration:"none"}}>Learn More <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a> 
                    <br /> <br />
                    <a href={appStore} style={{ marginRight: "16px" }}>
                        <img src='media/images/googlePlayBadge.svg' className='img-fluid' style={{ maxWidth: "140px" }} alt="Google Play" />
                    </a>
                    <a href={googlePlay}>
                        <img src='media/images/appstoreBadge.svg' className='img-fluid' style={{ maxWidth: "140px" }} alt="App Store" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;