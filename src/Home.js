import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from './images/headerimage.png';
import carImage from './images/carimage.jpg';
import logo from "./images/Logo.png";
import { useEffect, useState } from "react";
import './App.css'
import Footer from "./components/footer";

import axios from "axios";
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';

import youtube from "./images/youtube_icon.svg";
import facebook from "./images/facebook_icon.svg";
import twitter from "./images/twitter_icon.svg";
import instagram from "./images/instagram_icon.svg";

const Home = () => {
    return (

        <div className="body">

            <div className="header">

                <nav className="topnav">
                    <NavLink to="/" activeclassname="active">Home</NavLink>
                    <NavLink to="/Compare" activeclassname="active">Compare</NavLink>
                    <NavLink to="/Timeline" activeclassname="active">Timeline</NavLink>
                </nav>

                <div className="container d-flex justify-content-center">
                    <img className="logo" src={logo} alt="image" />
                </div>

                <img className="headerimage" src={image} alt="image" />

                <div className="container d-flex justify-content-center">
                    <h1 className="heading">DRIVESHPERE</h1>
                </div>


                <p className="description">
                    The Car Specs API, available on RapidAPI, is a powerful tool for accessing a wealth of information about cars. This API allows users to access a vast database of car details, including make, model, year, trim level, pricing, features, specifications, and expert reviews. The data is sourced from carinfo.com, a trusted website for researching and reviewing cars.
                </p>
            </div>

            <div className="section-1">




                <div className="d-flex align-items-center justify-content-center">
                    <div className="card">
                        <div className="card-body">
                            <form className="row g-4 d-flex align-items-end">
                                <div className="col-md-3">
                                    <label htmlFor="make" className="form-label">Make:</label>
                                    <select name="make" id="make" className="form-control">
                                        <option value="">--Select Make--</option>
                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="model" className="form-label">Model:</label>
                                    <select name="model" id="model" className="form-control">
                                        <option value="">--Select Model--</option>
                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="year" className="form-label">Year:</label>
                                    <select name="year" id="year" className="form-control">
                                        <option value="">--Select Year--</option>
                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <button type="button" className="btn btn-primary w-100">Search</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="home-section">

                    <div className="container">
                        <div className="row">
                            <div className="about">
                                <div className="col-md-6">
                                    <img src={carImage} alt="Car" className="img-fluid car-image" />
                                </div>
                                <div className="col-md-6 d-flex align-items-left">
                                    <div className="text">
                                        <h2>Find the Best Car for You</h2>
                                        <p>
                                            Search through our vast database of cars to find the one that suits your needs. We offer comprehensive information on cars, including specifications, features, and graphs displaying relevant and informative information. With our user-friendly platform, you can easily compare different cars and make an informed decision.
                                        </p>
                                        <a href="/compare" className="btn btn-primary btn-lg">Compare Cars</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div>
                    
                </div>


                <br></br>
                <br></br>
                <br></br>
                <Footer />

            </div>

        </div>



    )
}

export default Home



