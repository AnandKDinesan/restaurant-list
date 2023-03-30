import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import RestReview from './RestReview';
import { RestaurantList } from '../actions/homeAction'
import { useDispatch,useSelector } from 'react-redux'

function RestaurantView() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
   const params = useParams()
  console.log(params.id);

  
const dispatch=useDispatch()
  
  useEffect(() => {
   dispatch(RestaurantList())
  }, [])
const result=useSelector(state=>state.restaurantReducer)

console.log(result);
const restaurants=result.restaurants
console.log(restaurants);
  const restaurant = restaurants.find(item => item.id == params.id)
  console.log(restaurant);
  return (

    <>
      {
        restaurant ?
          (<Row className='p-5'>
            <Col md={3}>
              <Image className='rounded border p-1' src={restaurant.photograph} alt={restaurant.name} fluid></Image>
            </Col>
            <Col md={8}>
              <ListGroup>
                <ListGroup.Item><h2>{restaurant.name}</h2>
                  <p>{restaurant.neighborhood}</p>
                </ListGroup.Item>
                <ListGroup.Item><p>Cusine:{restaurant.cuisine_type}</p></ListGroup.Item>
                <ListGroup.Item><p>Address:{restaurant.address}</p></ListGroup.Item>
                <ListGroup.Item>
                  <Button className='ps-0' variant="dark" onClick={handleShow}>
                  Click Here to See Operating Hours
                  </Button>
                </ListGroup.Item>
                <ListGroup.Item>
                <p><RestReview reviews={restaurant.reviews}/></p>
              </ListGroup.Item>
              </ListGroup>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <ListGroup>
                    <ListGroup.Item>Monday : {restaurant.operating_hours.Monday}</ListGroup.Item>
                    <ListGroup.Item>Tuesday : {restaurant.operating_hours.Tuesday}</ListGroup.Item>
                    <ListGroup.Item>Wednesday : {restaurant.operating_hours.Wednesday}</ListGroup.Item>
                    <ListGroup.Item>Thursday : {restaurant.operating_hours.Thursday}</ListGroup.Item>
                    <ListGroup.Item>Friday : {restaurant.operating_hours.Friday}</ListGroup.Item>
                    <ListGroup.Item>Saturday : {restaurant.operating_hours.Saturday}</ListGroup.Item>
                    <ListGroup.Item>Sunday : {restaurant.operating_hours.Sunday}</ListGroup.Item>
                  </ListGroup>
                </Modal.Body>

              </Modal>
              
            </Col>
          </Row>) : 'Nothing to display'
      }
    </>
  )
}

export default RestaurantView