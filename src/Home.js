import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import image from './headerimage.png';
import carImage from './carimage.jpg';
import { useEffect, useState } from "react";
import './App.css'
import axios from "axios";
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';





const Home = () => {
    return (

        <div className="body">

            <div className="header">

                <nav className="topnav">
                    <NavLink exact to="/" activeClassName="active">Home</NavLink>
                    <NavLink to="/compare" activeClassName="active">Compare</NavLink>
                    <NavLink to="/timeline" activeClassName="active">Timeline</NavLink>
                </nav>


                <img className="headerimage" src={image} alt="image" />

                <h1 className="heading">
                    DRIVESHPERE
                </h1>

                <p className="description">
                    The “car” API is a service offered by carinfo.com, a popular website for researching and reviewing cars. With API, users can access a comprehensive database of car information, such as the make, model, year, trim level, pricing, features, specifications, and expert reviews.
                </p>
            </div>

            <div className="section-1">


                <div class="car-search-container">
                    <div class="car-search">
                        <form>
                            <div class="form-group">
                                <label for="make">Make:</label>
                                <select name="make" id="make">
                                    <option value="">--Select Make--</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="model">Model:</label>
                                <select name="model" id="model">
                                    <option value="">--Select Model--</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="year">Year:</label>
                                <select name="year" id="year">
                                    <option value="">--Select Year--</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <button type="button" class="search-btn">Search</button>
                            </div>
                        </form>
                    </div>
                </div>


                <div className="home-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <img src={carImage} alt="Car" className="car-image" />
                            </div>
                            <div className="col-md-6 text">
                                <h2>Find the Best Car for You</h2>
                                <p>Search through our vast database of cars to find the one that suits your needs. We offer comprehensive information on cars, including specifications, features, and reviews from real customers. With our user-friendly platform, you can easily compare different cars and make an informed decision.</p>
                                <a href="/compare" className="btn btn-primary">Compare Cars</a>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Home



