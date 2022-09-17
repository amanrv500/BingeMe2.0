import axios from 'axios'
import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Content from '../components/content'
import Movies from '../components/movies'
import NavigationBar from '../components/navbar'

const Homepage = () => {
  return (
    <div>
        <NavigationBar  />
        <Container className='backg w-100 h-100 mb-0' fluid>
            <Row>
                <br/>
                <p className='title ms-3 mb-0 pb-0'>
                    Bingeme
                </p>
                <p className='slogan ms-3 mt-0 pt-0'>
                    Because entertainment leads to a healthy life
                </p>
                <br/>
                <br/>
                <br/>
                <br/>
            </Row>
            <Movies />
        </Container>
    </div>
  )
}

export default Homepage