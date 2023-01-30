import React from 'react'
import { useEffect } from 'react';
import { Row,Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Frame from 'react-frame-component';
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
        <Row className='ms-4 mt-3'>
            <Col>
                <p className='text-white fs-3 fw-bolder'>Play now</p>
            </Col>
        </Row>
        <Row className='vh-100'>
            <Col className='ms-5 p-0'style={{ height: '100%' }} >
                <div style={{ width: '96%', height: '100%' }} >
                    <iframe id="your-iframe" src={`https://autoembed.to/movie/tmdb/${movieId}`} width="100%" height="100%"
                    scrolling="no" sandbox frameborder="0" allowfullscreen="true" ></iframe>
                </div>
            </Col>
        </Row>
        </>
    )
}

export default Streaming;