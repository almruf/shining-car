import React, { useState } from "react";
import { useEffect } from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const [Services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);

  return (
    <div className="text-center">
      <div className="">
        <p className="text-2xl font-bold text-orange-600 ">Services </p>
        <h2 className="text-4xl font-semibold"> Our services area</h2>
        <p className="my-4">
          Serving satisfied customers since 2003, Capital Auto Service is your
          headquarters for automotive repair and car maintenance. From oil
          changes to dashboard warning light diagnostics and chassis repairs,
          we'll keep your vehicle performing at is best for wherever the road
          takes you. The best part? All qualified repairs are automatically
          backed by a nationwide warranty for your peace of mind. When it comes
          to auto service in Albany, NY, your vehicle is in excellent hands.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {Services.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)}
      </div>
    </div>
  );
};
export default Services;
