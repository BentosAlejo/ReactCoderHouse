import React from 'react';

const Components4 = () => {
    return (
        <div id="carouselExampleControls4" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" id='pic10'>
                        <img src="" alt="" />
                        </div>
                        <div className="carousel-item">
                            <img src="..." className="d-block w-100 " alt="chain2" id='pic11'/>
                        </div>
                        <div className="carousel-item">
                            <img src="..." className="d-block w-100" alt="chain3" id='pic12'/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls4" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls4" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
        </div>
    );
}

export default Components4;
