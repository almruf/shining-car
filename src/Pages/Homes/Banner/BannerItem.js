import React from 'react';
import'./BannerItem.css'

const BannerItem = ({slide}) => {
    const {image,id,prev,next} = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full ">
          <div className="carousels-img w-full">
            <img src={image} alt='' className="h-full w-full rounded-lg"/>
          </div>
          <div className="absolute flex transform -translate-y-1/2 top-1/4 left-20">
          <h1 className='text-5xl font-bold text-white'>
              Affordable<br/>
              Price for car<br/>
              Servicing 
            </h1>   
          </div>
          <div className="absolute flex transform -translate-y-1/2 top-1/2 w-2/6 left-20">
          <h1 className='font-bold text-white'>
          Drive your car at full speed, but after getting serviced <br/>
          At the right location with the right way of servicing
            </h1>   
          </div>
          <div className="absolute flex transform -translate-y-1/2 top-3/4 w-2/6 left-20">
          <button className="btn btn-warning me-4">Warning</button>
          <button className="btn btn-outline btn-warning">Warning</button>
          </div>
          <div className="absolute flex transform -translate-y-1/2 right-5 bottom-0">
            <a href={`#slide${prev}`} className="btn btn-circle me-8  ">❮</a>  
            <a href={`#slide${next}`} className="btn btn-circle ">❯</a> 
          </div> 
        </div> 
    );
};

export default BannerItem;