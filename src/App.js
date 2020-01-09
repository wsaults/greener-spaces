import React from 'react';
import earthLogo from './earth-logo.png';
import styroCup from './styro-cup.png';
import napkins from './napkins.png';
import leaf from './Leaf_icon_09.svg';
import { Card, Form, Input, Button } from './Form';
import './App.css';

function App() {
  document.title = "Greener Spaces";
  return (
    <div className="App">
      <header className="App-header">
        <img src={leaf} className="Leaf-logo" alt="leaf-logo" />
        <h1>Greener Spaces</h1>
        <p className="Subheader">Transforming your company's carbon footprint</p>
        <div className="Fact-container">
          <div>
            <img src={earthLogo} className="Earth-logo" alt="earth" />
            <p>In the past 50 years, humans have consumed more resources than in all previous history. U.S. EPA, 2009.</p>
            <a href="/">Source</a>
          </div>
          <div>
            <img src={styroCup} className="Earth-logo" alt="styrofoam" />
            <p>Plastic bags and Styrofoam containers can take up to thousands of years to decompose leading to marine animal death and the contamination of soil and water.</p>
            <a href="/">Source</a>
          </div>
          <div>
            <img src={napkins} className="Earth-logo" alt="napkins" />
            <p>Recycled paper produces about 25% fewer total emissions than conventional paper.</p>
            <a href="/">Source</a>
          </div>
        </div>
      </header>
      <div className="Section-one">
        <h2>Product Quality</h2>
        <div className="Quality-Container">
          <p><strong>All of our products are genuine eco-friendly green certified</strong> by various programs that have been set up (in the form of joint ventures with the United States Environment Protection Agency and the United States Department of Energy).
Some of these programs use eco labels such as the <strong>“Energy Star”</strong> and the <strong>“Green Seal”</strong> to certify and endorse the eco-friendly products.</p>
          <div>
            <h5>Some of our most popular green product brands include:</h5>
            <ul>
              <li>GreenLine Paper Company</li>
              <li>Seventh Generation</li>
              <li>Pacific Gas and Electric Company</li>
              <li>The Green Products Company</li>
              <li>Green Home</li>
              <li>Green Starfish Inc</li>
              <li>Aiso.net</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="Section-four">
        <h2>Products</h2>
        <div className="Product-Container">
          <div>
            <h5>Enviromentally Save Napkins</h5>
            <img src={napkins} className="Earth-logo" alt="napkins" />
            <p>Napkins for your hands</p>
          </div>
          <div>
            <h5>Product 1</h5>
            <img src={napkins} className="Earth-logo" alt="napkins" />
            <p>Napkins for your hands</p>
          </div>
          <div>
            <h5>Product 1</h5>
            <img src={napkins} className="Earth-logo" alt="napkins" />
            <p>Napkins for your hands</p>
          </div>
          <div>
            <h5>Product 1</h5>
            <img src={napkins} className="Earth-logo" alt="napkins" />
            <p>Napkins for your hands</p>
          </div>
          <div>
            <h5>Product 1</h5>
            <img src={napkins} className="Earth-logo" alt="napkins" />
            <p>Napkins for your hands</p>
          </div>
          <div>
            <h5>Product 1</h5>
            <img src={napkins} className="Earth-logo" alt="napkins" />
            <p>Napkins for your hands</p>
          </div>
          <div>
            <h5>Product 1</h5>
            <img src={napkins} className="Earth-logo" alt="napkins" />
            <p>Napkins for your hands</p>
          </div>
          <div>
            <h5>Product 1</h5>
            <img src={napkins} className="Earth-logo" alt="napkins" />
            <p>Napkins for your hands</p>
          </div>
        </div>
      </div>
      <div className="Section-two">
        <h2>Customer Loyalty Program</h2>
        <div className="rewards">
          <h5>Members only savings</h5>
          <ul>
            <li>Wholesale pricing on green products for your office space</li>
          </ul>
          <h5>Recycling Rewards</h5>
          <ul>
            <li>Get $2 back in rewards when you recycle your ink & toner cartridges. Up to 10 cartridges per month</li>
          </ul>
          <h5>Rewards for Reviews</h5>
          <ul>
            <li>Tell us what you think about our products & services, and get $2 back in rewards. Up to 3 per month</li>
          </ul>
          <h5>Earn Points</h5>
          <ul>
            <li>Earn 1 point for every dollar spent in your account. Rewards points can be redeemed online for gift certificates.</li>
          </ul>
        </div>
      </div>
      <div className="Section-three">
        <h2>Contact Us</h2>
        <Card className="card">
          <Form>
            <Input
              className="Email"
              type="email"
              name="email"
              placeholder="email"
            />
            <Button
              className="btn btn-success ForgotPassword__submit">
              Submit
            </Button>
          </Form>
        </Card>
      </div>
      <footer className="App-footer">
        <p>©2020 Greener Spaces. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
