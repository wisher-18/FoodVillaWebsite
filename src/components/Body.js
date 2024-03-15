import { useState } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";

function filterData(searchText){
    return restaurantList.filter((restaurant) => restaurant.name.includes(searchText));
}

const Body = () => {
    const [restaurants , setRestaurants] = useState(restaurantList);
    const [searchText, setSearchText] = useState(""); 

    //searchText is a local state variable
    //const {searchInput, setSearchInput} = useState(); //To create state variables
    return (
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
                const data = filterData(searchText, restaurants);
                setRestaurants(data);
             }}>Submit</button>
        </div>
        <div className="restaurant-list">
            {
                restaurants.map((restaurant, index) => {
                    return <RestaurantCard {...restaurant } key={index}/>
                })
            }
            
        </div>
        </>
    );
};

export default Body;