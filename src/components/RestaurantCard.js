import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
function RestaurantCard({restaurant}) {
  return (
   <Link to={`/view-restaurant/${restaurant.id}`} style={{color:'white',textDecoration:'none'}}>
      <div className='p-2'><Card >
      <Card.Img style={{height:'350px',borderRadius:'30px'}} className='p-2' variant="top" src={restaurant.photograph} />
      <Card.Body>
        <Card.Title>{restaurant.name}</Card.Title>
        <Card.Text>
         <p>Cusine:{restaurant.cuisine_type}</p>
        </Card.Text>
        <Card.Text>
         <p>{restaurant.neighborhood}</p>
        </Card.Text>
  
      </Card.Body>
    </Card>
      </div>
   </Link>

  )
}

export default RestaurantCard