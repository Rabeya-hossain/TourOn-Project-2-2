import React from 'react'

import {Button, Container, FormControl} from "@mui/material";
import {Form, Nav, Navbar, NavDropdown, NavLink} from "react-bootstrap";
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));
const  AfterLogin=()=>
{
    return(
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                            MUI
                        </Typography>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    </Toolbar>
                </AppBar>
            </Box>
            {/*<Navbar bg="light" expand="lg">*/}
            {/*    <Container fluid>*/}
            {/*        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>*/}
            {/*        <Navbar.Toggle aria-controls="navbarScroll" />*/}
            {/*        <Navbar.Collapse id="navbarScroll">*/}
            {/*            <Nav*/}
            {/*                className="me-auto my-2 my-lg-0"*/}
            {/*                style={{ maxHeight: '100px' }}*/}
            {/*                navbarScroll*/}
            {/*            >*/}
            {/*                <NavLink href="#action1">Home</NavLink>*/}
            {/*                <NavLink href="#action2">Link</NavLink>*/}
            {/*                <NavDropdown title="Link" id="navbarScrollingDropdown">*/}
            {/*                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>*/}
            {/*                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>*/}
            {/*                    <NavDropdown.Divider />*/}
            {/*                    <NavDropdown.Item href="#action5">*/}
            {/*                        Something else here*/}
            {/*                    </NavDropdown.Item>*/}
            {/*                </NavDropdown>*/}
            {/*                <Nav.Link href="#" disabled>*/}
            {/*                    Link*/}
            {/*                </Nav.Link>*/}
            {/*            </Nav>*/}
            {/*            <Form className="d-flex">*/}
            {/*                <FormControl*/}
            {/*                    type="search"*/}
            {/*                    placeholder="Search"*/}
            {/*                    className="me-2"*/}
            {/*                    aria-label="Search"*/}
            {/*                />*/}
            {/*                <Button variant="outline-success">Search</Button>*/}
            {/*            </Form>*/}
            {/*        </Navbar.Collapse>*/}
            {/*    </Container>*/}
            {/*</Navbar>*/}
        </div>
    )


}
export  default AfterLogin