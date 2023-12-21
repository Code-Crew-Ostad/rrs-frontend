import React, { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import restaurantData from '../../data/restaurantData'
import { GetAllRestaurants } from '../../api/apiRequest';

const RestaurantCardList = () => {
const [card, setCard] = useState([])

    useEffect(()=>{
        FillCards();
    },[])

    const FillCards = async ()=>{
        let cardInfo = await GetAllRestaurants();
        setCard(cardInfo);
    }


    return (
        <>
            <div className='flex flex-wrap p-5 mt-10 gap-10 justify-center'>
                {card.map((restaurant) => (
                <RestaurantCard 
                
                    key={restaurant._id} 
                    id={restaurant._id}
                    name={restaurant.name.length > 30 ?restaurant.name.slice(0,30).concat("..."): restaurant.name}
                    image={restaurant.image}
                    address={restaurant.detailAddress.length > 40 ? restaurant.address.slice(0,40).concat("..."):restaurant.detailAddress }
                    type={restaurant.cuisineType}
                    rating={restaurant.rating}
                    // description={restaurant.description}
                    />
                ))}
            </div>
        </>
    );
};

export default RestaurantCardList;