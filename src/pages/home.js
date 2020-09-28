import React, {Component} from "react";
// import { Spinner } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBus, faPhone, faCheck } from '@fortawesome/free-solid-svg-icons';
import {NavLink} from "react-router-dom";
//images
import banner from "../assets/ba6.jpg";
import banner1 from "../assets/ba6.jpg";
import banner2 from "../assets/ba5.jpg";
import banner3 from "../assets/ba3.jpg";
import Products from "./products";
import Footer from "../components/Common/Footer";
import "../App.css";

class Home extends Component {
    constructor(props) {
        super(props) 
            this.state = {
                slide: 1
            }
        this.renderSlide = this.renderSlide.bind(this);
    }

    renderSlide() {
        const { slide } = this.state;
        switch (slide) {
          case 1:
            return (
              <>
                <div className="banner-image">
                  <img src={banner} alt="foody banner" />
                </div>
              </>
            );
          case 2:
            return (
              <div className="banner-image">
                <img src={banner1} alt="foody banner" />
              </div>
            );
          case 3:
            return (
              <>
                <div className="banner-image">
                  <img src={banner2} alt="foody banner" />
                      </div>
              </>
            )
          default: {
            return (
              <>
                <div className="banner-image">
                  <img src={banner3} alt="foody banner" />
                </div>
              </>
            )
          }
        }
      };

    
      setNextImage = () => {
        const { slide } = this.state;
    
        if (slide >= 3) {
          this.setState({
            slide: 0
          })
        } else {
          this.setState({
            slide: slide + 1
          })
        }
      }
    render() {
        // const rendImage = this.renderSlide();
        setTimeout(this.setNextImage, 10000);
    return (
        <div className="home">
          {/* <div className="bg"></div> */}
          <div className="banner-image">
              <img src={banner} alt="foody banner" />
          </div>
          <div className="policy">
            <div className="container">
            <div className="row">
            <div className="col-md-4 col-sm-4 col-xs-4">
              <div className="flex1">
              <div className="policy-icon">
                <NavLink className="link" to="">
              <FontAwesomeIcon icon={faBus} />
              </NavLink>
              </div>
              <div className="policy-text">
                <h4>Delivery</h4>
                <p>We deliver to locations around our
                  stores,within Lagos.</p>
              </div>
            </div>
              </div>
            <div className="col-md-4">
            <div className="flex1">
              <div className="policy-icon">
                <NavLink className="link" to="">
              <FontAwesomeIcon icon={faCheck} />
              </NavLink>
              </div>
              <div className="policy-text">
                <h4>Quality Assured</h4>
                <p>Our products are fresh, 100% natural, 
                  delicious, nutritious, healthy and safe for consumption</p>
              </div>
            </div>
            </div>
            <div className="col-md-4">
            <div className="flex1">
              <div className="policy-icon">
                <NavLink className="link" to="">
              <FontAwesomeIcon icon={faPhone} />
              </NavLink>
              </div>
              <div className="policy-text">
                <h4>Friendly Service</h4>
                <p>We give you an outstandingly delightful and satisfying experience
                  every time we connect or interact with you across all channels</p>
              </div>
            </div>
            </div>
            </div>
            </div>
          </div>
          <div className="view cat-box flex1">
           <div className="box">
             <div className="bg-hover"></div>
              <h4>Parfait & Fruits </h4>
           </div>
           <div className="box">
             <div className="bg-hover"></div>
              <h4>Parfait & Fruits </h4>
           </div>
           <div className="box">
           <div className="bg-hover"></div>
              <h4>Salads</h4>
           </div>
           <div className="box">
           <div className="bg-hover"></div>
              <h4>Sandwich & Wraps</h4>
           </div>
            </div>
            <div className="view">
              <h4>Customers Favourite</h4>
             <Products/>
            </div>
          <Footer/>
        </div>
    )
}
}

export default Home; 