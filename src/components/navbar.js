import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import { logo } from '../assets';
import {useNavigate} from 'react-router-dom';

function NavigationBar(){
    const [searchTerm, setSearchTerm] = useState('');
    let Navigate = useNavigate();
    return (
        <Navbar collapseOnSelect bg="black"  expand="sm" variant='dark' className='px-0' sticky='top'>
            <Container className='d-flex ' fluid>
                <Navbar.Brand>
                    <Image src={logo} onClick={()=>Navigate(`/`)} fluid className="nav-img" alt="logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className=' justify-content-end'>
                <Form className="d-flex me-2 " fluid >
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        size='xs'
                        onChange={(e) =>{setSearchTerm(e.target.value)}}
                    />
                    <Button variant="dark" onClick={(e) =>{
                        e.preventDefault();
                        Navigate(`/search/${searchTerm}`);
                    }}>
                        Search
                    </Button>
                </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;
