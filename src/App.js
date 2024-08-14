import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import ErpSS from './ErpSS';
import EzraSS from './EzraSS';
import LaptopSS from './LaptopWebSS';
import Report from "./images/Private-RateRevision.jpg";
import EzraReport from "./images/Ezra_Property_SS/Dashboard.png";
import LaptopReport from "./images/Laptop_website/filtered-products.JPG"; 
import './App.css'
const App = () => {
  const [showErpSS, setShowErpSS] = useState(false);
  const [showEzraSS, setShowEzraSS] = useState(false);
  const [showLaptopSS, setShowLaptopSS] = useState(false); 

  const handleShowErpSS = () => {
    setShowErpSS(!showErpSS);
    if (showEzraSS) setShowEzraSS(false);
    if (showLaptopSS) setShowLaptopSS(false); 
  };

  const handleShowEzraSS = () => {
    setShowEzraSS(!showEzraSS);
    if (showErpSS) setShowErpSS(false);
    if (showLaptopSS) setShowLaptopSS(false);
  };

  const handleShowLaptopSS = () => {
    setShowLaptopSS(!showLaptopSS);
    if (showErpSS) setShowErpSS(false);
    if (showEzraSS) setShowEzraSS(false);
  };

  return (
    <>
      <h1 className="text-center">Project Screen Shots</h1>
      <div className="d-flex justify-content-around flex-wrap">
        <Card 
          className="m-3 p-3 text-center" 
          style={{ width: '18rem', cursor: 'pointer', height: '18rem' }}
          onClick={handleShowErpSS}
        >
          <Card.Body>
            <Card.Title>{showErpSS ? 'Hide ERPSS' : 'Show ERP Screen Shots'}</Card.Title>
            <Card.Img variant="top" src={Report} />
            <Card.Text className='fw-bold'>
              Click to {showErpSS ? 'hide' : 'view'} ERP Screen Shots.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card 
          className="m-3 p-3 text-center" 
          style={{ width: '18rem', cursor: 'pointer', height: '18rem' }}
          onClick={handleShowEzraSS}
        >
          <Card.Body>
            <Card.Title>{showEzraSS ? 'Hide EzraSS' : 'Show Ezra Screen Shots'}</Card.Title>
            <Card.Img variant="top" src={EzraReport} />
            <Card.Text className='fw-bold'>
              Click to {showEzraSS ? 'hide' : 'view'} Ezra Screen Shots.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card 
          className="m-3 p-3 text-center" 
          style={{ width: '18rem', cursor: 'pointer', height: '18rem' }}
          onClick={handleShowLaptopSS}
        >
          <Card.Body>
            <Card.Title>{showLaptopSS ? 'Hide Laptop Screen Shots' : 'Show Laptop Screen Shots'}</Card.Title>
            <Card.Img variant="top" src={LaptopReport} />
            <Card.Text className='fw-bold'>
              Click to {showLaptopSS ? 'hide' : 'view'} Laptop Screen Shots.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      {showErpSS && <ErpSS />}
      {showEzraSS && <EzraSS />}
      {showLaptopSS && <LaptopSS />} 
    </>
  );
};

export default App;
