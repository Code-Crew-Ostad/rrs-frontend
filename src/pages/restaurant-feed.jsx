import React from 'react'
import Master from './../components/Navbar/Master';
import RestaurantCardList from './../components/Restaurant/RestaurantCardList';

const RestaurantFeed = () => {
  return (
    <Master>
        <RestaurantCardList />
    </Master>
  )
}

export default RestaurantFeed