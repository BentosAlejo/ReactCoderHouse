import React from 'react';


const Components = () => {
    return (
        <>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" id='pic1'>
                       <img src="" alt="" />
                    </div>
                    <div className="carousel-item">
                        <img src="..." className="d-block w-100 " alt="anillo2" id='pic2'/>
                    </div>
                    <div className="carousel-item">
                        <img src="..." className="d-block w-100" alt="anillo3" id='pic3'/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </>
    );
}

export default Components;
