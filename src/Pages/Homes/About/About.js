import React from 'react';
import Person from '../../../assets/images/about_us/person.jpg'
import Parts from '../../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div className="hero my-20">
        <div className="hero-content  flex-col lg:flex-row">
          <div className='relative w-1/2'>
          <img src={Person} alt='' className=" w-4/5 h-full rounded-lg shadow-2xl" />
          <img src={Parts} alt='' className="absolute w-3/5 right-5 top-1/2 rounded-lg shadow-2xl border-4" />
          </div>
          <div className='w-1/2'>
          <h2 className='text-2xl font-bold text-orange-600'>About us</h2>
            <h1 className="text-5xl font-bold my-4">We are qualified <br /> & of experience <br /> in this field</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">more info</button>
          </div>
        </div>
      </div>
    );
};

export default About;