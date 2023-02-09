import React from 'react'
import { useEffect } from 'react';
import { Row,Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
const Streaming = () => {
    const param = useParams();
    const movieId = param.id;   

    useEffect(() => {
        const iframe = document.querySelector('iframe');
        iframe.contentWindow.document.addEventListener('click', (event) => {
          if (event.target.tagName === 'A') {
            event.preventDefault();
            window.open(event.target.href, '_blank');
          }
        });
      }, []);

    return (
        <>
        <Row className='mt-5'>
            <Col className='px-5'>
                <p className='text-white fs-3 fw-bolder'>Play now</p>
            </Col>
        </Row>
        <Row >
            <Col className='d-flex justify-content-center px-5' >
                <div className='streaming d-flex justify-content-center align-item-center' >
                    <iframe id="your-iframe" src={`https://autoembed.to/movie/tmdb/${movieId}`} width="100%" height="100%"
                    scrolling="no" sandbox frameborder="0" allowfullscreen="true" title='myframe'></iframe>
                </div>
            </Col>
        </Row>
        </>
    )
}

export default Streaming;