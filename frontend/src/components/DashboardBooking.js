import React, {useEffect, useState} from "react";
import data from "./data";
import {CardActions, Dialog, Grid, ListItem, ListItemText, Slide, TextareaAutosize} from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import UserDrawer from "./UserDrawer";
import {Rating} from "@mui/lab";
import Box from "@mui/material/Box";
import CloseIcon from '@mui/icons-material/Close';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import axios from "axios";
import {hotel_id, room_idUpdate, room_typeUpdate} from "./FirstPageAdmin";
import {customer_id} from "../App";
import {adminHotel} from "./Navbar";
// import {prebooking} from "./Home";


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


const DashboardBooking=()=>
{
    const [prebooking,setprebooking]=useState([]);
    useEffect(async()=>{
        try{
            console.log("in dashboard");
            var res=await axios.post('http://localhost:8080/prebooking',{
                id:customer_id
            })
            setprebooking(res.data.data);

        }
        catch(e){
            console.log(e);
        }
    },[])


    return(


        <div>
            <UserDrawer/>
            <div style={{marginLeft:"20%"}}>
                <Grid  container spacing={4} padding={4} >
                {prebooking.map((item,index)=>
                {
                    return(
                        <Grid item xs={12} md={4}>
                            <Card sx={{ maxWidth: 345 }} >
                                <CardMedia
                                    component="img"
                                    height="140"
                                    src={item.image}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {item.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Arrival date:{item.check_indate}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        checkOut date:{item.check_outdate}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                       rooms booked: {item.rooms}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.address}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.rating}
                                    </Typography>

                                </CardContent>
                                <CardActions>

                                    {/*<Button size="small" >SEE more</Button>*/}
                                </CardActions>
                            </Card>

                        </Grid>
                    )
                })}
            </Grid>
            </div>

        </div>
    )
}

// const CardWithRating=(props)=>
// {
//     console.log(props);
//     console.log(props.data);
//     const [value, setValue] =useState(2);
//     const [anchorEl, setAnchorEl] = React.useState(null);
//     // const open = Boolean(anchorEl);
//     // const handleClick = (event) => {
//     //     setAnchorEl(event.currentTarget);
//     // };
//     // const handleClose = () => {
//     //     setAnchorEl(null);
//     // };
//     const [open, setOpen] = React.useState(false);
//
//     const handleClickOpen = () => {
//         setOpen(true);
//     };
//
//     const handleClose = () => {
//         setOpen(false);
//     };
//     return (
//         // <UserDrawer/>
//         <Grid item xs={12} md={6}>
//             <Card sx={{ maxWidth: 345,maxHeight:600 }}
//                 // onClick={()=>{click(props.data.id)}}
//             >
//                 <CardMedia
//                     component="img"
//                     height="140"
//                     src={props.data.image}
//                     alt="green iguana"
//                 />
//                 <CardContent>
//                     <Typography gutterBottom variant="h5" component="div">
//                         {props.data.name}
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary">
//                         {props.data.check_indate}
//                         <Box
//                             sx={{
//                                 '& > legend': { mt: 2 },
//                             }}
//                         >
//                             <Rating key={props.data.rating}
//                                     name="simple-controlled"
//                                     value={value}
//                                     onChange={(event, newValue) => {
//                                         setValue(newValue);
//                                     }}
//                             />
//                         </Box>
//                     </Typography>
//                 </CardContent>
//                 <CardActions>
//                     <Button size="small" >BOOK AGAIN</Button>
//                     {/*<Button*/}
//                     {/*    id="basic-button"*/}
//                     {/*    aria-controls={open ? 'basic-menu' : undefined}*/}
//                     {/*    aria-haspopup="true"*/}
//                     {/*    aria-expanded={open ? 'true' : undefined}*/}
//                     {/*    onClick={handleClick}*/}
//                     {/*>*/}
//                     {/*    Dashboard*/}
//                     {/*</Button>*/}
//                     {/*<Menu*/}
//                     {/*    id="basic-menu"*/}
//                     {/*    anchorEl={anchorEl}*/}
//                     {/*    open={open}*/}
//                     {/*    onClose={handleClose}*/}
//                     {/*    MenuListProps={{*/}
//                     {/*        'aria-labelledby': 'basic-button',*/}
//                     {/*    }}*/}
//                     {/*>*/}
//                     {/*    <MenuItem onClick={handleClose}>Profile</MenuItem>*/}
//                     {/*    <MenuItem onClick={handleClose}>My account</MenuItem>*/}
//                     {/*    <MenuItem onClick={handleClose}>Logout</MenuItem>*/}
//                     {/*</Menu>*/}
//                     <Button variant="outlined" onClick={handleClickOpen}>
//                         Review
//                     </Button>
//                     <Dialog
//                         fullScreen
//                         open={open}
//                         onClose={handleClose}
//                         TransitionComponent={Transition}
//                     >
//                         <AppBar sx={{ position: 'relative' ,background:"#dce2e7",marginBottom:"5%"}}>
//                             <Toolbar>
//                                 <IconButton
//                                     edge="start"
//                                     style={{color:"#000000"}}
//                                     onClick={handleClose}
//                                     aria-label="close"
//                                 >
//                                     <CloseIcon />
//                                 </IconButton>
//                                 <Typography sx={{ ml: 2, flex: 1 ,color:"#000000"}} variant="h6" component="div">
//                                     Review Window
//                                 </Typography>
//                                 <Button style={{color:"#000000"}} onClick={handleClose}>
//                                     save
//                                 </Button>
//                             </Toolbar>
//                         </AppBar>
//                         <p style={{textAlign:"center"}}>Hotelname review</p>
//                         <TextareaAutosize
//                             aria-label="minimum height"
//                             minRows={7}
//                             placeholder="Type here"
//                             style={{ width: "60%",marginLeft:"20%",fontFamily:"monospace"}}
//                         />
//                     </Dialog>
//
//                 </CardActions>
//             </Card>
//
//
//         </Grid>
//
//     )
// }
export default DashboardBooking