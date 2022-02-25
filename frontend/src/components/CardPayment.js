import React from "react";


import {Button, TextField} from "@mui/material";
import logo from "../images/logoproject.jpg";
import "../CSSfolder/style.css"

import {customer_id, mail, nav, Setting} from "../App";
import {check_indate, check_outDate, duration} from "./Home";
import axios from "axios";
import {hotel_id, hotelDeatils} from "./AfterSearchFromHome";
import {cost, rooms, services} from "./AfterSubmitBooking";
import Form from "react-bootstrap/Form";
import Box from "@mui/material/Box";
import Cookies from "universal-cookie";
var media;
const cookies = new Cookies();
const CardPayment=()=>
{
    const setMedia=async (val)=>{
        media=val;
    }
    const click=async ()=>
    {
        console.log(media)
        console.log(check_outDate);
        var num=document.getElementById("number").value;
        try{

            var res=await  axios.post('http://localhost:8080/booking',{
                hotelRooms:hotelDeatils,
                hotel_id:hotel_id,
                check_indate:check_indate,
                check_outDate:check_outDate,
                duration:duration,
                customer_id:customer_id,
                mail:mail,
                booked_rooms:rooms,
                services:services,
                payMethod:media,
                payNumber:num,
                cost:cost
            })
            if(res.data.status=="success")
            {
                console.log("yayyyyyy");
                alert("succesfully booked");
            }
        }
        catch(e){
            console.log(e);
        }
    }
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light navcontainer" >
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="logo"/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto">
                        <li style={{cursor: 'pointer', marginLeft: "40px", fontFamily: 'monospace',fontSize:"large"}}
                            className="nav-item" onClick={() => {
                            nav("/home")
                        }}>
                            Home
                        </li>
                        <li style={{cursor: 'pointer', marginLeft: "40px", fontFamily: 'monospace',fontSize:"large"}}
                            className="nav-item" onClick={()=>{
                            cookies.remove('user',{ path: '/' })
                            Setting(false,null,null,null);
                            nav("/home")
                        }}>
                            Logout
                        </li>

                    </ul>

                </div>
            </nav>

            <div className="form-container">
                <div style={{width:"680px"}} className="container" >

                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-md-4 col-md-offset-4">
                                <div style={{width:"520px"}} className="panel panel-default">
                                    <div className="panel-heading">
                                        <div className="row">
                                            <h3 className="text-center">Payment Details</h3>
                                            <img className="img-responsive cc-img"
                                                 src="http://www.prepbootstrap.com/Content/images/shared/misc/creditcardicons.png"></img>
                                        </div>
                                    </div>
                                    <Box
                                        component="form"
                                        sx={{
                                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <div>
                                            <p style={{textAlign:"center",fontFamily:"fantasy",marginTop:"3%"}}>Enter card Number</p>
                                            <input type="text" placeholder="Enter card number" style={{width:"50%",marginLeft:"25%",textAlign:"center",background:"white"}} id="number"/>
                                            <p style={{textAlign:"center",fontFamily:"fantasy",marginTop:"1%"}}>Service Provider</p>
                                            <Form.Select aria-label="Default select example" style={{width:"50%",marginLeft:"25%",textAlign:"center"}} onChange={e => {
                                                console.log("e.target.value", e.target.value);
                                                setMedia(e.target.value);
                                            }}>

                                                <option value="visa">visa</option>
                                                <option value="paypal">paypal</option>
                                                <option value="mastercard">mastercard</option>
                                            </Form.Select>
                                            <TextField style={{width:"50%",marginLeft:"25%",textAlign:"center",marginTop:"5%",fontFamily:"fantasy"}}
                                                       id="outlined-read-only-input"
                                                       label="Read Only"
                                                       defaultValue={cost}
                                                       InputProps={{
                                                           readOnly: true,
                                                       }}
                                            />
                                            <Button variant="contained" color="success" style={{width:"50%",marginLeft:"25%",textAlign:"center",marginTop:"2%"}} onClick={()=>{click()}}>
                                                Proceed
                                            </Button>
                                            <Button variant="contained"  style={{width:"50%",marginLeft:"25%",textAlign:"center",marginTop:"2%",background:"#483248"}}
                                                    onClick={() => {
                                                        nav("/afterbookingbutton")
                                                    }}>
                                                Go Back
                                            </Button>
                                        </div>
                                    </Box>
                                    {/*<div className="panel-body">*/}
                                        {/*<form role="form">*/}
                                        {/*    <div className="row">*/}
                                        {/*        <div className="col-xs-12">*/}
                                        {/*            <div className="form-group">*/}
                                        {/*                <label>CARD NUMBER</label>*/}
                                        {/*                <div className="input-group">*/}
                                        {/*                    <input type="tel" className="form-control"*/}
                                        {/*                           placeholder="Valid Card Number" id="cardNumber"/>*/}
                                        {/*                    <span className="input-group-addon"><span*/}
                                        {/*                        className="fa fa-credit-card"></span></span>*/}
                                        {/*                </div>*/}
                                        {/*            </div>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*    <div className="row">*/}
                                        {/*        <div className="col-xs-7 col-md-7">*/}
                                        {/*            <div >*/}
                                        {/*                <label>Expiration DATE</label>*/}
                                        {/*                <input type="date" className="form-control" placeholder="mm/yy"/>*/}
                                        {/*            </div>*/}
                                        {/*        </div>*/}
                                        {/*        <div className="col-xs-5 col-md-5 pull-right">*/}
                                        {/*            <div className="form-group">*/}
                                        {/*                <label>CV CODE</label>*/}
                                        {/*                <input type="number" className="form-control" placeholder="CVC"/>*/}
                                        {/*            </div>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*    <div className="row">*/}
                                        {/*        <div className="col-xs-12">*/}
                                        {/*            <div className="form-group">*/}
                                        {/*                <label>CARD OWNER</label>*/}
                                        {/*                <input type="text" className="form-control"*/}
                                        {/*                       placeholder="Card Owner Names"/>*/}
                                        {/*            </div>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*</form>*/}
                                    {/*</div>*/}
                                    {/*<div className="panel-footer">*/}
                                    {/*    <div className="row">*/}
                                    {/*        <div style={{marginLeft:"40%",width:"50%",marginTop:"3%"}} className="col-xs-12">*/}
                                    {/*            <Button variant="contained" color="success" style={{width:"50%",marginLeft:"25%",textAlign:"center",marginTop:"2%"}} onClick={()=>{click()}}>*/}
                                    {/*                Proceed*/}
                                    {/*            </Button>*/}
                                    {/*            <Button variant="contained"  style={{width:"50%",marginLeft:"25%",textAlign:"center",marginTop:"2%",background:"#483248"}}*/}
                                    {/*                    onClick={() => {*/}
                                    {/*                        nav("/afterbookingbutton")*/}
                                    {/*                    }}>*/}
                                    {/*                Go Back*/}
                                    {/*            </Button>*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default CardPayment;