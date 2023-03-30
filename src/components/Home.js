import React, { useState,useEffect } from 'react'
import {Row,Col} from 'react-bootstrap'
import RestaurantCard from './RestaurantCard'
import { RestaurantList } from '../actions/homeAction'
import { useDispatch,useSelector } from 'react-redux'
function Home() {
   
    const dispatch=useDispatch()
    useEffect(
      () => {
        
        dispatch(RestaurantList())
      },[]
    )
    const {restaurants}=useSelector(state=>state.restaurantReducer)
    
    console.log(restaurants);
  return (
    
    <Row>
      
        {
          restaurants.map(item=>(
            <Col className='px-5 py-3 ' sm={6} md={4} >
            <RestaurantCard restaurant={item}/>
            </Col>
            
          ))
        }
      
    </Row>
  )
}

export default Home