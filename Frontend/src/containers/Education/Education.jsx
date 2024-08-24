import React, { useState, useEffect } from "react";
import "./Education.scss";
import { images } from "../../constants";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";

const Education = () => {
  const [abouts, setAbouts] = useState([]);
  useEffect(() => {
    const query = '*[_type == "education"]';
    client.fetch(query).then((data) => setAbouts(data));
  }, []);
  return (
    <>
      <div className="timeline">
        {abouts.map((about, index) => (
          <div className="edcontainer right-edcontainer" key={index}>
            <img src={urlFor(about.imageurl)} />
            <div className="text-box">
              <h2>{about.name}</h2>
              <small>{about.cousrenameduration}</small>
              <p>
                {about.universityname}
              </p>
              <p>
                {about.Grade}
              </p>
              <span className="right-edcontainer-arrow"></span>
            </div>
          </div>
        ))}

        <div className="edcontainer left-edcontainer">
          <div className="text-box">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlPiXxOPNHA5zidD5xNTyLFgToF_TLJeoGTjW0vKSsIl7oB9ieM7Gxr0CyBj9gEwc6yQ&usqp=CAU" />
            <h2>Vivekanand education society's college of arts science and commerce</h2>
            <small>Bachelor in Computer Science - 2021 - 2024 Completed</small>
            <p>Mumbai University</p>
            <p>CGPA - 8.73</p>
            <span className="left-edcontainer-arrow"></span>
          </div>
        </div>
        <div className="edcontainer right-edcontainer">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpM1qe8ewwf73sfmrTCgLDko5cHkynV5qZvskrgqr4IhVURcvlpcNY8ywwT3nrCBl-iCo&usqp=CAU" />
          <div className="text-box">
            <h2>Nowrosjee Wadia College</h2>
            <small>HSC - 2021</small>
            <p>
            Pune University
            </p>
            <p>
              78.50%
            </p>
            <span className="right-edcontainer-arrow"></span>
          </div>
        </div>
        <div className="edcontainer left-edcontainer">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO4_E2l6uOxyFcSalaHicaEl_5C1DEiJq8HQ&s" alt="logo" />
          <div className="text-box">
            <h2>J.N petit technical school</h2>
            <small> SSC - 2019</small>
            <p>Maharashtra State Board</p>
            <p>64.20%</p>
            <span className="left-edcontainer-arrow"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
