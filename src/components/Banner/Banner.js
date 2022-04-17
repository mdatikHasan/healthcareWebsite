import React from 'react';
import './Banner.css';
import { Button, Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
<Carousel className='carousel'>
  <Carousel.Item>
  
    <img
      className="d-block w-100" height={400} width={50}
      src="https://www.transunion.com/content/dam/transunion/global/business/images/S-healthcare-patient-access-related-solutions-490x250.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h1 className="text-success">Best & Top Doctors</h1>
      <h1 className="text-success">In Our Clinic</h1>
      <p className='text-danger'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, illo.</p>
      <Button variant="danger" size="lg">
      See Details
    </Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100" height={400} width={50}
      src="https://png.pngtree.com/background/20210710/original/pngtree-medical-care-safety-health-banner-picture-image_1027477.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h1 className="text-success">We Provide Total</h1>
      <h1 className="text-success">Health Care Solution</h1>
      <p className='text-danger'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, labore.</p>
      <Button variant="warning" size="lg">
      See Details
    </Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100" height={400} width={50}
      src="https://sitacorp.com/img/banner-healthcare-new.jpg"
    />

    <Carousel.Caption>
    <h1 className="text-success">Best & Top Doctors</h1>
      <h1 className="text-success">In Our Clinic</h1>
      <p className='text-danger'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, illo.</p>
      <Button variant="danger" size="lg">
      See Details
    </Button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
};

export default Banner;