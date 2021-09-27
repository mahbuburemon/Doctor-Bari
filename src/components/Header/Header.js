import React from 'react';
import logo from '../../images/logo.jpg'
import './Header.css';

const Header = () => {
    return (
        <div className="header">

            <nav className="containerr" r>
                <img className="logo" src={logo} alt="" />

                <h5 className="fs-5">
                    To become the most trusted premier institution serving the sufferings of humanity and
                    people’s welfare oriented activities.
                </h5>
                <br />

                <h3 className="fw-bold">Total Doctor: 100</h3>
            </nav>


        </div>
    );
};

export default Header;