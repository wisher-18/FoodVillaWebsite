import {IMG_CDN_URL} from "../constants";
const RestaurantCard = ({ name, cusines, image, rating }) =>{

    return (
        <div className="card">
            <img src={IMG_CDN_URL + image} 
            alt="burger" /> 
            <h2>{name}</h2>
            <h3>{cusines.join(', ')}</h3>
            <h4>{rating} Stars</h4>
        </div>
    );
};

export default RestaurantCard;