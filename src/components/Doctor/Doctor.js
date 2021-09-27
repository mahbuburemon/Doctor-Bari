import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAmbulance } from '@fortawesome/free-solid-svg-icons'


import './Doctor.css';

const Doctor = (props) => {
    // console.log(props)
    const { Name, img, Qualifications, Designation, Specialty, fee } = props.doctor;
    const element = <FontAwesomeIcon icon={faAmbulance} />

    return (
        <div>
            <div className="">
                <div className="col ">
                    <div className="card" >
                        <img src={img} class="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-name">Name:{Name}</h5>
                            <p><span>Qualifications:</span>{Qualifications}</p>
                            <p><span> Designation:</span>{Designation}</p>
                            <p><span> Specialty:</span>{Specialty}</p>
                            <p><span> Fee:</span>{fee}</p>

                            <button

                                onClick={() => props.handleAddToCart(props.doctor)}

                                className="add-btn"
                            >{element}Emergency Helpline</button>

                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Doctor;