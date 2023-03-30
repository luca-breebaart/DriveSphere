import React from "react";
import { useEffect, useState } from "react";
import './App.css'
import axios from "axios";
import { Chart } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { NavLink } from 'react-router-dom';

//


const Compare = () => {
  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);
  const [generations, setGenerations] = useState([]);
  const [trims, setTrims] = useState([]);
  const [carspecs, setCarSpecs] = useState([]);



  // variables



  const [ShowDataA, setShowDataA] = useState(false);
  const [ShowDataB, setShowDataB] = useState(false);

  const [disableAddButtonA, setDisableAddButtonA] = useState(false);
  const [disableAddButtonB, setDisableAddButtonB] = useState(false);

  const [CarMakeA, setCarMakeA] = useState("");
  const [CarMakeB, setCarMakeB] = useState("");

  const [maxSpeedA, setMaxSpeedA] = useState(0);
  const [maxSpeedB, setMaxSpeedB] = useState(0);

  //engine

  const [CapacityA, setCapacityA] = useState(0);
  const [CylinderLayoutA, setCylinderLayoutA] = useState(0);
  const [EmissionStandardsA, setEmissionStandardsA] = useState(0);
  const [EngineHpA, setEngineHpA] = useState(0);
  const [EngineHpRpmA, setEngineHpRpmA] = useState(0);
  const [EngineTypeA, setEngineTypeA] = useState(0);
  const [InjectionTypeA, setInjectionTypeA] = useState(0);
  const [MaximumTorqueA, setMaximumTorqueA] = useState(0);
  const [RangeA, setRangeA] = useState(0);
  const [NumberOfCylindersA, setNumberOfCylindersA] = useState(0);

  const [CapacityB, setCapacityB] = useState(0);
  const [CylinderLayoutB, setCylinderLayoutB] = useState(0);
  const [EmissionStandardsB, setEmissionStandardsB] = useState(0);
  const [EngineHpB, setEngineHpB] = useState(0);
  const [EngineHpRpmB, setEngineHpRpmB] = useState(0);
  const [EngineTypeB, setEngineTypeB] = useState(0);
  const [InjectionTypeB, setInjectionTypeB] = useState(0);
  const [MaximumTorqueB, setMaximumTorqueB] = useState(0);
  const [RangeB, setRangeB] = useState(0);
  const [NumberOfCylindersB, setNumberOfCylindersB] = useState(0);
  // engine

  // Body and Dimensions

  const [bodyTypeA, setbodyTypeA] = useState(0);
  const [lengthA, setlengthA] = useState(0);
  const [widthA, setwidthA] = useState(0);
  const [heightA, setheightA] = useState(0);
  const [wheelbaseA, setwheelbaseA] = useState(0);
  const [curbWeightA, setcurbWeightA] = useState(0);
  const [fullWeightA, setfullWeightA] = useState(0);

  const [bodyTypeB, setbodyTypeB] = useState(0);
  const [lengthB, setlengthB] = useState(0);
  const [widthB, setwidthB] = useState(0);
  const [heightB, setheightB] = useState(0);
  const [wheelbaseB, setwheelbaseB] = useState(0);
  const [curbWeightB, setcurbWeightB] = useState(0);
  const [fullWeightB, setfullWeightB] = useState(0);

  // Body and Dimensions



  // graph1 - fuel economy
  const [CityFuelA, setCityFuelA] = useState(0);
  const [HighwayFuelA, setHighwayFuelA] = useState(0);
  const [MixedFuelA, setMixedFuelA] = useState(0);

  const [CityFuelB, setCityFuelB] = useState(0);
  const [HighwayFuelB, setHighwayFuelB] = useState(0);
  const [MixedFuelB, setMixedFuelB] = useState(0);
  // graph1




  useEffect(() => {
    axios
      .get('https://car-specs.p.rapidapi.com/v2/cars/makes', {
        headers: {
          'X-RapidAPI-Key': '838240ee49msh00f26afb964ce26p16bf13jsndbbb7923308a',
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
        'X-RapidAPI-Key': '838240ee49msh00f26afb964ce26p16bf13jsndbbb7923308a',
        'X-RapidAPI-Host': 'car-specs.p.rapidapi.com'
      },
    });
    setModels(response.data);
  };

  const fetchGenerations = async (modelId) => {
    const response = await axios.get(`https://car-specs.p.rapidapi.com/v2/cars/models/${modelId}/generations`, {
      headers: {
        'X-RapidAPI-Key': '838240ee49msh00f26afb964ce26p16bf13jsndbbb7923308a',
        'X-RapidAPI-Host': 'car-specs.p.rapidapi.com'
      },
    });
    setGenerations(response.data);
  };

  const fetchTrims = async (generationsId) => {
    const response = await axios.get(`https://car-specs.p.rapidapi.com/v2/cars/generations/${generationsId}/trims`, {
      headers: {
        'X-RapidAPI-Key': '838240ee49msh00f26afb964ce26p16bf13jsndbbb7923308a',
        'X-RapidAPI-Host': 'car-specs.p.rapidapi.com'
      },
    });
    setTrims(response.data);
    //console.log(response.data)
  };

  const fetchCarSpecs = async (trimsId) => {
    const response = await axios.get(`https://car-specs.p.rapidapi.com/v2/cars/trims/${trimsId}`, {
      headers: {
        'X-RapidAPI-Key': '838240ee49msh00f26afb964ce26p16bf13jsndbbb7923308a',
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

  const handleShowDataA = () => {
    setShowDataA(true);
    setDisableAddButtonA(true);
    // Set max speed for Car A here
    setCarMakeA(carspecs.make + ' ' + carspecs.model + ' ' + carspecs.trim)


    //ENGINE
    setCapacityA(carspecs.capacityCm3);
    setCylinderLayoutA(carspecs.cylinderLayout);
    setEmissionStandardsA(carspecs.emissionStandards);
    setEngineHpA(carspecs.engineHp);
    setEngineHpRpmA(carspecs.engineHpRpm);
    setEngineTypeA(carspecs.engineType);
    setInjectionTypeA(carspecs.injectionType);
    setMaximumTorqueA(carspecs.maximumTorqueNM);
    setNumberOfCylindersA(carspecs.numberOfCylinders);
    setRangeA(carspecs.rangeKm);
    //ENGINE

    // Body and Dimensions
    setbodyTypeA(carspecs.bodyType);
    setlengthA(carspecs.lengthMm);
    setwidthA(carspecs.widthMm);
    setheightA(carspecs.heightMm);
    setwheelbaseA(carspecs.wheelbaseMm);
    setcurbWeightA(carspecs.curbWeightKg);
    setfullWeightA(carspecs.fullWeightKg);

    setbodyTypeB(carspecs.bodyType);
    setlengthB(carspecs.lengthMm);
    setwidthB(carspecs.widthMm);
    setheightB(carspecs.heightMm);
    setwheelbaseB(carspecs.wheelbaseMm);
    setcurbWeightB(carspecs.curbWeightKg);
    setfullWeightB(carspecs.fullWeightKg);

    // Body and Dimensions



    setMaxSpeedA(carspecs.maxSpeedKmPerH);


    //graph1
    setCityFuelA(parseFloat(carspecs.cityFuelPer100KmL?.replace(",", ".")));
    setHighwayFuelA(parseFloat(carspecs.highwayFuelPer100KmL?.replace(",", ".")));
    setMixedFuelA(parseFloat(carspecs.mixedFuelConsumptionPer100KmL?.replace(",", ".")));
    //graph1
  };

  const handleShowDataB = () => {
    setShowDataB(true);
    setDisableAddButtonB(true);
    // Set max speed for Car B here
    setCarMakeB(carspecs.make + ' ' + carspecs.model + ' ' + carspecs.trim)

    //ENGINE

    setCapacityB(carspecs.capacityCm3);
    setCylinderLayoutB(carspecs.cylinerLayout);
    setEmissionStandardsB(carspecs.emissionStandards);
    setEngineHpB(carspecs.engineHP);
    setEngineHpRpmB(carspecs.engineHPRpm);
    setEngineTypeB(carspecs.engineType);
    setInjectionTypeB(carspecs.injectionType);
    setMaximumTorqueB(carspecs.maximumTorqueNM);
    setNumberOfCylindersB(carspecs.numberOfCylinders);
    setRangeB(carspecs.rangeKm);
    //

    setMaxSpeedB(carspecs.maxSpeedKmPerH);


    // graph 1
    setCityFuelB(parseFloat(carspecs.cityFuelPer100KmL?.replace(",", ".")));
    setHighwayFuelB(parseFloat(carspecs.highwayFuelPer100KmL?.replace(",", ".")));
    setMixedFuelB(parseFloat(carspecs.mixedFuelConsumptionPer100KmL?.replace(",", ".")));
    // graph 1

  };

  const handleRemoveDataA = () => {
    setShowDataA(false);
    setDisableAddButtonA(false);


    //car info to be displayed
    setCarMakeA("");
    setMaxSpeedA(0);

    //graph1
    setCityFuelA(0);
    setHighwayFuelA(0);
    setMixedFuelA(0);
    //graph1

  };

  const handleRemoveDataB = () => {
    setShowDataB(false);
    setDisableAddButtonB(false);

    //car info to be displayed
    setCarMakeB("");
    setMaxSpeedB(0);

    //graph1
    setCityFuelB(0);
    setHighwayFuelB(0);
    setMixedFuelB(0);
    //graph1

  };


  const dataA = {
    labels: ['City', 'Highway', 'Mixed'],
    datasets: [{
      data: [
        parseFloat(CityFuelA),
        parseFloat(HighwayFuelA),
        parseFloat(MixedFuelA)
      ],
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
      ],
      hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
      ]
    }],
  };

  const dataB = {
    labels: ['City', 'Highway', 'Mixed'],
    datasets: [{
      data: [
        parseFloat(CityFuelB),
        parseFloat(HighwayFuelB),
        parseFloat(MixedFuelB)
      ],
      label: [
        'City',
        'Highway',
        'Mixed'
      ],
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
      ],
      hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
      ]
    }],
  };


  // setup chart component
//   const [userData, setUserData] = useState({
//     labels: UserData.map((data) => data.year),
//     datasets: [
//         {
//             label: 'User Gained',
//             data: UserData.map((data) => data.userGain),
//             backgroundColor: 'rgba(255, 99, 132, 0.5)',
//         },
//         {
//             label: 'User Lost',
//             data: UserData.map((data) => data.userLost),
//             backgroundColor: 'rgba(53, 162, 235, 0.5)',
//         },
//         {
//             label: 'User Lost',
//             data: UserData.map((data) => data.userLost),
//             backgroundColor: 'rgba(53, 162, 235, 0.5)',
//         },
//     ],
// });



  return (
    <div>

      <nav className="topnav">
        <NavLink to="/" activeclassname="active">Home</NavLink>
        <NavLink to="/Compare" activeclassname="active">Compare</NavLink>
        <NavLink to="/Timeline" activeclassname="active">Timeline</NavLink>
      </nav>


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



      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="comparebox">
              <br></br>
              <h3>{CarMakeA}</h3>
              <br></br>
              {ShowDataA ? (
                <>

                  <button className="removebutton" onClick={handleRemoveDataA}>Remove</button>
                  <br></br>

                  <h3>Engine specifications</h3>
                  <hr />
                  <p>Capacity: <strong>{CapacityA} Cm3 </strong></p>
                  <p>CylinderLayout: <strong>{CylinderLayoutA}</strong></p>
                  <p>EmissionStandards: <strong>{EmissionStandardsA}</strong></p>
                  <p>EngineHp: <strong>{EngineHpA} Hp </strong></p>
                  <p>EngineHpRpm: <strong>{EngineHpRpmA}Rpm </strong> </p>
                  <p>EngineType: <strong>{EngineTypeA}</strong></p>
                  <p>InjectionType: <strong>{InjectionTypeA}</strong></p>
                  <p>MaximumTorque:<strong>{MaximumTorqueA} NM </strong></ p >
                  <p>NumberOfCylinders:<strong>{NumberOfCylindersA}</strong> </p>

                  <hr />


                  <h3>Body specifications</h3>
                  <hr />
                  <p>Body Type: <strong>{bodyTypeA}</strong> </p>
                  <p>Body length: <strong>{lengthA} mm</strong> </p>
                  <p>Body width: <strong>{widthA} mm</strong> </p>
                  <p>Body height: <strong>{heightA} mm</strong> </p>
                  <p>Wheel base: <strong>{bodyTypeA} mm</strong> </p>
                  <p>Curb Weight: <strong>{curbWeightA} Kg</strong> </p>
                  <p>full weight: <strong>{fullWeightA} Kg</strong> </p>

                  <hr />

                  <>
                    {CityFuelA && HighwayFuelA && MixedFuelA ? (
                      <Bar data={dataA} />
                    ) : (
                      <p>Loading...</p>
                    )}

                  </>


                </>
              ) : (
                <>
                  <p>Click "Add Car" to show data on your selected car.</p>
                  <br></br>
                  <button className="comparebutton" onClick={handleShowDataA} disabled={disableAddButtonA}>Add Car</button>
                </>
              )}
            </div>
          </div>

          <div className="col-sm-6">
            <div className="comparebox">
              <br></br>
              <h3>{CarMakeB}</h3>
              <br></br>
              {ShowDataB ? (
                <>
                  <button className="removebutton" onClick={handleRemoveDataB}>Remove</button>

                  <p>max speed: {maxSpeedB} km/h</p>



                  <hr />

                  <>
                    {CityFuelB && HighwayFuelB && MixedFuelB ? (
                      <Bar data={dataB} />
                    ) : (
                      <p>Loading...</p>
                    )}

                  </>


                </>
              ) : (
                <>
                  <p>Click "Add Car" to show data on your selected car.</p>
                  <br></br>
                  <button className="comparebutton" onClick={handleShowDataB} disabled={disableAddButtonB}>Add Car</button>

                </>
              )}
            </div>
          </div>
        </div>
      </div>


    </div>



  );
}

export default Compare;



