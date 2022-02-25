import React, {useState} from 'react'
import Navbar from './Navbar'


import image from "../images/clean.png"
import giffy from "../images/giphy.gif"
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';
import {Carousel} from "react-bootstrap";

const About= () =>{
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return(
        <div>
            <Navbar/>
            {/*<div id="container">*/}
            {/*  */}

            {/*</div>*/}
            {/*<div id="content" style={{marginLeft:"25%"}}>*/}
            {/*    <div id="leftPan">*/}
            {/*        <div id="room">*/}
            {/*            <h2></h2>*/}
            {/*            <img src={imagehasjpg} width="179" height="81" alt=""/>*/}
            {/*            <p><span className="headline">Room Services</span><br/>*/}
            {/*                2 beds,heating and airconditioning system attached,bathtub attached, nice view from the balcony </p>*/}

            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div id="rightPan">*/}
            {/*        <div id="welcome">*/}
            {/*            <h2></h2>*/}
            {/*            <p><span className="headline">TourOn</span><br/>*/}
            {/*                Search and Compare Hundreds of Travel Sites. Find Great Deals for any Hotel Now! Create a Hotel Price Alert and Monitor Lodging Fares for Specific Travel Dates. No hidden costs. Book quick & easy. Save time and money. Exclusive deals*/}
            {/*                . <a href="#">more...</a></p>*/}

            {/*            <div className="clear"></div>*/}
            {/*        </div>*/}
            {/*        <div className="services">*/}
            {/*            <h2></h2>*/}
            {/*            <div className="servItem"><img src={image} width="45" height="40" alt=""/>*/}
            {/*                <p><span className="headline">Lorem ipsum dolor sit amet</span><br/>*/}
            {/*                    Housekeeping is responsible for cleanliness, maintenance, aesthetic upkeep of rooms, public area, back area and surroundings. A hotel survives on the sale of room, food, beverages and other minor services such as the laundry, health club spa and so on. <a*/}
            {/*                        href="#">more...</a></p>*/}
            {/*                <div className="clear"></div>*/}
            {/*            </div>*/}
            {/*            <div className="servItem"><img src={img_services} width="45" height="40"*/}
            {/*                                           alt=""/>*/}
            {/*                <p><span className="headline">Lorem ipsum dolor sit amet</span><br/>*/}
            {/*                    Mauris tincidunt, quam ac porta viverra, turpis sapien egestas <a*/}
            {/*                        href="#">more...</a></p>*/}
            {/*                <div className="clear"></div>*/}
            {/*            </div>*/}
            {/*            <div className="servItem"><img src={img_services_15} width="45" height="40"*/}
            {/*                                           alt=""/>*/}
            {/*                <p><span className="headline">Lorem ipsum dolor sit amet</span><br/>*/}
            {/*                    Mauris tincidunt, quam ac porta viverra, turpis sapien egestas <a*/}
            {/*                        href="#">more...</a></p>*/}
            {/*                <div className="clear"></div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="activities">*/}
            {/*            <h2></h2>*/}
            {/*            <img src={img_activities} width="196" height="70" alt=""/>*/}
            {/*            <p><span className="headline">Lorem ipsum dolor sit amet</span><br/>*/}
            {/*                Discover the great deals, compare hotel prices & save money on your next holiday or trip – get savings when you hotel search with TourOn!*/}
            {/*            </p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className="clear" ></div>*/}
            {/*</div>*/}
            {/*<div className="footer" style={{marginLeft:"25%"}}>*/}
            {/*    <p style={{fontFamily:"fantasy",fontSize:"larger"}}*/}
            {/*    >*/}
            {/*        Copyright &copy;TourOn| Design by Riya Dey(1805013) and Rabeya Hossain Ishita(1805029)</p>*/}
            {/*</div>*/}
        </div>




    )
}

export default About