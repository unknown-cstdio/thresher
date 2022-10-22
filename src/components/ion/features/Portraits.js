import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import Marie from "../../../images/ion-features/Marie.jpg";
import Deepak from "../../../images/ion-features/Deepak.jpg";
import Lana from "../../../images/ion-features/Lana_Edwards.jpg";
import Clarice from "../../../images/ion-features/Clarice.jpg";
import Benard from "../../../images/ion-features/Benard.jpg";
import Frank from "../../../images/ion-features/Frank.jpg";
import Brendalyn from "../../../images/ion-features/Brendalyn.jpg";


const Portraits = () => {
    const responsive = {
        LargeDesktop:{
            breakpoint: {max: 4000, min: 3000},
            items: 5
        },
        desktop: {
            breakpoint: {max:3000, min: 1024},
            items: 3
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1
        }
    };


    return (
        <section className='portraits' id="potraits">
            <Container>
                <Row>
                    <Col>
                        <div className="portraits-bx">
                            <h2>
                                Portraits
                            </h2>
                            <Carousel responsive={responsive} infinite={true} className="portraits-slider">
                                <div className='item'>
                                    <Link to="/projects/innovation/meet-rices-newest-neighbors/ion-feature-bensaci" >
                                        <img src={Marie} alt="Marie Bensaci" className="portrait-image"></img>
                                    </Link>
                                </div>
                                <div className='item'>
                                    <Link to="/projects/innovation/meet-rices-newest-neighbors/ion-feature-doshi" ><img src={Deepak} alt="Deepak Doshi" className="portrait-image"></img></Link>
                                </div>
                                <div className='item'>
                                    <Link to="/projects/innovation/meet-rices-newest-neighbors/ion-feature-edwards" >
                                        <img src={Lana} alt="Lana Edwards" className="portrait-image"></img>
                                    </Link>
                                </div>
                                <div className='item'>
                                    <Link to="/projects/innovation/meet-rices-newest-neighbors/ion-feature-freeman" >
                                        <img src={Clarice} alt="Clarice Freeman" className="portrait-image"></img>
                                    </Link>
                                </div>
                                <div className='item'>
                                    <Link to="/projects/innovation/meet-rices-newest-neighbors/ion-feature-jones" >
                                        <img src={Benard} alt="Benard Jones" className="portrait-image"></img>
                                    </Link>     
                                </div>
                                <div className='item'>
                                    <Link to="/projects/innovation/meet-rices-newest-neighbors/ion-feature-rush" >
                                        <img src={Frank} alt="Frank Rush" className="portrait-image"></img>
                                    </Link>
                                </div>
                                <div className='item'>
                                    <Link to="/projects/innovation/meet-rices-newest-neighbors/ion-feature-vallie" >
                                        <img src={Brendalyn} alt="Brendalyn Vallie" className="portrait-image"></img>
                                    </Link>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}


export default Portraits

