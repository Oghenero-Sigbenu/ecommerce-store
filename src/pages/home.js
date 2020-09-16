import React, {Component} from "react";
// import { Spinner } from "reactstrap";

//images
import banner from "../assets/ba6.jpg";
import banner1 from "../assets/ba6.jpg";
import banner2 from "../assets/ba5.jpg";
import banner3 from "../assets/ba3.jpg";


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
                  &&  !== ""      </div>
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
        <>
          <div className="banner-image">
              <img src={banner} alt="foody banner" />
          </div>
        </>
    )
}
}

export default Home; 