import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import './App.css'
import { Link } from "react-router-dom";
import { Line, Pie } from 'react-chartjs-2';
import { Chart } from "chart.js/auto";
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);
  const [generations, setGenerations] = useState([]);
  const [trims, setTrims] = useState([]);
  const [carspecs, setCarSpecs] = useState([]);

  const [selectedGraph, setSelectedGraph] = useState(null);

  useEffect(() => {
    axios
      .get('https://car-specs.p.rapidapi.com/v2/cars/makes', {
        headers: {
          'X-RapidAPI-Key': '7efb530714msh2068e6ee1436c11p1cfac9jsnccb228054356',
          'X-RapidAPI-Host': 'car-specs.p.rapidapi.com'
        },
      })
      .then((response) => {
        setMakes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const fetchModels = async (makeId) => {
    const response = await axios.get(`https://car-specs.p.rapidapi.com/v2/cars/makes/${makeId}/models`, {
      headers: {
        'X-RapidAPI-Key': '7efb530714msh2068e6ee1436c11p1cfac9jsnccb228054356',
        'X-RapidAPI-Host': 'car-specs.p.rapidapi.com'
      },
    });
    setModels(response.data);
  };

  const fetchGenerations = async (modelId) => {
    const response = await axios.get(`https://car-specs.p.rapidapi.com/v2/cars/models/${modelId}/generations`, {
      headers: {
        'X-RapidAPI-Key': '7efb530714msh2068e6ee1436c11p1cfac9jsnccb228054356',
        'X-RapidAPI-Host': 'car-specs.p.rapidapi.com'
      },
    });
    setGenerations(response.data);
  };

  const fetchTrims = async (generationsId) => {
    const response = await axios.get(`https://car-specs.p.rapidapi.com/v2/cars/generations/${generationsId}/trims`, {
      headers: {
        'X-RapidAPI-Key': '7efb530714msh2068e6ee1436c11p1cfac9jsnccb228054356',
        'X-RapidAPI-Host': 'car-specs.p.rapidapi.com'
      },
    });
    setTrims(response.data);
    //console.log(response.data)
  };

  const fetchCarSpecs = async (trimsId) => {
    const response = await axios.get(`https://car-specs.p.rapidapi.com/v2/cars/trims/${trimsId}`, {
      headers: {
        'X-RapidAPI-Key': '7efb530714msh2068e6ee1436c11p1cfac9jsnccb228054356',
        'X-RapidAPI-Host': 'car-specs.p.rapidapi.com'
      },
    });
    setCarSpecs(response.data);
    console.log(carspecs);
  };

  // changes to api ID
  const handleMakeChange = (e) => {
    const makeId = e.target.value;
    fetchModels(makeId);
  };

  const handleModelChange = (e) => {
    const modelId = e.target.value;
    fetchGenerations(modelId);
  };

  const handleGenerationsChange = (e) => {
    const generationsId = e.target.value;
    fetchTrims(generationsId);
  };

  const handleTrimsChange = (e) => {
    const trimsId = e.target.value;
    fetchCarSpecs(trimsId);
  };
  // changes to api ID

  const FuelConsumption = {
    labels: ['Highway', 'Mixed', 'City'],
    datasets: [{
      data: [
        parseFloat(carspecs?.highwayFuelPer100KmL?.replace(",", ".")),
        parseFloat(carspecs?.mixedFuelConsumptionPer100KmL?.replace(",", ".")),
        parseFloat(carspecs?.cityFuelPer100KmL?.replace(",", "."))
      ],
      label: ['Fuel Consumption'],
      backgroundColor: '#007bff',
      borderColor: '#007bff',
      hoverBackgroundColor: '#007bff',
    }],
  };

  const Acceleration = {
    labels: ['0 km/h', '100 km/h'],
    datasets: [{
      data: [
        parseFloat("0"),
        parseFloat(carspecs?.acceleration0To100KmPerHS?.replace(",", "."))
      ],
      label: ['Acceleration 0 - 100Km/H'],
      backgroundColor: '#007bff',
      borderColor: '#007bff',
      hoverBackgroundColor: '#007bff',
    }],
  };

  const range = {
    labels: ['Min Range', 'Max Range'],
    datasets: [{
      data: [
        parseFloat(carspecs?.rangeKm?.split('|')[0].replace(',', '')),
        parseFloat(carspecs?.rangeKm?.split('|')[1].replace(',', ''))
      ],
      label: 'Range Km',
      backgroundColor: '#007bff',
      borderColor: '#007bff',
      hoverBackgroundColor: '#007bff',
    }]
  };




  return (
    <div className="App">

      <nav className="topnav">
        <NavLink to="/" activeclassname="active">Home</NavLink>
        <NavLink to="/Compare" activeclassname="active">Compare</NavLink>
        <NavLink to="/Timeline" activeclassname="active">Timeline</NavLink>
      </nav>

      <br>
      </br>

      <div className="d-flex align-items-center justify-content-center">
        <div className="card2">
          <div className="card-body">
            <form className="row g-4 d-flex align-items-end">
              <div className="col-md-3">
                <label htmlFor="make" className="form-label">Make:</label>
                <select name="make" id="make" className="form-control" onChange={handleMakeChange}>
                  <option value="">--Select Make--</option>
                  {makes.map((make) => (
                    <option key={make.id} value={make.id}>
                      {make.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-3">
                <label htmlFor="model" className="form-label">Model:</label>
                <select name="model" id="model" className="form-control" onChange={handleModelChange}>
                  <option value="">--Select Model--</option>
                  {models.map((model) => (
                    <option key={model.id} value={model.id}>
                      {model.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-3">
                <label htmlFor="generation" className="form-label">Generation:</label>
                <select name="generation" id="generation" className="form-control" onChange={handleGenerationsChange}>
                  <option value="">--Select Generation--</option>
                  {generations.map((generation) => (
                    <option key={generation.id} value={generation.id}>
                      {generation.yearFrom + " to " + generation.yearTo}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-3">
                <label htmlFor="trim" className="form-label">Trim:</label >
                <select name="trim" id="trim" className="form-control" onChange={handleTrimsChange} >
                  <option value="">--Select Trim--</option>
                  {trims.map((trim) => (
                    <option key={trim.id} value={trim.id}>
                      {trim.trim}
                    </option>
                  ))}
                </select>
              </div>
            </form>
          </div>
        </div>
      </div>

      <br>
      </br>
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>

      <div className="d-flex align-items-center justify-content-center">
        <div className="card3">
          <div className="card-body">
            <form className="row g-4 d-flex align-items-end">
              <div className="col-md-12">
                <label htmlFor="graph" className="form-label">Select a Graph:</label>
                <select name="graph" id="graph" className="form-select" onChange={(event) => setSelectedGraph(event.target.value)}>
                  <option value="">Select a graph</option>
                  <option value="fuelConsumption">Fuel Consumption</option>
                  <option value="acceleration">Acceleration</option>
                  <option value="range">Range</option>
                </select>
              </div>
            </form>
          </div>
        </div>
      </div>

      <br>
      </br>


      <div className="container" style={{ display: selectedGraph === "fuelConsumption" ? "block" : "none" }}>
        <div className="row justify-content-center">
          <div className="col-8">
            {carspecs.cityFuelPer100KmL && carspecs.highwayFuelPer100KmL && carspecs.mixedFuelConsumptionPer100KmL ? (
              <Line data={FuelConsumption} />
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>

      <div className="container" style={{ display: selectedGraph === "acceleration" ? "block" : "none" }}>
        <div className="row justify-content-center">
          <div className="col-8">
            {carspecs.acceleration0To100KmPerHS ? (
              <Line data={Acceleration} />
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>

      <div className="container" style={{ display: selectedGraph === "range" ? "block" : "none" }}>
        <div className="row justify-content-center">
          <div className="col-8">
            {carspecs.rangeKm ? (
              <Line data={range} />
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
    </div>

    
  );
}

export default App;



