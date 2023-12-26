
import React from 'react';
import './App.css'; 
import fortniteImage from './assets/download (1).jpg';
import image1 from './assets/images1.jpg';
import image2 from './assets/download2.jpg';
import image3 from './assets/download4.jpg';

const App = () => {
  return (
    <div className="container">
      <div className="mt-10 text-center">
        <p>Epic Games: An American Video Game And Software Developer And Publisher Based In Cary, North Carolina</p>
        
        <img src="/assets/download (1).jpg" alt="fortnite.jpg" className="img-fluid" />
        <p> </p>
        <button type="button" className="btn btn-light">Visit Website</button>
        <div className="card-group">
          <div className="card">
            <img src="/assets/images1.jpg" className="card-img-top" alt="fortnite1" />
            <p className="mt-3 single-line"> Explore Large, Destructible Environments <br/>Where No Two Games Are Ever The Same</p>
          </div>
          <div className="card">
            <img src="/assets/download2.jpg" className="card-img-top" alt="fortnite2" />
            <p className="mt-3 single-line">Team Up With Friends By Sprinting,<br/> Climbing And Smashing Your Way To<br/> Earn Your Victory Royale</p>
          </div>
          <div className="card">
            <img src="/assets/download4.jpg" className="card-img-top" alt="fortnite3" />
            <p className="mt-3 single-line">Discover Even More Ways To Play Across <br/>Thousands Of Creator-Made Game Genres
</p>
          </div>
        </div>
        <h2>Our Contribution</h2>
        <p className="single-line">Our core offering extends beyond mere protit generation; we emphasize the growth and active involvement of our user community, Collaborating with us<br/> represents an investment, rather than a mere expenditure. Our dedication to providing distinctive digital interactions guarantees unparalleled benefits for our clientele.

</p>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <div className="metrics single-line">
          <h1 className="ms-5">5M</h1>
          <p className="mt-3 ms-3 me-2">Daily User Engagements</p>
        </div>
        <div className="metrics single-line">
          <h1>$500K</h1>
          <p className="mt-3 me-5">Revenue Surge for a platform</p>
        </div>
        <div className="metrics single-line">
          <h1>10X</h1>
          <p className="mt-3 me-5">ROAS in all our marketing campaigns</p>
        </div>
      </div>
      <div className="text-center mt-5 mb-5">
        <h2>Interested In Diving Deeper Into Project?</h2>
        <p className="single-line">If you'd like to explore further details about our initiatives or any of our <br/> affiliated brands, don't hesitate to connect. You can reach out to us via <br/>email at <a href="mailto:hello@abc.com">hello@abc.com</a> or give us a call <a href="tel:+9148020802730">+91 48020802730</a>.</p>
        <div className="button-group">
          <button type="button" className="btn btn-dark btn-outline-light">Ring Us on Skype</button>
          <button type="button" className="btn btn-light">Contact Us</button>
        </div>
      </div>
      <p className="text-center single-line">&copy; 2019-2023 ABC Technology Solution Pvt. Ltd. All Rights Reserved</p>
       
    </div>
  );
};

export default App;
