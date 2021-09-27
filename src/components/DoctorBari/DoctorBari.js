import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Doctor from '../Doctor/Doctor';
import './DoctorBari.css'

const DoctorBari = () => {
    const [doctorinfo, setDoctorinfo] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./tool.JSON')
            .then(res => res.json())
            .then(data => setDoctorinfo(data));
    }, []);

    const handleAddToCart = (doctor) => {
        console.log(doctor)
        const newCart = [...cart, doctor];
        setCart(newCart)
    }


    return (
        <div className="container doctorbari">

            <div className="doctor row row-cols-1 row-cols-md-3 row-cols-lg-3 g-4">

                {
                    doctorinfo.map(doctor => <Doctor
                        key={doctor.id}

                        doctor={doctor}
                        handleAddToCart={handleAddToCart}
                    >

                    </Doctor>)
                }
            </div>

            <div className="container cart">

                <Cart cart={cart}></Cart>

            </div>


        </div>


    );
};

export default DoctorBari;




