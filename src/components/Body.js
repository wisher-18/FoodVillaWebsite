import { useState, useEffect } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

function filterData(searchText, allRestaurants){
    return allRestaurants.filter((restaurant) => restaurant.info?.name?.toLowerCase().includes(searchText.toLowerCase()));
}

const Body = () => {
    const [allRestaurants , setAllRestaurants] = useState([]);
    const [filteredRestaurants , setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState(""); 

    useEffect(()=>{
        getRestaurants();
    }, []);

    async function getRestaurants(){
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        setAllRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
    }

    if(!allRestaurants) return null;

    // if(filteredRestaurants?.length === 0) 
    // return <h1>No Restaurant Match Your Filter</h1>;

    return (allRestaurants.length === 0) ? <Shimmer /> :(
        <>
        <div className="search-container">
            <input 
                type="text" className="search-input" 
                placeholder="Search" 
                value={searchText}
                onChange={(e) => {
                    setSearchText(e.target.value);
                }}
                
            />
            <button type="submit" onClick={()=>{
                const data = filterData(searchText, allRestaurants);
                setFilteredRestaurants(data);
             }}>Submit</button>
        </div>
        <div className="restaurant-list">
            {
                filteredRestaurants.map((restaurant, index) => {
                    return <RestaurantCard {...restaurant.info } key={index}/>
                })
            }
            
        </div>
        </>
    );
};

export default Body;